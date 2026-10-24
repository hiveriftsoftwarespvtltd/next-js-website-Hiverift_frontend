"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import Link from "next/link";
import { AdminGuard } from "../components/AdminGuard";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminHeader } from "../components/AdminHeader";
import { getImageUrl } from "@/app/actions/adminActions";
import {
  CaseStudyItem,
  getAdminCaseStudiesApi,
  createCaseStudyApi,
  updateCaseStudyApi,
  toggleCaseStudyApi,
  deleteCaseStudyApi,
} from "@/app/config/auth";
import {
  Layers,
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
  Building2,
  Calendar,
  Sparkles,
  Upload,
  X,
  AlertCircle,
  RefreshCw,
  Globe,
  FileCode,
  Users,
  Compass,
  ArrowRight,
  Image as ImageIcon,
  Check,
} from "lucide-react";

export default function AdminCaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Form Fields
  const [formTitle, setFormTitle] = useState("");
  const [formProjectId, setFormProjectId] = useState("");
  const [formCategory, setFormCategory] = useState<"web" | "ecommerce" | "software">("web");
  const [formCategoryLabel, setFormCategoryLabel] = useState("Web Development");
  const [formDescription, setFormDescription] = useState("");
  const [formClient, setFormClient] = useState("");
  const [formIndustry, setFormIndustry] = useState("");
  const [formTimeline, setFormTimeline] = useState("4 Weeks");
  const [formProjectUrl, setFormProjectUrl] = useState("https://");
  const [formImageUrl, setFormImageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Human Story & Touchpoints
  const [formHowWeStarted, setFormHowWeStarted] = useState("");
  const [step1Title, setStep1Title] = useState("Initial Discovery & Deep Listening");
  const [step1Desc, setStep1Desc] = useState("");
  const [step2Title, setStep2Title] = useState("Collaborative Prototyping & Feedback");
  const [step2Desc, setStep2Desc] = useState("");
  const [step3Title, setStep3Title] = useState("Dedicated Engineering & Human QA");
  const [step3Desc, setStep3Desc] = useState("");

  // Technical Details
  const [formChallenge, setFormChallenge] = useState("");
  const [formSolution, setFormSolution] = useState("");
  const [formKeyFeatures, setFormKeyFeatures] = useState("");
  const [formTechStack, setFormTechStack] = useState("Next.js, TypeScript, Tailwind CSS");
  const [formServices, setFormServices] = useState("Web Engineering, UI/UX Design");
  const [formOrder, setFormOrder] = useState<number>(0);
  const [formIsPublished, setFormIsPublished] = useState(true);

  // Load Data
  const loadData = async () => {
    setLoading(true);
    const res = await getAdminCaseStudiesApi();
    if (res.success && res.data) {
      setCaseStudies(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filtered List
  const filteredList = useMemo(() => {
    return caseStudies.filter((item) => {
      const matchesSearch =
        search === "" ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.client?.toLowerCase().includes(search.toLowerCase()) ||
        item.industry?.toLowerCase().includes(search.toLowerCase()) ||
        item.projectId?.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || item.category === categoryFilter;

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "published" && item.isPublished) ||
        (statusFilter === "draft" && !item.isPublished);

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [caseStudies, search, categoryFilter, statusFilter]);

  // Statistics
  const stats = useMemo(() => {
    const total = caseStudies.length;
    const published = caseStudies.filter((c) => c.isPublished).length;
    const drafts = total - published;
    const web = caseStudies.filter((c) => c.category === "web").length;
    const ecommerce = caseStudies.filter((c) => c.category === "ecommerce").length;
    const software = caseStudies.filter((c) => c.category === "software").length;
    return { total, published, drafts, web, ecommerce, software };
  }, [caseStudies]);

  // Open Create Modal
  const handleOpenCreate = () => {
    setModalMode("create");
    setEditingId(null);
    setFormTitle("");
    setFormProjectId("");
    setFormCategory("web");
    setFormCategoryLabel("Web Development & Portal");
    setFormDescription("");
    setFormClient("");
    setFormIndustry("");
    setFormTimeline("4-6 Weeks");
    setFormProjectUrl("https://");
    setFormImageUrl("");
    setSelectedFile(null);
    setPreviewUrl("");
    setFormHowWeStarted("");
    setStep1Title("Initial Discovery & Deep Listening");
    setStep1Desc("Direct strategy session auditing operational hurdles and user personas without corporate jargon.");
    setStep2Title("Collaborative Prototyping & Feedback");
    setStep2Desc("Walked through UX wireframes and user journeys with the client's internal sales and support team.");
    setStep3Title("Dedicated Engineering & Human QA");
    setStep3Desc("Custom Next.js engineering with manual edge-case testing, followed by direct developer onboarding.");
    setFormChallenge("");
    setFormSolution("");
    setFormKeyFeatures("");
    setFormTechStack("Next.js, TypeScript, Tailwind CSS");
    setFormServices("Custom Web Engineering, UI/UX Design");
    setFormOrder(caseStudies.length + 1);
    setFormIsPublished(true);
    setErrorMsg("");
    setSuccessMsg("");
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (item: CaseStudyItem) => {
    setModalMode("edit");
    setEditingId(item._id || item.id || item.projectId);
    setFormTitle(item.title);
    setFormProjectId(item.projectId);
    setFormCategory(item.category);
    setFormCategoryLabel(item.categoryLabel || "Web Development");
    setFormDescription(item.description);
    setFormClient(item.client || "");
    setFormIndustry(item.industry || "");
    setFormTimeline(item.timeline || "4 Weeks");
    setFormProjectUrl(item.projectUrl || "");
    setFormImageUrl(item.image || "");
    setSelectedFile(null);
    setPreviewUrl(item.image ? getImageUrl(item.image) : "");
    setFormHowWeStarted(item.howWeStarted || "");

    const steps = item.humanTouchPoints || [];
    setStep1Title(steps[0]?.title || "Initial Discovery & Deep Listening");
    setStep1Desc(steps[0]?.description || "");
    setStep2Title(steps[1]?.title || "Collaborative Prototyping & Feedback");
    setStep2Desc(steps[1]?.description || "");
    setStep3Title(steps[2]?.title || "Dedicated Engineering & Human QA");
    setStep3Desc(steps[2]?.description || "");

    setFormChallenge(item.challenge || "");
    setFormSolution(item.solution || "");
    setFormKeyFeatures(Array.isArray(item.keyFeatures) ? item.keyFeatures.join(", ") : "");
    setFormTechStack(Array.isArray(item.techStack) ? item.techStack.join(", ") : "");
    setFormServices(Array.isArray(item.services) ? item.services.join(", ") : "");
    setFormOrder(item.order || 0);
    setFormIsPublished(item.isPublished ?? true);
    setErrorMsg("");
    setSuccessMsg("");
    setIsModalOpen(true);
  };

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!formTitle.trim()) {
      setErrorMsg("Project Title is required.");
      return;
    }
    if (!formDescription.trim()) {
      setErrorMsg("Brief Project Summary is required.");
      return;
    }

    setSubmitting(true);

    try {
      const humanTouchPoints = [
        { title: step1Title.trim(), description: step1Desc.trim() },
        { title: step2Title.trim(), description: step2Desc.trim() },
        { title: step3Title.trim(), description: step3Desc.trim() },
      ].filter((s) => s.title && s.description);

      const splitList = (str: string) =>
        str
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);

      const formData = new FormData();
      formData.append("title", formTitle.trim());
      formData.append("projectId", formProjectId.trim() || formTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
      formData.append("category", formCategory);
      formData.append("categoryLabel", formCategoryLabel.trim());
      formData.append("description", formDescription.trim());
      formData.append("client", formClient.trim());
      formData.append("industry", formIndustry.trim());
      formData.append("timeline", formTimeline.trim());
      formData.append("projectUrl", formProjectUrl.trim());
      formData.append("howWeStarted", formHowWeStarted.trim());
      formData.append("challenge", formChallenge.trim());
      formData.append("solution", formSolution.trim());
      formData.append("services", JSON.stringify(splitList(formServices)));
      formData.append("techStack", JSON.stringify(splitList(formTechStack)));
      formData.append("keyFeatures", JSON.stringify(splitList(formKeyFeatures)));
      formData.append("humanTouchPoints", JSON.stringify(humanTouchPoints));
      formData.append("isPublished", String(formIsPublished));
      formData.append("order", String(formOrder));

      if (selectedFile) {
        formData.append("image", selectedFile);
      } else if (formImageUrl.trim()) {
        formData.append("image", formImageUrl.trim());
      }

      let res;
      if (modalMode === "create") {
        res = await createCaseStudyApi(formData);
      } else if (editingId) {
        res = await updateCaseStudyApi(editingId, formData);
      }

      if (res && res.success) {
        setSuccessMsg(res.message || "Saved successfully!");
        setTimeout(() => {
          setIsModalOpen(false);
          loadData();
        }, 800);
      } else {
        setErrorMsg(res?.message || "Failed to save case study.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  // Toggle Publish
  const handleToggle = async (item: CaseStudyItem) => {
    const id = item._id || item.id || item.projectId;
    const res = await toggleCaseStudyApi(id);
    if (res.success) {
      setCaseStudies((prev) =>
        prev.map((c) =>
          (c._id === id || c.projectId === id)
            ? { ...c, isPublished: !c.isPublished }
            : c
        )
      );
    }
  };

  // Delete Case Study
  const handleDelete = async (item: CaseStudyItem) => {
    if (!window.confirm(`Are you sure you want to delete "${item.title}"? This cannot be undone.`)) {
      return;
    }
    const id = item._id || item.id || item.projectId;
    const res = await deleteCaseStudyApi(id);
    if (res.success) {
      setCaseStudies((prev) => prev.filter((c) => c._id !== id && c.projectId !== id));
    }
  };

  return (
    <AdminGuard allowedRoles={["Admin", "Sales"]}>
      <div className="min-h-screen bg-[#070d18] text-slate-100 flex font-sans">
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
          <AdminHeader
            title="Case Studies & Work Management"
            subtitle="Upload, edit, and publish live client case studies"
            onOpenSidebar={() => setIsMobileSidebarOpen(true)}
          />

          <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6 flex-1">
            
            {/* Top Title Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/60 p-6 rounded-3xl border border-slate-800 shadow-xl">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold font-mono uppercase tracking-wider mb-2">
                  <Sparkles size={13} />
                  <span>Dynamic Portfolio CMS</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Case Studies &amp; Work Management
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                  Upload, edit, and publish live client case studies. All changes immediately sync to the homepage carousel and public portfolio.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={loadData}
                  className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                  title="Refresh Data"
                >
                  <RefreshCw size={17} className={loading ? "animate-spin" : ""} />
                </button>
                <button
                  onClick={handleOpenCreate}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/25 cursor-pointer"
                >
                  <Plus size={18} />
                  <span>Upload New Case Study</span>
                </button>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Total</span>
                <span className="text-2xl font-black text-white font-mono mt-1 block">{stats.total}</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-800/40">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">Published</span>
                <span className="text-2xl font-black text-emerald-300 font-mono mt-1 block">{stats.published}</span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">Drafts</span>
                <span className="text-2xl font-black text-amber-300 font-mono mt-1 block">{stats.drafts}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Websites</span>
                <span className="text-2xl font-black text-cyan-400 font-mono mt-1 block">{stats.web}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">eCommerce</span>
                <span className="text-2xl font-black text-purple-400 font-mono mt-1 block">{stats.ecommerce}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Custom SaaS</span>
                <span className="text-2xl font-black text-indigo-400 font-mono mt-1 block">{stats.software}</span>
              </div>
            </div>

            {/* Filters & Search Bar */}
            <div className="flex flex-col xl:flex-row gap-3 items-stretch xl:items-center justify-between bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div className="relative w-full xl:w-80">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by title, client, industry..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto">
                <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400 px-2 font-bold text-[11px]">Category:</span>
                  {(["all", "web", "ecommerce", "software"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        categoryFilter === cat
                          ? "bg-emerald-600 text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {cat === "all" ? "All" : cat === "web" ? "Web" : cat === "ecommerce" ? "eCom" : "SaaS"}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400 px-2 font-bold text-[11px]">Status:</span>
                  {(["all", "published", "draft"] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        statusFilter === st
                          ? "bg-emerald-600 text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {st.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Studies Table / Grid */}
            <div className="bg-slate-900/60 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider font-mono text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="py-4 px-5">Project &amp; Preview</th>
                      <th className="py-4 px-4">Category</th>
                      <th className="py-4 px-4">Client &amp; Industry</th>
                      <th className="py-4 px-4">Timeline</th>
                      <th className="py-4 px-4">Status</th>
                      <th className="py-4 px-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredList.map((item) => (
                      <tr key={item._id || item.projectId} className="hover:bg-slate-800/40 transition-colors group">
                        
                        {/* Project Info & Thumbnail */}
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3.5">
                            <div className="w-16 h-11 rounded-lg overflow-hidden bg-slate-950 border border-slate-700/80 shrink-0 relative group/thumb">
                              <img
                                src={getImageUrl(item.image)}
                                alt={item.title}
                                className="w-full h-full object-cover object-top"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                                }}
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="font-extrabold text-white text-sm truncate max-w-xs group-hover:text-emerald-400 transition-colors">
                                {item.title}
                              </div>
                              <div className="text-[11px] font-mono text-slate-400 truncate">
                                /{item.projectId}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Category */}
                        <td className="py-4 px-4">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                              item.category === "web"
                                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                : item.category === "ecommerce"
                                ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                            }`}
                          >
                            {item.categoryLabel || item.category}
                          </span>
                        </td>

                        {/* Client & Industry */}
                        <td className="py-4 px-4">
                          <div className="text-slate-200 font-bold truncate max-w-[180px]">
                            {item.client || "Client Partner"}
                          </div>
                          <div className="text-[11px] text-slate-400 truncate max-w-[180px]">
                            {item.industry}
                          </div>
                        </td>

                        {/* Timeline */}
                        <td className="py-4 px-4 text-slate-300 font-mono font-medium">
                          {item.timeline || "4 Weeks"}
                        </td>

                        {/* Status Toggle */}
                        <td className="py-4 px-4">
                          <button
                            onClick={() => handleToggle(item)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                              item.isPublished
                                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25"
                                : "bg-amber-500/15 text-amber-400 border border-amber-500/30 hover:bg-amber-500/25"
                            }`}
                          >
                            {item.isPublished ? (
                              <>
                                <Eye size={12} />
                                <span>Published</span>
                              </>
                            ) : (
                              <>
                                <EyeOff size={12} />
                                <span>Draft</span>
                              </>
                            )}
                          </button>
                        </td>

                        {/* Action Buttons */}
                        <td className="py-4 px-5 text-right">
                          <div className="inline-flex items-center gap-1.5">
                            <Link
                              href={`/case-studies/${item.projectId}`}
                              target="_blank"
                              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                              title="View on Website"
                            >
                              <ExternalLink size={14} />
                            </Link>
                            <button
                              onClick={() => handleOpenEdit(item)}
                              className="p-2 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                              title="Edit Case Study"
                            >
                              <Edit size={14} />
                            </button>
                            <button
                              onClick={() => handleDelete(item)}
                              className="p-2 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                              title="Delete Case Study"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>

                      </tr>
                    ))}

                    {filteredList.length === 0 && !loading && (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-400">
                          No case studies found matching your criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </main>
        </div>

        {/* Create / Edit Case Study Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase mb-2">
                  <Layers size={13} />
                  <span>{modalMode === "create" ? "New Portfolio Upload" : "Edit Case Study"}</span>
                </div>
                <h2 className="text-2xl font-black text-white">
                  {modalMode === "create" ? "Upload Case Study to Portfolio" : `Edit "${formTitle}"`}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in project details and the authentic human intervention story to publish on the live website.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-950/50 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 size={16} className="shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Basic Information */}
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4">
                  <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider font-mono">
                    1. Core Project Information
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                        placeholder="e.g. Paitrik Homes"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        URL Slug (Project ID)
                      </label>
                      <input
                        type="text"
                        value={formProjectId}
                        onChange={(e) => setFormProjectId(e.target.value)}
                        placeholder="e.g. paitrik-homes (auto-generated if empty)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Category *</label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500 cursor-pointer"
                      >
                        <option value="web">Websites &amp; Portals</option>
                        <option value="ecommerce">eCommerce Stores</option>
                        <option value="software">Custom Software &amp; SaaS</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Category Badge Label</label>
                      <input
                        type="text"
                        value={formCategoryLabel}
                        onChange={(e) => setFormCategoryLabel(e.target.value)}
                        placeholder="e.g. Architecture & Construction"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Timeline</label>
                      <input
                        type="text"
                        value={formTimeline}
                        onChange={(e) => setFormTimeline(e.target.value)}
                        placeholder="e.g. 6 Weeks"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Client Name</label>
                      <input
                        type="text"
                        value={formClient}
                        onChange={(e) => setFormClient(e.target.value)}
                        placeholder="e.g. Paitrik Homes Pvt Ltd"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Industry</label>
                      <input
                        type="text"
                        value={formIndustry}
                        onChange={(e) => setFormIndustry(e.target.value)}
                        placeholder="e.g. Real Estate & Turnkey Construction"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Live Website URL</label>
                      <input
                        type="url"
                        value={formProjectUrl}
                        onChange={(e) => setFormProjectUrl(e.target.value)}
                        placeholder="https://clientwebsite.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Brief Project Summary *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      placeholder="Concise overview of what was engineered and delivered for this business..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* 2. Image Upload / Screenshot with Live Visual Preview */}
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ImageIcon size={16} className="text-emerald-400" />
                      <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider font-mono">
                        2. Project Screenshot &amp; Live UI Preview
                      </h3>
                    </div>
                    {previewUrl && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        <Check size={11} />
                        <span>{selectedFile ? "Ready to Upload" : "Active Image"}</span>
                      </span>
                    )}
                  </div>

                  {/* Hidden Real File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/jpg"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        const file = e.target.files[0];
                        setSelectedFile(file);
                        setPreviewUrl(URL.createObjectURL(file));
                      }
                    }}
                  />

                  {/* Live Visual Preview Frame or Drag & Drop Box */}
                  {previewUrl ? (
                    <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl">
                      {/* Browser Mockup Top Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <div className="ml-2 px-3 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400 truncate max-w-xs">
                            {formProjectUrl && formProjectUrl !== "https://"
                              ? formProjectUrl.replace(/^https?:\/\//, "")
                              : `${formProjectId || "project"}.hiverift.com`}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-[11px] font-bold transition-all shadow-xs cursor-pointer"
                          >
                            <Upload size={12} />
                            <span>Replace Image</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedFile(null);
                              setFormImageUrl("");
                              setPreviewUrl("");
                              if (fileInputRef.current) fileInputRef.current.value = "";
                            }}
                            className="p-1 rounded-lg bg-slate-800 hover:bg-rose-600/90 text-slate-400 hover:text-white transition-colors cursor-pointer"
                            title="Remove Image"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Preview Image Viewport */}
                      <div className="relative aspect-[16/9] w-full max-h-[300px] overflow-hidden bg-slate-950">
                        <img
                          src={previewUrl}
                          alt="Case study screenshot preview"
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px]">
                          <div className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white font-mono truncate max-w-md">
                            {selectedFile ? (
                              <span>
                                📁 {selectedFile.name} ({(selectedFile.size / 1024).toFixed(0)} KB)
                              </span>
                            ) : (
                              <span>🔗 {formImageUrl || "Saved Image"}</span>
                            )}
                          </div>
                          <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 font-bold font-mono uppercase text-[10px]">
                            Live Preview
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Drag & Drop Upload Zone */
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setIsDragging(false);
                        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                          const file = e.dataTransfer.files[0];
                          setSelectedFile(file);
                          setPreviewUrl(URL.createObjectURL(file));
                        }
                      }}
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer text-center group ${
                        isDragging
                          ? "border-emerald-400 bg-emerald-950/30 scale-[1.01]"
                          : "border-slate-700/80 hover:border-emerald-500/80 bg-slate-900/50 hover:bg-slate-900"
                      }`}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Upload size={24} />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        Click to browse or drag &amp; drop screenshot
                      </h4>
                      <p className="text-xs text-slate-400 max-w-xs mb-3">
                        Upload high-resolution client project mockup or website screenshot.
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono text-[10px]">
                          WEBP, PNG, JPG
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono text-[10px]">
                          Up to 10MB
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono text-[10px]">
                          16:9 / 16:10 Recommended
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Fallback Manual URL Input */}
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-400 mb-1.5">
                      Or Direct Image URL / Public File Path:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formImageUrl}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormImageUrl(val);
                          if (!selectedFile) {
                            setPreviewUrl(val ? getImageUrl(val) : "");
                          }
                        }}
                        placeholder="e.g. /case-studies/image_01.webp or https://images.unsplash.com/..."
                        className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                      />
                      {formImageUrl && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedFile(null);
                            setPreviewUrl(getImageUrl(formImageUrl));
                          }}
                          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors cursor-pointer"
                        >
                          Preview
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. The Human Story & Touchpoints */}
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-emerald-400" />
                    <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider font-mono">
                      3. The Human Story: How We Started &amp; Intervened
                    </h3>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Client Kickoff Story
                    </label>
                    <textarea
                      rows={4}
                      value={formHowWeStarted}
                      onChange={(e) => setFormHowWeStarted(e.target.value)}
                      placeholder="Explain how the engagement began, why the founder reached out, and how our senior team personally collaborated to understand their core operational bottlenecks..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold text-slate-400 block">3 Human Touchpoint Pillars:</span>
                    
                    <div className="grid sm:grid-cols-2 gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <input
                        type="text"
                        value={step1Title}
                        onChange={(e) => setStep1Title(e.target.value)}
                        placeholder="Step 1 Title"
                        className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
                      />
                      <input
                        type="text"
                        value={step1Desc}
                        onChange={(e) => setStep1Desc(e.target.value)}
                        placeholder="Step 1 Description"
                        className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <input
                        type="text"
                        value={step2Title}
                        onChange={(e) => setStep2Title(e.target.value)}
                        placeholder="Step 2 Title"
                        className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
                      />
                      <input
                        type="text"
                        value={step2Desc}
                        onChange={(e) => setStep2Desc(e.target.value)}
                        placeholder="Step 2 Description"
                        className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <input
                        type="text"
                        value={step3Title}
                        onChange={(e) => setStep3Title(e.target.value)}
                        placeholder="Step 3 Title"
                        className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
                      />
                      <input
                        type="text"
                        value={step3Desc}
                        onChange={(e) => setStep3Desc(e.target.value)}
                        placeholder="Step 3 Description"
                        className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Engineering Details: Challenge, Solution, Tech Stack */}
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4">
                  <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider font-mono">
                    4. Technical Execution &amp; Key Features
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        The Challenge
                      </label>
                      <textarea
                        rows={3}
                        value={formChallenge}
                        onChange={(e) => setFormChallenge(e.target.value)}
                        placeholder="The specific business friction, drop-offs, or bottlenecks..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        The HiveRift Solution
                      </label>
                      <textarea
                        rows={3}
                        value={formSolution}
                        onChange={(e) => setFormSolution(e.target.value)}
                        placeholder="Architecture, UI/UX execution, and custom logic engineered..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Key Features (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={formKeyFeatures}
                        onChange={(e) => setFormKeyFeatures(e.target.value)}
                        placeholder="Interactive 3D Viewer, Automated CRM, 1-Click Checkout"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Tech Stack (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={formTechStack}
                        onChange={(e) => setFormTechStack(e.target.value)}
                        placeholder="Next.js, TypeScript, Tailwind CSS, Node.js"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Services (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={formServices}
                        onChange={(e) => setFormServices(e.target.value)}
                        placeholder="Custom Web Engineering, UI/UX Design, Lead Automation"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Publishing Options */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formIsPublished}
                        onChange={(e) => setFormIsPublished(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600" />
                    </label>
                    <span className="text-xs font-bold text-white">
                      {formIsPublished ? "Published (Visible on Website)" : "Draft (Hidden from Public)"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-xs font-bold text-slate-400">Display Order:</label>
                    <input
                      type="number"
                      value={formOrder}
                      onChange={(e) => setFormOrder(parseInt(e.target.value, 10) || 0)}
                      className="w-20 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono text-center"
                    />
                  </div>
                </div>

                {/* Form Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-600/25 cursor-pointer disabled:opacity-50"
                  >
                    {submitting && <RefreshCw size={14} className="animate-spin" />}
                    <span>{modalMode === "create" ? "Publish to Portfolio" : "Save Changes"}</span>
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
