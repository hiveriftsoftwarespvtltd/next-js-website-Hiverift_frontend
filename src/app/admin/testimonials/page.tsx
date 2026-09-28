"use client";

import { useEffect, useState, useMemo } from "react";
import { AdminGuard } from "../components/AdminGuard";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminHeader } from "../components/AdminHeader";
import {
  TestimonialItem,
  getAdminTestimonialsApi,
  createTestimonialApi,
  updateTestimonialApi,
  toggleTestimonialApi,
  deleteTestimonialApi,
} from "@/app/config/auth";
import {
  Star,
  Plus,
  Search,
  Filter,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Building2,
  RefreshCw,
  X,
  AlertCircle,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const OFFICIAL_GOOGLE_PROFILE_URL = "https://share.google/1cVJXMZ1i6L0uR5sf";

export default function AdminTestimonialsPage() {
  const [reviews, setReviews] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "hidden">("all");
  const [ratingFilter, setRatingFilter] = useState<number | "all">("all");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Form Fields
  const [formName, setFormName] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formRole, setFormRole] = useState("Client");
  const [formCompany, setFormCompany] = useState("");
  const [formLocation, setFormLocation] = useState("Delhi NCR, India");
  const [formService, setFormService] = useState("Website Development");
  const [formText, setFormText] = useState("");
  const [formTimeAgo, setFormTimeAgo] = useState("Recent");
  const [formBadge, setFormBadge] = useState("Verified Client");
  const [formGoogleUrl, setFormGoogleUrl] = useState(OFFICIAL_GOOGLE_PROFILE_URL);
  const [formIsPublished, setFormIsPublished] = useState(true);

  // Fetch reviews
  const loadReviews = async () => {
    setLoading(true);
    const res = await getAdminTestimonialsApi();
    if (res.success) {
      setReviews(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadReviews();
  }, []);

  // Filtered Reviews
  const filteredReviews = useMemo(() => {
    return reviews.filter((rev) => {
      const q = search.toLowerCase();
      const matchesSearch =
        rev.name.toLowerCase().includes(q) ||
        (rev.company && rev.company.toLowerCase().includes(q)) ||
        (rev.service && rev.service.toLowerCase().includes(q)) ||
        rev.text.toLowerCase().includes(q) ||
        (rev.location && rev.location.toLowerCase().includes(q));

      const matchesStatus =
        statusFilter === "all"
          ? true
          : statusFilter === "published"
          ? rev.isPublished
          : !rev.isPublished;

      const matchesRating =
        ratingFilter === "all" ? true : rev.rating === ratingFilter;

      return matchesSearch && matchesStatus && matchesRating;
    });
  }, [reviews, search, statusFilter, ratingFilter]);

  // Statistics
  const totalCount = reviews.length;
  const publishedCount = reviews.filter((r) => r.isPublished).length;
  const averageRating = totalCount > 0
    ? (reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / totalCount).toFixed(1)
    : "5.0";

  // Open Create Modal
  const handleOpenCreate = () => {
    setModalMode("create");
    setEditingId(null);
    setFormName("");
    setFormRating(5);
    setFormRole("Client");
    setFormCompany("");
    setFormLocation("Delhi NCR, India");
    setFormService("Website & Digital Solutions");
    setFormText("");
    setFormTimeAgo("Recent");
    setFormBadge("Verified Client");
    setFormGoogleUrl(OFFICIAL_GOOGLE_PROFILE_URL);
    setFormIsPublished(true);
    setErrorMsg("");
    setSuccessMsg("");
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (rev: TestimonialItem) => {
    setModalMode("edit");
    setEditingId(rev._id);
    setFormName(rev.name);
    setFormRating(rev.rating || 5);
    setFormRole(rev.role || "Client");
    setFormCompany(rev.company || "");
    setFormLocation(rev.location || "Delhi NCR, India");
    setFormService(rev.service || "Website Development");
    setFormText(rev.text);
    setFormTimeAgo(rev.timeAgo || "Recent");
    setFormBadge(rev.badge || "Verified Client");
    setFormGoogleUrl(rev.googleReviewUrl || OFFICIAL_GOOGLE_PROFILE_URL);
    setFormIsPublished(rev.isPublished !== false);
    setErrorMsg("");
    setSuccessMsg("");
    setIsModalOpen(true);
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) {
      setErrorMsg("Please provide both the Reviewer Name and the Review Text.");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    const payload = {
      name: formName.trim(),
      rating: formRating,
      role: formRole.trim(),
      company: formCompany.trim() || "Verified Business",
      location: formLocation.trim() || "Delhi NCR, India",
      service: formService.trim() || "Website Development",
      text: formText.trim(),
      timeAgo: formTimeAgo.trim() || "Recent",
      badge: formBadge.trim(),
      googleReviewUrl: formGoogleUrl.trim() || OFFICIAL_GOOGLE_PROFILE_URL,
      isPublished: formIsPublished,
    };

    if (modalMode === "create") {
      const res = await createTestimonialApi(payload);
      if (res.success) {
        setSuccessMsg("Review added successfully to database!");
        setTimeout(() => {
          setIsModalOpen(false);
          loadReviews();
        }, 1000);
      } else {
        setErrorMsg(res.message || "Failed to create review.");
      }
    } else if (editingId) {
      const res = await updateTestimonialApi(editingId, payload);
      if (res.success) {
        setSuccessMsg("Review updated successfully!");
        setTimeout(() => {
          setIsModalOpen(false);
          loadReviews();
        }, 1000);
      } else {
        setErrorMsg(res.message || "Failed to update review.");
      }
    }

    setSubmitting(false);
  };

  // Toggle Publish
  const handleToggle = async (id: string) => {
    const res = await toggleTestimonialApi(id);
    if (res.success) {
      setReviews((prev) =>
        prev.map((r) => (r._id === id ? { ...r, isPublished: !r.isPublished } : r))
      );
    }
  };

  // Delete
  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete the review by "${name}"?`)) return;
    const res = await deleteTestimonialApi(id);
    if (res.success) {
      setReviews((prev) => prev.filter((r) => r._id !== id));
    } else {
      alert(res.message || "Failed to delete review.");
    }
  };

  return (
    <AdminGuard allowedRoles={["Admin", "Sales"]}>
      <div className="flex h-screen bg-[#070b14] text-slate-100 overflow-hidden font-sans">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden min-w-0">
          <AdminHeader />

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
            {/* Top Bar: Title & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live Carousel Engine
                  </span>
                  <span className="text-xs text-slate-500">Google Business Verified</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                  <span>Google Reviews & Testimonials</span>
                  <Sparkles size={20} className="text-amber-400" />
                </h1>
                <p className="text-sm text-slate-400 mt-1">
                  Manage real client feedback and authentic Google ratings displayed across the website carousel.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={OFFICIAL_GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer shadow-sm"
                  title="Open HiveRift Google Business Profile"
                >
                  <ExternalLink size={13} />
                  <span>Open Google Profile</span>
                </a>

                <button
                  onClick={handleOpenCreate}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
                >
                  <Plus size={15} />
                  <span>Add Real Google Review</span>
                </button>
              </div>
            </div>

            {/* KPI Cards Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#0c1220] border border-slate-800 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Total Reviews</div>
                  <div className="text-2xl font-black text-white mt-1">{totalCount}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Stored in CMS database</div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MessageSquare size={20} />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c1220] border border-slate-800 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Active on Carousel</div>
                  <div className="text-2xl font-black text-emerald-400 mt-1">{publishedCount}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Live on homepage</div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Eye size={20} />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c1220] border border-slate-800 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Average Rating</div>
                  <div className="text-2xl font-black text-amber-400 mt-1">{averageRating} ★</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Google 5.0 benchmark</div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Star size={20} className="fill-amber-400" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c1220] border border-slate-800 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Official Link</div>
                  <div className="text-xs font-bold text-slate-200 mt-1 truncate max-w-[150px]">
                    share.google/...
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-0.5 flex items-center gap-1">
                    <CheckCircle2 size={11} /> Verified Listing
                  </div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <ShieldCheck size={20} />
                </div>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="p-4 rounded-2xl bg-[#0c1220] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-80">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search reviews by name, company, text..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {/* Status Filter */}
                <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800">
                  <button
                    onClick={() => setStatusFilter("all")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                      statusFilter === "all"
                        ? "bg-emerald-500 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    All ({totalCount})
                  </button>
                  <button
                    onClick={() => setStatusFilter("published")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                      statusFilter === "published"
                        ? "bg-emerald-500 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Published ({publishedCount})
                  </button>
                  <button
                    onClick={() => setStatusFilter("hidden")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                      statusFilter === "hidden"
                        ? "bg-emerald-500 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Hidden ({totalCount - publishedCount})
                  </button>
                </div>

                {/* Rating Filter */}
                <select
                  value={ratingFilter}
                  onChange={(e) =>
                    setRatingFilter(e.target.value === "all" ? "all" : Number(e.target.value))
                  }
                  className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
                >
                  <option value="all">All Stars</option>
                  <option value="5">5 Stars only</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                </select>

                <button
                  onClick={loadReviews}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-white cursor-pointer transition-colors"
                  title="Refresh Reviews"
                >
                  <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                </button>
              </div>
            </div>

            {/* Reviews List / Table */}
            {loading ? (
              <div className="p-12 text-center text-slate-400 bg-[#0c1220] rounded-2xl border border-slate-800">
                <RefreshCw size={24} className="animate-spin mx-auto mb-2 text-emerald-400" />
                <p className="text-sm">Loading reviews from database...</p>
              </div>
            ) : filteredReviews.length === 0 ? (
              <div className="p-12 text-center bg-[#0c1220] rounded-2xl border border-slate-800 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                  <Star size={32} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">No Google Reviews Found</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto mt-1">
                    {reviews.length === 0
                      ? "You haven't added any real customer reviews yet. Click 'Add Real Google Review' to input the reviews from your Google Business Profile."
                      : "No reviews match your current search and filter criteria."}
                  </p>
                </div>
                {reviews.length === 0 && (
                  <button
                    onClick={handleOpenCreate}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    <Plus size={15} />
                    <span>Add First Real Review</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredReviews.map((rev) => (
                  <div
                    key={rev._id}
                    className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-sm relative group"
                  >
                    <div>
                      {/* Top Header of Card */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(rev.rating || 5)].map((_, i) => (
                            <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleToggle(rev._id)}
                            className={`px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition-colors ${
                              rev.isPublished
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : "bg-slate-800 text-slate-400 border border-slate-700"
                            }`}
                            title="Toggle Live Website Visibility"
                          >
                            {rev.isPublished ? "Live" : "Hidden"}
                          </button>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {rev.timeAgo || "Recent"}
                          </span>
                        </div>
                      </div>

                      {/* Service Tag */}
                      <div className="inline-block px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-2">
                        {rev.service || "Website Engineering"}
                      </div>

                      {/* Review Text */}
                      <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4 min-h-[64px]">
                        &ldquo;{rev.text}&rdquo;
                      </p>
                    </div>

                    {/* Bottom Author Card & Actions */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-9 h-9 rounded-full ${
                            rev.avatarBg || "bg-emerald-600"
                          } text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm`}
                        >
                          {rev.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-white text-xs truncate flex items-center gap-1">
                            <span>{rev.name}</span>
                            <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">
                            {rev.role} • {rev.company}
                          </div>
                          <div className="text-[9px] text-slate-500 truncate flex items-center gap-1">
                            <MapPin size={9} />
                            <span>{rev.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => handleOpenEdit(rev)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                          title="Edit Review"
                        >
                          <Edit size={13} />
                        </button>
                        <button
                          onClick={() => handleDelete(rev._id, rev.name)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                          title="Delete Review"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>

        {/* Modal: Add / Edit Real Google Review */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#0e1424] border border-slate-800 rounded-3xl w-full max-w-xl p-6 sm:p-7 shadow-2xl relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="mb-5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {modalMode === "create" ? "Add Real Review" : "Edit Review"}
                </span>
                <h2 className="text-xl font-black text-white mt-1">
                  {modalMode === "create"
                    ? "Add Authentic Google Review"
                    : "Update Client Testimonial"}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Enter the exact customer review from your Google Business Profile. This review will immediately feed the homepage carousel.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle size={15} />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 size={15} />
                  <span>{successMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Reviewer Name & Rating */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Reviewer Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rajesh Sharma"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Rating (Stars) *
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setFormRating(star)}
                          className="cursor-pointer p-1"
                        >
                          <Star
                            size={20}
                            className={
                              star <= formRating
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-600"
                            }
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-amber-400 ml-1">
                        {formRating}.0 / 5.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* Role & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Role / Designation
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Managing Director / Founder"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Apex Infra Projects"
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Location & Service Provided */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Karol Bagh, New Delhi"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Service Provided
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Corporate Website & SEO"
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Real Review Text *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Paste the exact real-time review text from Google Maps / Google Business Profile..."
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Time Ago & Badge */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Time / Date Ago
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 2 weeks ago / 1 month ago"
                      value={formTimeAgo}
                      onChange={(e) => setFormTimeAgo(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Badge
                    </label>
                    <select
                      value={formBadge}
                      onChange={(e) => setFormBadge(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Verified Client">Verified Client</option>
                      <option value="Local Guide">Local Guide</option>
                      <option value="Google Reviewer">Google Reviewer</option>
                      <option value="Enterprise Partner">Enterprise Partner</option>
                    </select>
                  </div>
                </div>

                {/* Publish Toggle */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <input
                    type="checkbox"
                    id="isPublished"
                    checked={formIsPublished}
                    onChange={(e) => setFormIsPublished(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-500 bg-slate-800 border-slate-700 cursor-pointer"
                  />
                  <label htmlFor="isPublished" className="text-xs text-slate-300 cursor-pointer">
                    <span className="font-bold text-white">Publish to Homepage Carousel</span>
                    <span className="block text-[11px] text-slate-400">
                      When checked, this review will be immediately visible to all website visitors.
                    </span>
                  </label>
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold transition-all shadow-md disabled:opacity-50 cursor-pointer"
                  >
                    {submitting && <RefreshCw size={14} className="animate-spin" />}
                    <span>{modalMode === "create" ? "Add to Website" : "Save Changes"}</span>
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
