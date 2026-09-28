"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AdminGuard } from "./components/AdminGuard";
import { AdminSidebar } from "./components/AdminSidebar";
import { AdminHeader } from "./components/AdminHeader";
import { getAdminUser, AdminUser } from "@/app/config/auth";
import { getContactSubmissions } from "@/app/actions/contactActions";
import { getBlogsFromApi } from "@/app/actions/adminActions";
import {
  Inbox,
  FileText,
  ShieldCheck,
  Users,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  Phone,
  MessageSquare,
  RefreshCw,
  Star,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentUser(getAdminUser());
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setIsLoading(true);
    try {
      const [inqRes, blogRes] = await Promise.allSettled([
        getContactSubmissions(),
        getBlogsFromApi(),
      ]);

      if (inqRes.status === "fulfilled" && inqRes.value.success) {
        setInquiries(inqRes.value.data || []);
      }
      if (blogRes.status === "fulfilled" && Array.isArray(blogRes.value)) {
        setBlogs(blogRes.value);
      }
    } catch (e) {
      console.error("Dashboard data load error:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const userRole = currentUser?.role || "Admin";

  // Derive Metrics
  const totalInquiries = inquiries.length;
  const newInquiries = inquiries.filter((q) => q.status === "New" || q.status === "Pending").length;
  const inProgress = inquiries.filter((q) => q.status === "In Progress" || q.status === "Contacted").length;
  const converted = inquiries.filter((q) => q.status === "Converted").length;
  const followUps = inquiries.filter((q) => q.followUpDate || q.status === "Follow-up Scheduled").length;
  const totalBlogs = blogs.length;

  return (
    <AdminGuard allowedRoles={["Admin", "Sales", "Blog"]}>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex font-['Roboto',sans-serif]">
        {/* Sidebar */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
          <AdminHeader onOpenSidebar={() => setIsMobileSidebarOpen(true)} />

          <main className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1">
            {/* Top Welcome Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-900/50 p-6 sm:p-8 shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-400 text-xs font-mono font-bold mb-3">
                    <Sparkles size={13} />
                    <span>2FA OTP Authenticated • Role: {userRole}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Welcome back, {currentUser?.name || "Staff Member"}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                    HiveRift CMS Command Center. Manage dynamic inquiries, update client milestones, publish articles, and maintain role-based account security.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={loadDashboardData}
                    className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                    title="Refresh Live Metrics"
                  >
                    <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
                  </button>

                  {(userRole === "Admin" || userRole === "Sales") && (
                    <Link
                      href="/admin/inquiries"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-900/50 transition-all cursor-pointer"
                    >
                      <Inbox size={15} />
                      <span>Manage Inquiries</span>
                    </Link>
                  )}

                  {(userRole === "Admin" || userRole === "Sales") && (
                    <Link
                      href="/admin/testimonials"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold text-xs transition-all cursor-pointer"
                    >
                      <Star size={15} className="fill-amber-400" />
                      <span>Google Reviews</span>
                    </Link>
                  )}

                  {(userRole === "Admin" || userRole === "Blog") && (
                    <Link
                      href="/admin/blogs"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs transition-all cursor-pointer"
                    >
                      <FileText size={15} />
                      <span>Blog Editor</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Total Inquiries */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Total Queries</span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Inbox size={16} />
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">{totalInquiries}</div>
                  <div className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                    <TrendingUp size={12} />
                    <span>Real-time client submissions</span>
                  </div>
                </div>
              </div>

              {/* New Leads */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">New / Uncontacted</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Clock size={16} />
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-400">{newInquiries}</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-1">Pending first sales touchpoint</div>
                </div>
              </div>

              {/* Follow-ups & Active */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Active Pipelines</span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <Calendar size={16} />
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">{inProgress + followUps}</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-1">{converted} converted to projects</div>
                </div>
              </div>

              {/* Published Blogs / Security */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">CMS Articles</span>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <FileText size={16} />
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">{totalBlogs}</div>
                  <div className="text-[11px] text-purple-400 font-medium mt-1">Published live on website</div>
                </div>
              </div>
            </div>

            {/* Inquiries Snapshot & Quick Management */}
            {(userRole === "Admin" || userRole === "Sales") && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h2 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                      <Inbox size={20} className="text-emerald-400" />
                      <span>Recent Client Queries</span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      New inquiries arriving from website contact, service quoting, and project modals.
                    </p>
                  </div>

                  <Link
                    href="/admin/inquiries"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>View All ({totalInquiries})</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {inquiries.length === 0 ? (
                  <div className="text-center py-12 px-4 rounded-2xl bg-slate-950/60 border border-dashed border-slate-800">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">Query Log is Clean & Ready</h3>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      All previous test/old queries have been deleted. New incoming client inquiries from the website will display here in real time.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider font-mono">
                        <tr>
                          <th className="p-3.5 pl-4 rounded-l-xl">Client / Contact</th>
                          <th className="p-3.5">Service Requested</th>
                          <th className="p-3.5">Status</th>
                          <th className="p-3.5">Date</th>
                          <th className="p-3.5 pr-4 rounded-r-xl text-right">Quick Contact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {inquiries.slice(0, 5).map((q: any) => {
                          const clientName = q.name || q.fullName || "Prospective Client";
                          const clientPhone = q.phone || "";
                          const clientEmail = q.email || "";

                          return (
                            <tr key={q._id} className="hover:bg-slate-800/40 transition-colors">
                              <td className="p-3.5 pl-4">
                                <div className="font-bold text-white">{clientName}</div>
                                <div className="text-[11px] text-slate-400 font-mono">{clientEmail}</div>
                              </td>
                              <td className="p-3.5 text-slate-300">
                                {q.service || q.position || "General Web Inquiry"}
                              </td>
                              <td className="p-3.5">
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-950/80 border border-emerald-800 text-emerald-400">
                                  {q.status || "New"}
                                </span>
                              </td>
                              <td className="p-3.5 text-slate-400 font-mono text-[11px]">
                                {q.createdAt ? new Date(q.createdAt).toLocaleDateString() : "Recent"}
                              </td>
                              <td className="p-3.5 pr-4 text-right">
                                <div className="inline-flex items-center gap-1.5">
                                  {clientPhone && (
                                    <a
                                      href={`https://wa.me/${clientPhone.replace(/[^0-9]/g, "")}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-colors"
                                      title="Open WhatsApp Chat"
                                    >
                                      <MessageSquare size={14} />
                                    </a>
                                  )}
                                  {clientPhone && (
                                    <a
                                      href={`tel:${clientPhone}`}
                                      className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                                      title="Call Client"
                                    >
                                      <Phone size={14} />
                                    </a>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Quick Management Shortcuts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/admin/security"
                className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="text-base font-black text-white mb-1">
                    {userRole === "Admin" ? "User Roles & Password Security" : "My Password & Account"}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {userRole === "Admin"
                      ? "Change login credentials, enforce 2FA OTP policies, and provision team roles (Sales, Blog)."
                      : "Update your login email, change your password, and verify active 2FA status."}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center text-xs font-bold text-emerald-400 gap-1.5">
                  <span>Manage Security</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {(userRole === "Admin" || userRole === "Sales") && (
                <Link
                  href="/admin/inquiries"
                  className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Inbox size={20} />
                    </div>
                    <h3 className="text-base font-black text-white mb-1">Dynamic Query Hub</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Filter leads by status, assign sales representatives, log internal follow-up notes, and export CSV reports.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center text-xs font-bold text-blue-400 gap-1.5">
                    <span>Open Query Hub</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )}

              {(userRole === "Admin" || userRole === "Blog") && (
                <Link
                  href="/admin/blogs"
                  className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <FileText size={20} />
                    </div>
                    <h3 className="text-base font-black text-white mb-1">Blog CMS Articles</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Publish authoritative SEO insights, upload hero banners, edit article content, and manage blog tags.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center text-xs font-bold text-purple-400 gap-1.5">
                    <span>Manage Articles</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>
    </AdminGuard>
  );
}
