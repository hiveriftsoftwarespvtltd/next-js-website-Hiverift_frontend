import { apiClient, ENDPOINTS, API_BASE_URL } from "@/app/config/api.config";

export async function submitContactForm(formData: FormData) {
  try {
    const payload = {
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      company: formData.get("company") || "",
      service: formData.get("service") || "",
      message: formData.get("message") || "",
    };

    const response = await apiClient.post(`${ENDPOINTS.SUBMIT_FORM}/contact`, payload);
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Contact Form Submission Error:", error);
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to submit inquiry.",
    };
  }
}

export async function submitJobApplication(formData: FormData) {
  try {
    const isFormData = typeof FormData !== "undefined" && formData instanceof FormData;
    if (isFormData) {
      const baseUrl = API_BASE_URL.replace(/\/$/, "");
      const url = `${baseUrl}${ENDPOINTS.SUBMIT_FORM}`;
      const res = await fetch(url, { method: "POST", body: formData });
      const json = await res.json();
      return { success: true, data: json };
    }
    const response = await apiClient.post(ENDPOINTS.SUBMIT_FORM, formData);
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Job Application Submission Error:", error);
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to submit application.",
    };
  }
}

export async function getContactSubmissions() {
  try {
    const response = await apiClient.get(ENDPOINTS.SUBMIT_FORM);
    return {
      success: true,
      data: response.data?.data || response.data || [],
    };
  } catch (error: any) {
    console.error("Fetch Submissions Error:", error);
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to fetch form submissions.",
      data: [],
    };
  }
}

export async function deleteSubmission(id: string) {
  try {
    const response = await apiClient.delete(`${ENDPOINTS.SUBMIT_FORM}/${id}`);
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Delete Submission Error:", error);
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to delete submission.",
    };
  }
}

export async function updateSubmissionStatus(id: string, status: string) {
  try {
    const response = await apiClient.patch(`${ENDPOINTS.SUBMIT_FORM}/${id}/status`, { status });
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Update Status Error:", error);
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to update status.",
    };
  }
}

export async function purgeAllSubmissions() {
  try {
    const response = await apiClient.delete(`${ENDPOINTS.SUBMIT_FORM}/purge-all`);
    return { success: true, message: response.data?.message || "All old queries cleared successfully." };
  } catch (error: any) {
    console.error("Purge Submissions Error:", error);
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to purge queries.",
    };
  }
}

export async function updateSubmissionDetails(
  id: string,
  details: { status?: string; priority?: string; assignedTo?: string; followUpDate?: string; note?: string; author?: string }
) {
  try {
    const response = await apiClient.patch(`${ENDPOINTS.SUBMIT_FORM}/${id}/details`, details);
    return { success: true, data: response.data?.data, message: response.data?.message };
  } catch (error: any) {
    console.error("Update Query Details Error:", error);
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to update query details.",
    };
  }
}

export async function addSubmissionNote(id: string, note: string, author?: string) {
  try {
    const response = await apiClient.post(`${ENDPOINTS.SUBMIT_FORM}/${id}/notes`, { note, author });
    return { success: true, data: response.data?.data, message: response.data?.message };
  } catch (error: any) {
    console.error("Add Query Note Error:", error);
    return {
      success: false,
      message: error?.response?.data?.message || error?.message || "Failed to add internal note.",
    };
  }
}
