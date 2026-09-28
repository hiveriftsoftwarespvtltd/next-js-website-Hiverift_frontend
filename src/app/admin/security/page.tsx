"use client";

import { useEffect, useState } from "react";
import { AdminGuard } from "../components/AdminGuard";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminHeader } from "../components/AdminHeader";
import {
  getAdminUser,
  AdminUser,
  updateProfileApi,
  changePasswordApi,
  getUsersApi,
  createUserApi,
  updateUserApi,
  deleteUserApi,
  RoleType,
} from "@/app/config/auth";
import {
  ShieldCheck,
  KeyRound,
  User,
  Mail,
  Lock,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  RefreshCw,
  Users,
  ShieldAlert,
  Clock,
} from "lucide-react";
import Swal from "sweetalert2";

export default function AdminSecurityPage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [activeTab, setActiveTab] = useState<"profile" | "team" | "2fa">("profile");

  // Profile Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePass, setProfilePass] = useState("");
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);

  // Password Form state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [isChangingPass, setIsChangingPass] = useState(false);

  // Team Management state (Admin only)
  const [teamUsers, setTeamUsers] = useState<any[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState<RoleType>("Sales");
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  useEffect(() => {
    const user = getAdminUser();
    setCurrentUser(user);
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
    if (user?.role === "Admin") {
      fetchTeamUsers();
    }
  }, []);

  const fetchTeamUsers = async () => {
    setIsLoadingUsers(true);
    try {
      const res = await getUsersApi();
      if (res.success) {
        setTeamUsers(res.data);
      }
    } catch (e) {
      console.error("Failed to load users:", e);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  // Handle Update Profile
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profilePass) {
      Swal.fire({
        icon: "warning",
        title: "Password Required",
        text: "Please enter your current password to authorize changes to your login ID or name.",
        background: "#0f172a",
        color: "#ffffff",
      });
      return;
    }

    setIsUpdatingProfile(true);
    try {
      const res = await updateProfileApi(name, email, profilePass);
      if (res.success) {
        setProfilePass("");
        setCurrentUser(getAdminUser());
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: "Your login ID and profile name have been updated successfully.",
          background: "#0f172a",
          color: "#ffffff",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: res.message || "Failed to update profile.",
          background: "#0f172a",
          color: "#ffffff",
        });
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.message || "Something went wrong.",
        background: "#0f172a",
        color: "#ffffff",
      });
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  // Handle Change Password
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Password Too Short",
        text: "New password must be at least 6 characters long.",
        background: "#0f172a",
        color: "#ffffff",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Passwords Do Not Match",
        text: "The new password and confirmation password do not match.",
        background: "#0f172a",
        color: "#ffffff",
      });
      return;
    }

    setIsChangingPass(true);
    try {
      const res = await changePasswordApi(currentPassword, newPassword);
      if (res.success) {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        Swal.fire({
          icon: "success",
          title: "Password Secured",
          text: "Your password has been securely hashed with bcrypt and updated.",
          background: "#0f172a",
          color: "#ffffff",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: res.message || "Failed to change password.",
          background: "#0f172a",
          color: "#ffffff",
        });
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.message || "Something went wrong.",
        background: "#0f172a",
        color: "#ffffff",
      });
    } finally {
      setIsChangingPass(false);
    }
  };

  // Handle Create User
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreatingUser(true);
    try {
      const res = await createUserApi({
        name: newUserName,
        email: newUserEmail,
        password: newUserPassword,
        role: newUserRole,
      });

      if (res.success) {
        setIsAddUserModalOpen(false);
        setNewUserName("");
        setNewUserEmail("");
        setNewUserPassword("");
        fetchTeamUsers();
        Swal.fire({
          icon: "success",
          title: "Staff Member Created",
          text: `User ${newUserEmail} provisioned with role '${newUserRole}'.`,
          background: "#0f172a",
          color: "#ffffff",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Creation Failed",
          text: res.message || "Failed to create user.",
          background: "#0f172a",
          color: "#ffffff",
        });
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.message || "Something went wrong.",
        background: "#0f172a",
        color: "#ffffff",
      });
    } finally {
      setIsCreatingUser(false);
    }
  };

  // Handle Role Change
  const handleRoleChange = async (userId: string, newRole: RoleType) => {
    try {
      const res = await updateUserApi(userId, { role: newRole });
      if (res.success) {
        fetchTeamUsers();
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: `Role updated to '${newRole}'`,
          showConfirmButton: false,
          timer: 2000,
          background: "#0f172a",
          color: "#ffffff",
        });
      }
    } catch (e) {
      console.error("Role update failed:", e);
    }
  };

  // Handle Delete User
  const handleDeleteUser = async (userId: string, userEmail: string) => {
    const confirm = await Swal.fire({
      title: "Delete Staff Account?",
      text: `Are you sure you want to permanently remove access for ${userEmail}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#334155",
      confirmButtonText: "Yes, Delete Account",
      background: "#0f172a",
      color: "#ffffff",
    });

    if (confirm.isConfirmed) {
      const res = await deleteUserApi(userId);
      if (res.success) {
        fetchTeamUsers();
        Swal.fire({
          icon: "success",
          title: "Account Deleted",
          text: `Access for ${userEmail} has been revoked.`,
          background: "#0f172a",
          color: "#ffffff",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: res.message || "Failed to delete user.",
          background: "#0f172a",
          color: "#ffffff",
        });
      }
    }
  };

  const isAdmin = currentUser?.role === "Admin";

  return (
    <AdminGuard allowedRoles={["Admin", "Sales", "Blog"]}>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex font-['Roboto',sans-serif]">
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
          <AdminHeader onOpenSidebar={() => setIsMobileSidebarOpen(true)} />

          <main className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                  <ShieldCheck size={28} className="text-emerald-400" />
                  <span>Account & Access Security</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Manage your personal credentials, change login email & password, and review role-based access policies.
                </p>
              </div>

              {isAdmin && (
                <button
                  onClick={() => setIsAddUserModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-900/40 transition-all cursor-pointer self-start sm:self-auto"
                >
                  <Plus size={16} />
                  <span>Add Staff Member</span>
                </button>
              )}
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "profile"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/40"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                My Credentials & Password
              </button>

              {isAdmin && (
                <button
                  onClick={() => setActiveTab("team")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "team"
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/40"
                      : "text-slate-400 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  Team RBAC Users ({teamUsers.length})
                </button>
              )}

              <button
                onClick={() => setActiveTab("2fa")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "2fa"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/40"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                2FA OTP Shield
              </button>
            </div>

            {/* ================= TAB 1: MY PROFILE & PASSWORD ================= */}
            {activeTab === "profile" && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Change Login ID / Name Form */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
                  <h2 className="text-lg font-black text-white mb-2 flex items-center gap-2">
                    <User size={18} className="text-emerald-400" />
                    <span>Change Login ID & Name</span>
                  </h2>
                  <p className="text-xs text-slate-400 mb-6">
                    Update your official staff display name or administrative email address.
                  </p>

                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Display Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Login ID / Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all font-mono"
                      />
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                      <label className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                        Confirm Current Password (Required)
                      </label>
                      <input
                        type="password"
                        required
                        value={profilePass}
                        onChange={(e) => setProfilePass(e.target.value)}
                        placeholder="Enter current password to save"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all placeholder:text-slate-600"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isUpdatingProfile}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isUpdatingProfile ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>Saving Profile...</span>
                        </>
                      ) : (
                        <span>Save Login Credentials</span>
                      )}
                    </button>
                  </form>
                </div>

                {/* Change Password Form */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
                  <h2 className="text-lg font-black text-white mb-2 flex items-center gap-2">
                    <KeyRound size={18} className="text-emerald-400" />
                    <span>Change Account Password</span>
                  </h2>
                  <p className="text-xs text-slate-400 mb-6">
                    Passwords must be at least 6 characters and are protected with bcrypt cryptographic hashing.
                  </p>

                  <form onSubmit={handleChangePassword} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Current Password
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type={showCurrentPass ? "text" : "password"}
                          required
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-4 pr-11 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPass(!showCurrentPass)}
                          className="absolute right-4 text-slate-500 hover:text-white"
                        >
                          {showCurrentPass ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        New Password (Min. 6 chars)
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type={showNewPass ? "text" : "password"}
                          required
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-4 pr-11 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPass(!showNewPass)}
                          className="absolute right-4 text-slate-500 hover:text-white"
                        >
                          {showNewPass ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isChangingPass}
                      className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isChangingPass ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>Hashing & Saving...</span>
                        </>
                      ) : (
                        <span>Update Password</span>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* ================= TAB 2: TEAM RBAC USERS (ADMIN ONLY) ================= */}
            {activeTab === "team" && isAdmin && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h2 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                      <Users size={20} className="text-emerald-400" />
                      <span>Role-Based Access Control (RBAC) Accounts</span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Admin: Full access. Sales: Inquiries and lead management only. Blog Team: Articles only.
                    </p>
                  </div>

                  <button
                    onClick={fetchTeamUsers}
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
                    title="Refresh User List"
                  >
                    <RefreshCw size={16} className={isLoadingUsers ? "animate-spin" : ""} />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider font-mono">
                      <tr>
                        <th className="p-3.5 pl-4 rounded-l-xl">User Name</th>
                        <th className="p-3.5">Email / Login ID</th>
                        <th className="p-3.5">Assigned Role</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5">Last Login</th>
                        <th className="p-3.5 pr-4 rounded-r-xl text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {teamUsers.map((u) => {
                        const isSelf = u._id === currentUser?.id || u.email === currentUser?.email;
                        const roleColor =
                          u.role === "Admin"
                            ? "bg-emerald-950/80 border-emerald-800 text-emerald-400"
                            : u.role === "Sales"
                            ? "bg-blue-950/80 border-blue-800 text-blue-400"
                            : "bg-purple-950/80 border-purple-800 text-purple-400";

                        return (
                          <tr key={u._id} className="hover:bg-slate-800/30 transition-colors">
                            <td className="p-3.5 pl-4 font-bold text-white flex items-center gap-2">
                              <span>{u.name}</span>
                              {isSelf && (
                                <span className="px-1.5 py-0.2 rounded bg-slate-800 text-[9px] text-slate-400 font-mono">
                                  You
                                </span>
                              )}
                            </td>
                            <td className="p-3.5 font-mono text-slate-300 text-[11px]">{u.email}</td>
                            <td className="p-3.5">
                              <select
                                value={u.role}
                                disabled={isSelf}
                                onChange={(e) => handleRoleChange(u._id, e.target.value as RoleType)}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold border outline-none bg-slate-950 cursor-pointer ${roleColor}`}
                              >
                                <option value="Admin">Admin</option>
                                <option value="Sales">Sales Team</option>
                                <option value="Blog">Blog Team</option>
                              </select>
                            </td>
                            <td className="p-3.5">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Active</span>
                              </span>
                            </td>
                            <td className="p-3.5 text-slate-400 font-mono text-[11px]">
                              {u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "Never logged in"}
                            </td>
                            <td className="p-3.5 pr-4 text-right">
                              {!isSelf && (
                                <button
                                  onClick={() => handleDeleteUser(u._id, u.email)}
                                  className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition-colors cursor-pointer"
                                  title="Revoke Access"
                                >
                                  <Trash2 size={14} />
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ================= TAB 3: 2FA OTP SECURITY STATUS ================= */}
            {activeTab === "2fa" && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl max-w-3xl space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-900/30">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white">Two-Factor OTP Security Enforced</h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Mandatory multi-factor verification active on all CMS access points.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Registered 2FA Mailbox
                    </span>
                    <div className="text-sm font-bold text-emerald-400 font-mono">
                      hiverift@gmail.com
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Every sign-in request dispatches a single-use 6-digit OTP code to this address.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      OTP Validity Window
                    </span>
                    <div className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                      <Clock size={14} className="text-emerald-400" />
                      <span>10 Minutes (600 seconds)</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Protected against brute-force attacks with a 5-attempt threshold and 60-second resend cooldown.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/80 text-xs text-slate-300 space-y-2">
                  <div className="font-bold text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    <span>Compliance & Security Covenant</span>
                  </div>
                  <p className="leading-relaxed">
                    OTP authentication remains mandatory whether accessing the CMS via local development servers (`http://localhost:3000`) or from live production cloud domains. Credentials and JWT session keys are stored in encrypted form.
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>

        {/* Add User Modal */}
        {isAddUserModalOpen && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Plus size={18} className="text-emerald-400" />
                  <span>Provision New Staff Member</span>
                </h3>
                <button
                  onClick={() => setIsAddUserModalOpen(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateUser} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Login Email
                  </label>
                  <input
                    type="email"
                    required
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    placeholder="e.g. rahul@hiverift.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Initial Password (Min. 6 chars)
                  </label>
                  <input
                    type="password"
                    required
                    value={newUserPassword}
                    onChange={(e) => setNewUserPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Access Role & Permissions
                  </label>
                  <select
                    value={newUserRole}
                    onChange={(e) => setNewUserRole(e.target.value as RoleType)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all cursor-pointer"
                  >
                    <option value="Sales">Sales Team (Manage & Follow-up Client Queries)</option>
                    <option value="Blog">Blog Team (Manage & Publish Articles Only)</option>
                    <option value="Admin">Admin (Full Administrative Access to All)</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsAddUserModalOpen(false)}
                    className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isCreatingUser}
                    className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isCreatingUser ? (
                      <>
                        <RefreshCw size={14} className="animate-spin" />
                        <span>Creating...</span>
                      </>
                    ) : (
                      <span>Create Account</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminGuard>
  );
}
