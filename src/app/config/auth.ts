import { apiClient, ENDPOINTS } from "@/app/config/api.config";

export const ADMIN_SESSION_KEY = "hiverift_admin_session";

export type RoleType = "Admin" | "Sales" | "Blog";

export interface AdminUser {
  id?: string;
  email: string;
  name: string;
  role: RoleType;
  token?: string;
}

export interface LoginResponse {
  success: boolean;
  requireOtp?: boolean;
  tempToken?: string;
  targetEmail?: string;
  maskedEmail?: string;
  userRole?: RoleType;
  userName?: string;
  message?: string;
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  const session = localStorage.getItem(ADMIN_SESSION_KEY);
  return !!session;
}

export function normalizeRole(role?: string): RoleType {
  if (!role) return "Admin";
  const r = role.toLowerCase().trim();
  if (r.includes("admin")) return "Admin";
  if (r.includes("sale")) return "Sales";
  if (r.includes("blog")) return "Blog";
  return "Admin";
}

export function getAdminUser(): AdminUser | null {
  if (typeof window === "undefined") return null;
  const session = localStorage.getItem(ADMIN_SESSION_KEY);
  if (!session) return null;
  try {
    const parsed = JSON.parse(session);
    parsed.role = normalizeRole(parsed.role);
    return parsed;
  } catch {
    return null;
  }
}

export function getAuthToken(): string | null {
  const user = getAdminUser();
  return user?.token || null;
}

export function getAuthHeaders() {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function hasRole(allowed: RoleType | RoleType[]): boolean {
  const user = getAdminUser();
  if (!user) return false;
  const role = normalizeRole(user.role);
  if (role === "Admin") return true; // Super Admin has access to all modules
  const roles = (Array.isArray(allowed) ? allowed : [allowed]).map((r) => normalizeRole(r));
  return roles.includes(role);
}

export function logoutAdmin() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  }
}

/**
 * Step 1 of 2FA: Submit Email and Password to trigger OTP
 */
export async function loginAdminApi(email: string, pass: string): Promise<LoginResponse> {
  try {
    const response = await apiClient.post(ENDPOINTS.LOGIN, {
      email: email.trim(),
      password: pass,
    });

    const json = response.data;
    if (json.success) {
      return {
        success: true,
        requireOtp: json.requireOtp ?? true,
        tempToken: json.tempToken,
        targetEmail: json.targetEmail || "hiverift@gmail.com",
        maskedEmail: json.maskedEmail || "hi***@gmail.com",
        userRole: json.userRole || "Admin",
        userName: json.userName || "HiveRift Staff",
        message: json.message,
      };
    }
    return { success: false, message: json.message || "Invalid credentials." };
  } catch (error: any) {
    const errorMsg = error?.response?.data?.message || error?.message || "Login failed. Please check credentials.";
    return { success: false, message: errorMsg };
  }
}

/**
 * Step 2 of 2FA: Verify 6-digit OTP and complete login session
 */
export async function verifyOtpApi(tempToken: string, otp: string): Promise<{ success: boolean; message?: string; user?: AdminUser }> {
  try {
    const response = await apiClient.post("/auth/verify-otp", {
      tempToken,
      otp: otp.trim(),
    });

    const json = response.data;
    if (json.success && json.token) {
      const user: AdminUser = {
        id: json.user?.id,
        email: json.user?.email,
        name: json.user?.name || "HiveRift Administrator",
        role: json.user?.role || "Admin",
        token: json.token,
      };

      if (typeof window !== "undefined") {
        localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(user));
      }
      return { success: true, user };
    }
    return { success: false, message: json.message || "Failed to verify OTP." };
  } catch (error: any) {
    const errorMsg = error?.response?.data?.message || error?.message || "Invalid or expired OTP code.";
    return { success: false, message: errorMsg };
  }
}

/**
 * Resend OTP to hiverift@gmail.com
 */
export async function resendOtpApi(tempToken: string): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await apiClient.post("/auth/resend-otp", { tempToken });
    return { success: true, message: response.data?.message || "OTP resent successfully." };
  } catch (error: any) {
    return {
      success: false,
      message: error?.response?.data?.message || "Failed to resend OTP.",
    };
  }
}

/**
 * Update Profile (Name & Email)
 */
export async function updateProfileApi(name: string, email: string, currentPassword: string) {
  try {
    const response = await apiClient.put(
      "/auth/profile",
      { name, email, currentPassword },
      { headers: getAuthHeaders() }
    );
    if (response.data?.success && response.data?.user) {
      const current = getAdminUser();
      if (current) {
        const updated = { ...current, name, email };
        localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(updated));
      }
    }
    return { success: true, message: response.data?.message || "Profile updated successfully." };
  } catch (error: any) {
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to update profile.",
    };
  }
}

/**
 * Change Password (bcrypt)
 */
export async function changePasswordApi(currentPassword: string, newPassword: string) {
  try {
    const response = await apiClient.put(
      "/auth/change-password",
      { currentPassword, newPassword },
      { headers: getAuthHeaders() }
    );
    return { success: true, message: response.data?.message || "Password changed successfully." };
  } catch (error: any) {
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to change password.",
    };
  }
}

/**
 * Admin: Get All CMS Users
 */
export async function getUsersApi() {
  try {
    const response = await apiClient.get("/auth/users", { headers: getAuthHeaders() });
    return { success: true, data: response.data?.data || [] };
  } catch (error: any) {
    return { success: false, data: [], message: error?.response?.data?.message || "Failed to fetch users." };
  }
}

/**
 * Admin: Create New CMS User
 */
export async function createUserApi(payload: { name: string; email: string; password: string; role: RoleType }) {
  try {
    const response = await apiClient.post("/auth/users", payload, { headers: getAuthHeaders() });
    return { success: true, data: response.data?.data, message: response.data?.message };
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message || "Failed to create user." };
  }
}

/**
 * Admin: Update User (role or active status)
 */
export async function updateUserApi(id: string, payload: { role?: RoleType; isActive?: boolean; name?: string }) {
  try {
    const response = await apiClient.patch(`/auth/users/${id}`, payload, { headers: getAuthHeaders() });
    return { success: true, message: response.data?.message };
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message || "Failed to update user." };
  }
}

/**
 * Admin: Delete User
 */
export async function deleteUserApi(id: string) {
  try {
    const response = await apiClient.delete(`/auth/users/${id}`, { headers: getAuthHeaders() });
    return { success: true, message: response.data?.message };
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message || "Failed to delete user." };
  }
}

export interface TestimonialItem {
  _id: string;
  name: string;
  role?: string;
  company?: string;
  location?: string;
  rating?: number;
  timeAgo?: string;
  service?: string;
  text: string;
  avatarBg?: string;
  badge?: string;
  googleReviewUrl?: string;
  isPublished?: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Public: Fetch Published Testimonials for Carousel
 */
export async function getPublicTestimonialsApi(): Promise<{ success: boolean; data: TestimonialItem[] }> {
  try {
    const response = await apiClient.get("/testimonials");
    return { success: true, data: response.data?.data || [] };
  } catch {
    return { success: false, data: [] };
  }
}

/**
 * Admin: Fetch All Testimonials (including drafts)
 */
export async function getAdminTestimonialsApi(): Promise<{ success: boolean; data: TestimonialItem[]; message?: string }> {
  try {
    const response = await apiClient.get("/testimonials/admin", { headers: getAuthHeaders() });
    return { success: true, data: response.data?.data || [] };
  } catch (error: any) {
    return { success: false, data: [], message: error?.response?.data?.message || "Failed to fetch testimonials." };
  }
}

/**
 * Admin: Create New Testimonial
 */
export async function createTestimonialApi(payload: Partial<TestimonialItem>) {
  try {
    const response = await apiClient.post("/testimonials", payload, { headers: getAuthHeaders() });
    return { success: true, data: response.data?.data, message: response.data?.message || "Review created successfully." };
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message || "Failed to create review." };
  }
}

/**
 * Admin: Update Testimonial
 */
export async function updateTestimonialApi(id: string, payload: Partial<TestimonialItem>) {
  try {
    const response = await apiClient.patch(`/testimonials/${id}`, payload, { headers: getAuthHeaders() });
    return { success: true, data: response.data?.data, message: response.data?.message || "Review updated successfully." };
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message || "Failed to update review." };
  }
}

/**
 * Admin: Toggle Testimonial Publish Status
 */
export async function toggleTestimonialApi(id: string) {
  try {
    const response = await apiClient.patch(`/testimonials/${id}/toggle`, {}, { headers: getAuthHeaders() });
    return { success: true, data: response.data?.data, message: response.data?.message };
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message || "Failed to toggle review status." };
  }
}

/**
 * Admin: Delete Testimonial
 */
export async function deleteTestimonialApi(id: string) {
  try {
    const response = await apiClient.delete(`/testimonials/${id}`, { headers: getAuthHeaders() });
    return { success: true, message: response.data?.message || "Review deleted successfully." };
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message || "Failed to delete review." };
  }
}

export interface CaseStudyItem {
  _id?: string;
  id?: string;
  projectId: string;
  title: string;
  category: "web" | "ecommerce" | "software";
  categoryLabel: string;
  description: string;
  client: string;
  industry: string;
  timeline: string;
  services: string[];
  techStack: string[];
  challenge: string;
  solution: string;
  keyFeatures: string[];
  howWeStarted: string;
  humanTouchPoints: { title: string; description: string }[];
  image: string;
  projectUrl: string;
  isPublished?: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Public: Fetch Published Case Studies for Website & Carousel
 */
export async function getPublicCaseStudiesApi(): Promise<{ success: boolean; data: CaseStudyItem[] }> {
  try {
    const response = await apiClient.get("/case-studies");
    return { success: true, data: response.data?.data || [] };
  } catch {
    return { success: false, data: [] };
  }
}

/**
 * Public: Fetch Single Case Study by ID or ProjectId Slug
 */
export async function getCaseStudyByIdOrSlugApi(idOrSlug: string): Promise<{ success: boolean; data?: CaseStudyItem }> {
  try {
    const response = await apiClient.get(`/case-studies/${idOrSlug}`);
    return { success: true, data: response.data?.data };
  } catch {
    return { success: false };
  }
}

/**
 * Admin: Fetch All Case Studies (including drafts)
 */
export async function getAdminCaseStudiesApi(): Promise<{ success: boolean; data: CaseStudyItem[] }> {
  try {
    const response = await apiClient.get("/case-studies/admin", { headers: getAuthHeaders() });
    return { success: true, data: response.data?.data || [] };
  } catch {
    return { success: false, data: [] };
  }
}

/**
 * Admin: Create New Case Study (supports FormData or JSON payload)
 */
export async function createCaseStudyApi(payload: FormData | Partial<CaseStudyItem>) {
  try {
    const headers = { ...getAuthHeaders() };
    if (payload instanceof FormData) {
      delete headers["Content-Type"];
    }
    const response = await apiClient.post("/case-studies", payload, { headers });
    return { success: true, data: response.data?.data, message: response.data?.message || "Case study created successfully." };
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message || "Failed to create case study." };
  }
}

/**
 * Admin: Update Case Study
 */
export async function updateCaseStudyApi(id: string, payload: FormData | Partial<CaseStudyItem>) {
  try {
    const headers = { ...getAuthHeaders() };
    if (payload instanceof FormData) {
      delete headers["Content-Type"];
    }
    const response = await apiClient.patch(`/case-studies/${id}`, payload, { headers });
    return { success: true, data: response.data?.data, message: response.data?.message || "Case study updated successfully." };
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message || "Failed to update case study." };
  }
}

/**
 * Admin: Toggle Case Study Publish Status
 */
export async function toggleCaseStudyApi(id: string) {
  try {
    const response = await apiClient.patch(`/case-studies/${id}/toggle`, {}, { headers: getAuthHeaders() });
    return { success: true, data: response.data?.data, message: response.data?.message };
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message || "Failed to toggle status." };
  }
}

/**
 * Admin: Delete Case Study
 */
export async function deleteCaseStudyApi(id: string) {
  try {
    const response = await apiClient.delete(`/case-studies/${id}`, { headers: getAuthHeaders() });
    return { success: true, message: response.data?.message || "Case study deleted successfully." };
  } catch (error: any) {
    return { success: false, message: error?.response?.data?.message || "Failed to delete case study." };
  }
}


