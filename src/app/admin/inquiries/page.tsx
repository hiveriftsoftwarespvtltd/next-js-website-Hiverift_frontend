"use client";

import { useEffect, useState, useMemo } from "react";
import { AdminGuard } from "../components/AdminGuard";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminHeader } from "../components/AdminHeader";
import {
  getContactSubmissions,
  deleteSubmission,
  purgeAllSubmissions,
  updateSubmissionDetails,
  addSubmissionNote,
} from "@/app/actions/contactActions";
import { getAdminUser, AdminUser } from "@/app/config/auth";
import {
  Inbox,
  Search,
  RefreshCw,
  Trash2,
  Eye,
  Mail,
  Phone,
  MessageSquare,
  Building,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  Tag,
  Download,
  Calendar,
  UserCheck,
  Filter,
  Send,
  Plus,
  ArrowRight,
  ShieldAlert,
  ChevronDown,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Swal from "sweetalert2";

interface QueryNote {
  note: string;
  author: string;
  createdAt: string | Date;
}

interface QueryItem {
  _id: string;
  fullName?: string;
  name?: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message?: string;
  position?: string;
  portfolio?: string;
  coverLetter?: string;
  resume?: string;
  status?: string;
  priority?: "High" | "Medium" | "Low";
  assignedTo?: string;
  followUpDate?: string;
  internalNotes?: QueryNote[];
  source?: string;
  createdAt?: string;
  updatedAt?: string;
}

const STATUS_OPTIONS = [
  "New",
  "Contacted",
  "In Progress",
  "Follow-up Scheduled",
  "Converted",
  "Closed",
];

const PRIORITY_OPTIONS = ["High", "Medium", "Low"];

const SALES_REPRESENTATIVES = [
  "Unassigned",
  "Vikram Malhotra (Lead Rep)",
  "Priya Sharma (Enterprise Sales)",
  "Rohit Verma (Digital Marketing)",
  "Amit Saxena (SME Accounts)",
];

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<QueryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Selected query for detail/edit modal
  const [selectedQuery, setSelectedQuery] = useState<QueryItem | null>(null);
  const [editStatus, setEditStatus] = useState("New");
  const [editPriority, setEditPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [editAssignedTo, setEditAssignedTo] = useState("Unassigned");
  const [editFollowUpDate, setEditFollowUpDate] = useState("");
  const [newNoteText, setNewNoteText] = useState("");
  const [isSavingDetails, setIsSavingDetails] = useState(false);
  const [isAddingNote, setIsAddingNote] = useState(false);

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    setCurrentUser(getAdminUser());
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setIsLoading(true);
    try {
      const res = await getContactSubmissions();
      if (res.success && Array.isArray(res.data)) {
        setInquiries(res.data);
      } else {
        setInquiries([]);
      }
    } catch (err) {
      console.error("Failed to load inquiries:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Open Edit Modal
  const openDetailModal = (q: QueryItem) => {
    setSelectedQuery(q);
    setEditStatus(q.status || "New");
    setEditPriority(q.priority || "Medium");
    setEditAssignedTo(q.assignedTo || "Unassigned");
    setEditFollowUpDate(q.followUpDate || "");
    setNewNoteText("");
  };

  // Save Query Details
  const handleSaveDetails = async () => {
    if (!selectedQuery) return;
    setIsSavingDetails(true);

    try {
      const payload = {
        status: editStatus,
        priority: editPriority,
        assignedTo: editAssignedTo,
        followUpDate: editFollowUpDate,
      };

      const res = await updateSubmissionDetails(selectedQuery._id, payload);
      if (res.success) {
        // Update local state
        setInquiries((prev) =>
          prev.map((item) =>
            item._id === selectedQuery._id
              ? { ...item, ...payload }
              : item
          )
        );
        setSelectedQuery((prev) => (prev ? { ...prev, ...payload } : null));

        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Query updated successfully",
          showConfirmButton: false,
          timer: 2000,
          background: "#0f172a",
          color: "#ffffff",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: res.message || "Failed to update query details.",
          background: "#0f172a",
          color: "#ffffff",
        });
      }
    } catch (e: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: e?.message || "Failed to update query.",
        background: "#0f172a",
        color: "#ffffff",
      });
    } finally {
      setIsSavingDetails(false);
    }
  };

  // Add Internal Note
  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedQuery || !newNoteText.trim()) return;
    setIsAddingNote(true);

    try {
      const author = currentUser?.name || "Staff";
      const res = await addSubmissionNote(selectedQuery._id, newNoteText.trim(), author);
      if (res.success) {
        const addedNote: QueryNote = {
          note: newNoteText.trim(),
          author,
          createdAt: new Date().toISOString(),
        };

        const updatedNotes = [...(selectedQuery.internalNotes || []), addedNote];
        setInquiries((prev) =>
          prev.map((item) =>
            item._id === selectedQuery._id
              ? { ...item, internalNotes: updatedNotes }
              : item
          )
        );
        setSelectedQuery((prev) => (prev ? { ...prev, internalNotes: updatedNotes } : null));
        setNewNoteText("");

        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Internal note added",
          showConfirmButton: false,
          timer: 2000,
          background: "#0f172a",
          color: "#ffffff",
        });
      }
    } catch (e: any) {
      console.error("Failed to add note:", e);
    } finally {
      setIsAddingNote(false);
    }
  };

  // Delete Single Query
  const handleDeleteQuery = async (id: string, clientName: string) => {
    const confirm = await Swal.fire({
      title: "Delete Query Record?",
      text: `Remove query submitted by ${clientName}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#334155",
      confirmButtonText: "Yes, Delete",
      background: "#0f172a",
      color: "#ffffff",
    });

    if (confirm.isConfirmed) {
      const res = await deleteSubmission(id);
      if (res.success) {
        setInquiries((prev) => prev.filter((item) => item._id !== id));
        if (selectedQuery?._id === id) setSelectedQuery(null);
        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: "Query record removed.",
          timer: 1500,
          showConfirmButton: false,
          background: "#0f172a",
          color: "#ffffff",
        });
      }
    }
  };

  // Purge All Old Queries (Requirement 1)
  const handlePurgeAll = async () => {
    const confirm = await Swal.fire({
      title: "Purge All Existing Queries?",
      text: "This will permanently delete all existing queries from the database to keep the query section clean for new incoming leads. This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#334155",
      confirmButtonText: "Yes, Purge All Queries",
      background: "#0f172a",
      color: "#ffffff",
    });

    if (confirm.isConfirmed) {
      setIsLoading(true);
      try {
        const res = await purgeAllSubmissions();
        if (res.success) {
          setInquiries([]);
          setSelectedQuery(null);
          Swal.fire({
            icon: "success",
            title: "Query Section Cleaned",
            text: "All existing queries have been deleted. The query pipeline is now clean and ready for new leads.",
            background: "#0f172a",
            color: "#ffffff",
          });
        }
      } catch (err: any) {
        Swal.fire({
          icon: "error",
          title: "Purge Failed",
          text: err?.message || "Failed to purge database.",
          background: "#0f172a",
          color: "#ffffff",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (inquiries.length === 0) {
      Swal.fire({
        icon: "info",
        title: "No Data",
        text: "There are no inquiries to export.",
        background: "#0f172a",
        color: "#ffffff",
      });
      return;
    }

    const headers = [
      "Client Name",
      "Email",
      "Phone",
      "Company",
      "Service Requested",
      "Status",
      "Priority",
      "Assigned To",
      "Follow-up Date",
      "Received Date",
      "Message",
    ];

    const rows = inquiries.map((q) => [
      `"${q.name || q.fullName || "N/A"}"`,
      `"${q.email || "N/A"}"`,
      `"${q.phone || "N/A"}"`,
      `"${q.company || "N/A"}"`,
      `"${q.service || q.position || "N/A"}"`,
      `"${q.status || "New"}"`,
      `"${q.priority || "Medium"}"`,
      `"${q.assignedTo || "Unassigned"}"`,
      `"${q.followUpDate || "None"}"`,
      `"${q.createdAt ? new Date(q.createdAt).toLocaleDateString() : "N/A"}"`,
      `"${(q.message || q.coverLetter || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `HiveRift_Inquiries_Export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered & Searched Inquiries
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      // Search query
      const name = (item.name || item.fullName || "").toLowerCase();
      const email = (item.email || "").toLowerCase();
      const phone = (item.phone || "").toLowerCase();
      const company = (item.company || "").toLowerCase();
      const service = (item.service || item.position || "").toLowerCase();
      const message = (item.message || item.coverLetter || "").toLowerCase();

      const searchMatch =
        !searchQuery ||
        name.includes(searchQuery.toLowerCase()) ||
        email.includes(searchQuery.toLowerCase()) ||
        phone.includes(searchQuery.toLowerCase()) ||
        company.includes(searchQuery.toLowerCase()) ||
        service.includes(searchQuery.toLowerCase()) ||
        message.includes(searchQuery.toLowerCase());

      // Status filter
      const statusMatch =
        statusFilter === "all" ||
        (item.status || "New").toLowerCase() === statusFilter.toLowerCase();

      // Priority filter
      const priorityMatch =
        priorityFilter === "all" ||
        (item.priority || "Medium").toLowerCase() === priorityFilter.toLowerCase();

      // Source filter
      const isJob = !!item.position || !!item.resume;
      const sourceMatch =
        sourceFilter === "all" ||
        (sourceFilter === "career" && isJob) ||
        (sourceFilter === "contact" && !isJob);

      return searchMatch && statusMatch && priorityMatch && sourceMatch;
    });
  }, [inquiries, searchQuery, statusFilter, priorityFilter, sourceFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredInquiries.length / itemsPerPage) || 1;
  const paginatedInquiries = filteredInquiries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusBadge = (status = "New") => {
    switch (status) {
      case "New":
        return "bg-blue-950/80 border-blue-800 text-blue-400";
      case "Contacted":
        return "bg-cyan-950/80 border-cyan-800 text-cyan-400";
      case "In Progress":
        return "bg-amber-950/80 border-amber-800 text-amber-400";
      case "Follow-up Scheduled":
        return "bg-purple-950/80 border-purple-800 text-purple-400";
      case "Converted":
        return "bg-emerald-950/80 border-emerald-800 text-emerald-400";
      case "Closed":
        return "bg-slate-800 border-slate-700 text-slate-400";
      default:
        return "bg-slate-800 border-slate-700 text-slate-300";
    }
  };

  const getPriorityBadge = (priority = "Medium") => {
    switch (priority) {
      case "High":
        return "bg-rose-950/80 border-rose-800 text-rose-400 font-bold";
      case "Medium":
        return "bg-amber-950/80 border-amber-800 text-amber-400";
      case "Low":
        return "bg-slate-800 border-slate-700 text-slate-400";
    }
  };

  const formatDateTime = (value?: string) => {
    if (!value) return "Recent";

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Recent";

    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <AdminGuard allowedRoles={["Admin", "Sales"]}>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex font-['Roboto',sans-serif]">
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
          <AdminHeader onOpenSidebar={() => setIsMobileSidebarOpen(true)} />

          <main className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1">
            {/* Top Title & Header Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
                    <Inbox size={26} className="text-emerald-400" />
                    <span>Dynamic Query Management</span>
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono font-bold">
                    {filteredInquiries.length} Active
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Manage incoming client leads, assign sales reps, track follow-ups, and trigger WhatsApp/Call outreach.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={fetchInquiries}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Refresh Inquiries"
                >
                  <RefreshCw size={15} className={isLoading ? "animate-spin" : ""} />
                </button>

                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Export CSV</span>
                </button>

                {currentUser?.role === "Admin" && (
                  <button
                    onClick={handlePurgeAll}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-rose-950/60 border border-rose-800/80 hover:bg-rose-900/60 text-rose-300 text-xs font-bold transition-colors cursor-pointer"
                    title="Delete all existing queries from the database"
                  >
                    <Trash2 size={14} />
                    <span>Purge Old Queries</span>
                  </button>
                )}
              </div>
            </div>

            {/* Filter Bar & Search Controls */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-4">
              {/* Row 1: Search & Dropdown Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Search Input */}
                <div className="relative flex items-center lg:col-span-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search by client name, email, phone, company, message..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all placeholder:text-slate-600"
                  />
                  <Search size={15} className="absolute left-3.5 text-slate-500" />
                </div>

                {/* Priority Filter */}
                <select
                  value={priorityFilter}
                  onChange={(e) => {
                    setPriorityFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-300 outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="all">All Priorities</option>
                  <option value="High">🔴 High Priority</option>
                  <option value="Medium">🟡 Medium Priority</option>
                  <option value="Low">⚪ Low Priority</option>
                </select>

                {/* Source Filter */}
                <select
                  value={sourceFilter}
                  onChange={(e) => {
                    setSourceFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-300 outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="all">All Sources</option>
                  <option value="contact">Website Contact & Quotes</option>
                  <option value="career">Job Applications</option>
                </select>
              </div>

              {/* Row 2: Status Pill Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 mr-1 flex items-center gap-1">
                  <Filter size={11} />
                  <span>Status:</span>
                </span>
                {["all", ...STATUS_OPTIONS].map((status) => {
                  const isActive = statusFilter === status;
                  return (
                    <button
                      key={status}
                      onClick={() => {
                        setStatusFilter(status);
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all cursor-pointer ${
                        isActive
                          ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/50"
                          : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                      }`}
                    >
                      {status === "all" ? "All" : status}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inquiries Table / Empty State */}
            {isLoading ? (
              <div className="py-20 text-center text-slate-400 space-y-3">
                <RefreshCw size={24} className="animate-spin text-emerald-500 mx-auto" />
                <p className="text-xs font-bold">Loading live inquiries...</p>
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="bg-slate-900/90 border border-dashed border-slate-800 rounded-3xl p-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">Query Section is Clean & Ready</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto leading-relaxed">
                    {inquiries.length === 0
                      ? "All old queries were successfully removed. Any new client form submissions or quote requests from the website will appear here in real time."
                      : "No queries matched your search and filter criteria. Try clearing search filters."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider font-mono border-b border-slate-800">
                      <tr>
                        <th className="p-4 pl-6">Client / Contact</th>
                        <th className="p-4">Service Required</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Priority</th>
                        <th className="p-4">Assigned Rep</th>
                        <th className="p-4">Follow-Up</th>
                        <th className="p-4">Received</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {paginatedInquiries.map((q) => {
                        const clientName = q.name || q.fullName || "Prospective Client";
                        const clientEmail = q.email;
                        const clientPhone = q.phone;
                        const isJob = !!q.position || !!q.resume;
                        const hasNotes = q.internalNotes && q.internalNotes.length > 0;

                        return (
                          <tr
                            key={q._id}
                            className="hover:bg-slate-800/40 transition-colors group cursor-pointer"
                            onClick={() => openDetailModal(q)}
                          >
                            {/* Client Name & Phone */}
                            <td className="p-4 pl-6">
                              <div className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                                {clientName}
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 mt-0.5">
                                <span>{clientPhone}</span>
                                {q.company && q.company !== "N/A" && (
                                  <span className="text-slate-500">• {q.company}</span>
                                )}
                              </div>
                            </td>

                            {/* Service / Type */}
                            <td className="p-4">
                              <div className="font-semibold text-slate-200">
                                {q.service || q.position || "General Web Inquiry"}
                              </div>
                              <div className="text-[10px] text-slate-500">
                                {isJob ? "Job Application" : "Website Quoting / Contact"}
                              </div>
                            </td>

                            {/* Status */}
                            <td className="p-4" onClick={(e) => e.stopPropagation()}>
                              <span
                                className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusBadge(
                                  q.status
                                )}`}
                              >
                                {q.status || "New"}
                              </span>
                            </td>

                            {/* Priority */}
                            <td className="p-4">
                              <span
                                className={`inline-block px-2 py-0.5 rounded-md text-[10px] border ${getPriorityBadge(
                                  q.priority
                                )}`}
                              >
                                {q.priority || "Medium"}
                              </span>
                            </td>

                            {/* Assigned To */}
                            <td className="p-4 text-slate-300 text-[11px]">
                              {q.assignedTo && q.assignedTo !== "Unassigned" ? (
                                <span className="text-emerald-400 font-medium">
                                  {q.assignedTo.split(" ")[0]}
                                </span>
                              ) : (
                                <span className="text-slate-500 italic">Unassigned</span>
                              )}
                            </td>

                            {/* Follow-Up */}
                            <td className="p-4 text-slate-300 text-[11px] font-mono">
                              {q.followUpDate ? (
                                <span className="text-purple-400 font-bold flex items-center gap-1">
                                  <Clock size={11} />
                                  <span>{q.followUpDate}</span>
                                </span>
                              ) : (
                                <span className="text-slate-600">—</span>
                              )}
                            </td>

                            {/* Date & Time */}
                            <td className="p-4 text-slate-400 font-mono text-[11px]">
                              <div className="flex flex-col gap-0.5">
                                <span>{formatDateTime(q.createdAt)}</span>
                              </div>
                            </td>

                            {/* Actions */}
                            <td className="p-4 pr-6 text-right" onClick={(e) => e.stopPropagation()}>
                              <div className="inline-flex items-center gap-1.5">
                                {/* Direct WhatsApp Trigger */}
                                {clientPhone && (
                                  <a
                                    href={`https://wa.me/${clientPhone.replace(/[^0-9]/g, "")}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-colors"
                                    title="Instant WhatsApp"
                                  >
                                    <MessageSquare size={14} />
                                  </a>
                                )}

                                {/* Phone Call */}
                                {clientPhone && (
                                  <a
                                    href={`tel:${clientPhone}`}
                                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                                    title="Call Phone"
                                  >
                                    <Phone size={14} />
                                  </a>
                                )}

                                {/* View / Edit Modal */}
                                <button
                                  onClick={() => openDetailModal(q)}
                                  className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
                                  title="View Details & Notes"
                                >
                                  <Eye size={14} />
                                </button>

                                {/* Delete */}
                                <button
                                  onClick={() => handleDeleteQuery(q._id, clientName)}
                                  className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition-colors cursor-pointer"
                                  title="Delete"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="p-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <div>
                      Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                      {Math.min(currentPage * itemsPerPage, filteredInquiries.length)} of{" "}
                      {filteredInquiries.length} queries
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 disabled:opacity-30 cursor-pointer"
                      >
                        Previous
                      </button>
                      <span className="font-mono px-2 text-white">
                        {currentPage} / {totalPages}
                      </span>
                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 disabled:opacity-30 cursor-pointer"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>

        {/* ================= QUERY DETAIL & EDIT MODAL ================= */}
        {selectedQuery && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 my-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-[10px] font-mono font-bold uppercase mb-1">
                    <span>Query ID: {selectedQuery._id.slice(-6)}</span>
                  </div>
                  <h3 className="text-xl font-black text-white">
                    {selectedQuery.name || selectedQuery.fullName || "Prospective Client"}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedQuery(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 text-lg cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Client Contact Quick Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-mono font-bold">Email</span>
                  <div className="font-mono text-slate-200 truncate">
                    <a href={`mailto:${selectedQuery.email}`} className="hover:text-emerald-400 underline">
                      {selectedQuery.email}
                    </a>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-mono font-bold">Phone</span>
                  <div className="font-mono text-slate-200">
                    <a href={`tel:${selectedQuery.phone}`} className="hover:text-emerald-400 underline">
                      {selectedQuery.phone}
                    </a>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-mono font-bold">Company</span>
                  <div className="text-slate-200 truncate">{selectedQuery.company || "Direct Individual"}</div>
                </div>
              </div>

              {/* Client Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Client Requirement / Message
                </label>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 leading-relaxed font-mono whitespace-pre-wrap max-h-40 overflow-y-auto">
                  {selectedQuery.message || selectedQuery.coverLetter || "No specific requirement message provided."}
                </div>
              </div>

              {/* Status, Priority, Assignment & Follow-Up Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                {/* Status Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Inquiry Status
                  </label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs font-bold text-white outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    {STATUS_OPTIONS.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Priority Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Lead Priority
                  </label>
                  <select
                    value={editPriority}
                    onChange={(e) => setEditPriority(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs font-bold text-white outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    {PRIORITY_OPTIONS.map((pr) => (
                      <option key={pr} value={pr}>
                        {pr} Priority
                      </option>
                    ))}
                  </select>
                </div>

                {/* Assigned Sales Rep */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Assigned Sales Representative
                  </label>
                  <select
                    value={editAssignedTo}
                    onChange={(e) => setEditAssignedTo(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs font-bold text-white outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    {SALES_REPRESENTATIVES.map((rep) => (
                      <option key={rep} value={rep}>
                        {rep}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Next Follow-Up Date */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Next Follow-Up Date
                  </label>
                  <input
                    type="date"
                    value={editFollowUpDate}
                    onChange={(e) => setEditFollowUpDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs font-bold text-white outline-none focus:border-emerald-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Save Details Button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveDetails}
                  disabled={isSavingDetails}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-900/50 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSavingDetails ? "Saving..." : "Save Pipeline Updates"}
                </button>
              </div>

              {/* Internal Notes Timeline */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <MessageSquare size={13} className="text-emerald-400" />
                  <span>Internal Sales Follow-Up Notes</span>
                </label>

                {/* Notes List */}
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {selectedQuery.internalNotes && selectedQuery.internalNotes.length > 0 ? (
                    selectedQuery.internalNotes.map((noteItem, nIdx) => (
                      <div
                        key={nIdx}
                        className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                          <span className="font-bold text-emerald-400">{noteItem.author}</span>
                          <span>{new Date(noteItem.createdAt).toLocaleString()}</span>
                        </div>
                        <p className="text-slate-200">{noteItem.note}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500 italic py-2">
                      No internal notes recorded yet. Add follow-up logs below.
                    </p>
                  )}
                </div>

                {/* Add Note Form */}
                <form onSubmit={handleAddNote} className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    placeholder="Log a client call, quotation status, or meeting note..."
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    disabled={isAddingNote}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isAddingNote ? "Adding..." : "Add Note"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminGuard>
  );
}
