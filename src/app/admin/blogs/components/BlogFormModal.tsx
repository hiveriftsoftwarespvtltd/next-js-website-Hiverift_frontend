"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Plus,
  Trash2,
  Save,
  Image as ImageIcon,
  FileText,
  Upload,
  Eye,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Globe,
  Layers,
  Table as TableIcon,
  List,
  Sparkles,
  Link as LinkIcon,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import Swal from "sweetalert2";
import { BlogPost, BlogTableData, BlogFaqItem, BlogSeoDetail, BlogSection, getBlogFallbackImage } from "@/app/data/blogData";
import { getImageUrl } from "@/app/actions/adminActions";

interface BlogFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (blogData: FormData) => Promise<void>;
  initialData?: BlogPost | null;
}

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function BlogFormModal({
  isOpen,
  onClose,
  onSave,
  initialData
}: BlogFormModalProps) {
  const [activeTab, setActiveTab] = useState<"general" | "content" | "faqs" | "seo">("general");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitReady, setSubmitReady] = useState(false);

  useEffect(() => {
    formRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    if (activeTab === "seo") {
      setSubmitReady(false);
      const timer = setTimeout(() => {
        setSubmitReady(true);
      }, 350);
      return () => clearTimeout(timer);
    } else {
      setSubmitReady(false);
    }
  }, [activeTab]);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "Web Development",
    desc: "",
    readTime: "4 min read",
    author: "HiveRift Team",
    authorRole: "Tech & Strategy",
    image: "",
    imageAlt: "",
    imageTitle: "",
    imageCaption: "",
    intro: "",
    keyTakeaways: ["High performance web architecture", "10x ROI in conversion rates"],
    sections: [
      {
        heading: "1. Core Advantages",
        text: "Detailed explanation of core advantages and metrics.",
        pointers: ["Faster loading speed", "Better search visibility"],
        table: undefined as BlogTableData | undefined
      }
    ] as BlogSection[],
    quote: "",
    conclusion: "Contact HiveRift for custom solutions.",
    faqs: [] as BlogFaqItem[],
    seo: {
      metaTitle: "",
      metaDescription: "",
      focusKeyword: "",
      canonicalUrl: "",
      ogTitle: "",
      ogDescription: "",
      ogImage: ""
    } as BlogSeoDetail
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrlInput, setImageUrlInput] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setImageFile(null);
    if (initialData) {
      const initialImg = typeof initialData.image === "string" ? initialData.image : "";
      const existingSections = initialData.content?.sections || [];
      const formattedSections: BlogSection[] = existingSections.map((s, idx) => ({
        heading: s.heading || `Section ${idx + 1}`,
        text: s.text || "",
        pointers: Array.isArray(s.pointers) ? s.pointers : [],
        table: s.table || undefined
      }));

      const existingFaqs = initialData.faqs || initialData.content?.faqs || [];

      setFormData({
        title: initialData.title || "",
        slug: initialData.slug || generateSlug(initialData.title || ""),
        category: initialData.category || "Web Development",
        desc: initialData.desc || "",
        readTime: initialData.readTime || "4 min read",
        author: initialData.author || "HiveRift Team",
        authorRole: initialData.authorRole || "Tech & Strategy",
        image: initialImg,
        imageAlt: initialData.imageAlt || initialData.title || "",
        imageTitle: initialData.imageTitle || initialData.title || "",
        imageCaption: initialData.imageCaption || "",
        intro: initialData.content?.intro || initialData.desc || "",
        keyTakeaways: initialData.content?.keyTakeaways?.length
          ? initialData.content.keyTakeaways
          : ["Key takeaway 1"],
        sections: formattedSections.length > 0
          ? formattedSections
          : [{ heading: "1. Key Point", text: "Details here", pointers: [] }],
        quote: initialData.content?.quote || "",
        conclusion: initialData.content?.conclusion || "",
        faqs: Array.isArray(existingFaqs) ? existingFaqs : [],
        seo: {
          metaTitle: initialData.seo?.metaTitle || initialData.title || "",
          metaDescription: initialData.seo?.metaDescription || initialData.desc || "",
          focusKeyword: initialData.seo?.focusKeyword || "",
          canonicalUrl: initialData.seo?.canonicalUrl || "",
          ogTitle: initialData.seo?.ogTitle || initialData.title || "",
          ogDescription: initialData.seo?.ogDescription || initialData.desc || "",
          ogImage: initialData.seo?.ogImage || ""
        }
      });
      setImageUrlInput(initialImg);
      setPreviewUrl(initialImg ? getImageUrl(initialImg) : "");
    } else {
      setFormData({
        title: "",
        slug: "",
        category: "Web Development",
        desc: "",
        readTime: "4 min read",
        author: "HiveRift Team",
        authorRole: "Tech & Strategy",
        image: "",
        imageAlt: "",
        imageTitle: "",
        imageCaption: "",
        intro: "",
        keyTakeaways: ["High performance web architecture", "10x ROI in conversion rates"],
        sections: [
          {
            heading: "1. Core Overview",
            text: "Detailed explanation of core advantages and metrics.",
            pointers: ["Key benefit 1", "Key benefit 2"],
            table: undefined
          }
        ],
        quote: "",
        conclusion: "Contact HiveRift for custom solutions.",
        faqs: [],
        seo: {
          metaTitle: "",
          metaDescription: "",
          focusKeyword: "",
          canonicalUrl: "",
          ogTitle: "",
          ogDescription: "",
          ogImage: ""
        }
      });
      setImageUrlInput("");
      setPreviewUrl("");
    }
    setActiveTab("general");
  }, [initialData, isOpen]);

  // Handle Cover Image Selection & Live Preview
  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else if (imageUrlInput.trim()) {
      setPreviewUrl(getImageUrl(imageUrlInput.trim()));
    } else if (formData.image && typeof formData.image === "string") {
      setPreviewUrl(getImageUrl(formData.image));
    } else {
      setPreviewUrl("");
    }
  }, [imageFile, imageUrlInput, formData.image]);

  // Auto-generate slug when title changes (if slug is empty or matches previous title)
  const handleTitleChange = (val: string) => {
    setFormData((prev) => {
      const shouldAutoSlug = !prev.slug || prev.slug === generateSlug(prev.title);
      return {
        ...prev,
        title: val,
        slug: shouldAutoSlug ? generateSlug(val) : prev.slug,
        seo: {
          ...prev.seo,
          metaTitle: prev.seo?.metaTitle ? prev.seo.metaTitle : val,
          ogTitle: prev.seo?.ogTitle ? prev.seo.ogTitle : val
        }
      };
    });
  };

  // Key Takeaways Actions
  const handleTakeawayChange = (index: number, value: string) => {
    const updated = [...formData.keyTakeaways];
    updated[index] = value;
    setFormData({ ...formData, keyTakeaways: updated });
  };

  const addTakeaway = () => {
    setFormData({
      ...formData,
      keyTakeaways: [...formData.keyTakeaways, "New Strategic Takeaway"]
    });
  };

  const removeTakeaway = (index: number) => {
    setFormData({
      ...formData,
      keyTakeaways: formData.keyTakeaways.filter((_, i) => i !== index)
    });
  };

  // Section Actions
  const handleSectionChange = (
    index: number,
    field: "heading" | "text",
    value: string
  ) => {
    const updated = [...formData.sections];
    updated[index][field] = value;
    setFormData({ ...formData, sections: updated });
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [
        ...formData.sections,
        {
          heading: `${formData.sections.length + 1}. New Article Section`,
          text: "Write section paragraph content here...",
          pointers: []
        }
      ]
    });
  };

  const removeSection = (index: number) => {
    setFormData({
      ...formData,
      sections: formData.sections.filter((_, i) => i !== index)
    });
  };

  // Section Pointers (Bullet List) Actions
  const addPointerToSection = (sectionIndex: number) => {
    const updated = [...formData.sections];
    const pointers = updated[sectionIndex].pointers || [];
    updated[sectionIndex].pointers = [...pointers, "New Key Point"];
    setFormData({ ...formData, sections: updated });
  };

  const updatePointer = (sectionIndex: number, pointerIndex: number, val: string) => {
    const updated = [...formData.sections];
    if (updated[sectionIndex].pointers) {
      updated[sectionIndex].pointers![pointerIndex] = val;
      setFormData({ ...formData, sections: updated });
    }
  };

  const removePointer = (sectionIndex: number, pointerIndex: number) => {
    const updated = [...formData.sections];
    if (updated[sectionIndex].pointers) {
      updated[sectionIndex].pointers = updated[sectionIndex].pointers!.filter((_, i) => i !== pointerIndex);
      setFormData({ ...formData, sections: updated });
    }
  };

  // Section Table Actions
  const toggleSectionTable = (sectionIndex: number) => {
    const updated = [...formData.sections];
    if (updated[sectionIndex].table) {
      updated[sectionIndex].table = undefined;
    } else {
      updated[sectionIndex].table = {
        headers: ["Feature / Metric", "Standard Approach", "HiveRift Architecture"],
        rows: [
          ["Page Load Speed", "3.8s avg", "0.6s instant"],
          ["Mobile Responsiveness", "Template based", "Custom adaptive UX"],
          ["SEO Technical Core", "Basic tags", "Full Schema.org & JSON-LD"]
        ],
        caption: "Technical Architecture & Performance Comparison"
      };
    }
    setFormData({ ...formData, sections: updated });
  };

  const updateTableHeader = (secIdx: number, colIdx: number, val: string) => {
    const updated = [...formData.sections];
    if (updated[secIdx].table) {
      updated[secIdx].table!.headers[colIdx] = val;
      setFormData({ ...formData, sections: updated });
    }
  };

  const addTableColumn = (secIdx: number) => {
    const updated = [...formData.sections];
    if (updated[secIdx].table) {
      const newHeader = `Column ${updated[secIdx].table!.headers.length + 1}`;
      updated[secIdx].table!.headers.push(newHeader);
      updated[secIdx].table!.rows.forEach((r) => r.push("-"));
      setFormData({ ...formData, sections: updated });
    }
  };

  const removeTableColumn = (secIdx: number, colIdx: number) => {
    const updated = [...formData.sections];
    if (updated[secIdx].table && updated[secIdx].table!.headers.length > 1) {
      updated[secIdx].table!.headers.splice(colIdx, 1);
      updated[secIdx].table!.rows.forEach((r) => r.splice(colIdx, 1));
      setFormData({ ...formData, sections: updated });
    }
  };

  const updateTableCell = (secIdx: number, rowIdx: number, colIdx: number, val: string) => {
    const updated = [...formData.sections];
    if (updated[secIdx].table) {
      updated[secIdx].table!.rows[rowIdx][colIdx] = val;
      setFormData({ ...formData, sections: updated });
    }
  };

  const addTableRow = (secIdx: number) => {
    const updated = [...formData.sections];
    if (updated[secIdx].table) {
      const newRow = new Array(updated[secIdx].table!.headers.length).fill("Data point");
      updated[secIdx].table!.rows.push(newRow);
      setFormData({ ...formData, sections: updated });
    }
  };

  const removeTableRow = (secIdx: number, rowIdx: number) => {
    const updated = [...formData.sections];
    if (updated[secIdx].table && updated[secIdx].table!.rows.length > 1) {
      updated[secIdx].table!.rows.splice(rowIdx, 1);
      setFormData({ ...formData, sections: updated });
    }
  };

  // FAQ Actions
  const addFaq = () => {
    setFormData({
      ...formData,
      faqs: [
        ...formData.faqs,
        {
          question: "Frequently Asked Question?",
          answer: "Detailed answer explaining the topic clearly for users and search engines."
        }
      ]
    });
  };

  const updateFaq = (index: number, field: "question" | "answer", val: string) => {
    const updated = [...formData.faqs];
    updated[index][field] = val;
    setFormData({ ...formData, faqs: updated });
  };

  const removeFaq = (index: number) => {
    setFormData({
      ...formData,
      faqs: formData.faqs.filter((_, i) => i !== index)
    });
  };

  // Multi-Step Next Handler
  const handleNextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (activeTab === "general") {
      if (!formData.title.trim()) {
        Swal.fire({
          icon: "warning",
          title: "Article Title Required",
          text: "Please enter an Article Title before moving to Content & Tables."
        });
        return;
      }
      if (!formData.desc.trim()) {
        Swal.fire({
          icon: "warning",
          title: "Article Summary Required",
          text: "Please enter a Short Summary before moving to Content & Tables."
        });
        return;
      }
      setActiveTab("content");
    } else if (activeTab === "content") {
      setActiveTab("faqs");
    } else if (activeTab === "faqs") {
      setActiveTab("seo");
    }
  };

  // Form Submit (Allowed only on final step 'seo' when ready)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (activeTab !== "seo" || !submitReady) {
      console.warn("Blocked premature form submission on step:", activeTab);
      return;
    }

    if (!formData.title.trim() || !formData.desc.trim()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Article Title and Short Summary are required."
      });
      return;
    }

    if (!imageFile && !imageUrlInput.trim() && !formData.image && !initialData) {
      Swal.fire({
        icon: "error",
        title: "Cover Image Required",
        text: "Please select an image file to upload or enter an image URL."
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append("title", formData.title.trim());
      data.append("slug", (formData.slug.trim() || generateSlug(formData.title)).trim());
      data.append("category", formData.category);
      data.append("desc", formData.desc.trim());
      data.append("readTime", formData.readTime.trim());
      data.append("author", formData.author.trim());
      data.append("authorRole", formData.authorRole.trim());

      // Cover Image SEO fields
      data.append("imageAlt", formData.imageAlt.trim() || formData.title.trim());
      data.append("imageTitle", formData.imageTitle.trim() || formData.title.trim());
      data.append("imageCaption", formData.imageCaption.trim());

      // Dedicated SEO Meta & Social Controls
      const seoPayload = {
        metaTitle: formData.seo.metaTitle.trim() || formData.title.trim(),
        metaDescription: formData.seo.metaDescription.trim() || formData.desc.trim(),
        focusKeyword: formData.seo.focusKeyword?.trim() || "",
        canonicalUrl: formData.seo.canonicalUrl?.trim() || "",
        ogTitle: formData.seo.ogTitle?.trim() || formData.seo.metaTitle?.trim() || formData.title.trim(),
        ogDescription: formData.seo.ogDescription?.trim() || formData.seo.metaDescription?.trim() || formData.desc.trim(),
        ogImage: formData.seo.ogImage?.trim() || ""
      };
      data.append("seo", JSON.stringify(seoPayload));

      // FAQs
      const cleanFaqs = formData.faqs.filter((f) => f.question.trim().length > 0);
      data.append("faqs", JSON.stringify(cleanFaqs));

      // Content Detail
      const contentObj = {
        intro: formData.intro.trim() || formData.desc.trim(),
        keyTakeaways: formData.keyTakeaways.filter((k) => k.trim().length > 0),
        sections: formData.sections,
        faqs: cleanFaqs,
        quote: formData.quote.trim(),
        conclusion: formData.conclusion.trim()
      };
      data.append("content", JSON.stringify(contentObj));

      // Image File or URL
      if (imageFile) {
        data.append("image", imageFile);
      } else if (imageUrlInput.trim()) {
        data.append("image", imageUrlInput.trim());
      } else if (typeof formData.image === "string" && formData.image.trim()) {
        data.append("image", formData.image.trim());
      }

      await onSave(data);
      onClose();
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message || "Failed to save blog post."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    "Web Development",
    "Digital Marketing",
    "SEO",
    "Mobile Apps",
    "Business Growth",
    "Tech & AI"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div suppressHydrationWarning className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-all"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black shadow-md shadow-emerald-500/20">
                  <FileText size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">
                    {initialData ? "Edit Article & SEO Controls" : "Create New Article"}
                  </h2>
                  <p className="text-xs font-bold text-slate-500">
                    Enterprise Content Architecture with Semantic Blocks, Image SEO & FAQs
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-xl hover:bg-slate-200/60 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Tabs Navigation */}
            <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-100 bg-white overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("general")}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${
                  activeTab === "general"
                    ? "border-emerald-600 text-emerald-700 bg-emerald-50/50 rounded-t-xl"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                <FileText size={14} />
                <span>1. General & Cover</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("content")}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${
                  activeTab === "content"
                    ? "border-emerald-600 text-emerald-700 bg-emerald-50/50 rounded-t-xl"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                <Layers size={14} />
                <span>2. Content & Tables</span>
                <span className="ml-1 px-1.5 py-0.5 rounded-full bg-slate-100 text-[10px] text-slate-600">
                  {formData.sections.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("faqs")}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${
                  activeTab === "faqs"
                    ? "border-emerald-600 text-emerald-700 bg-emerald-50/50 rounded-t-xl"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                <HelpCircle size={14} />
                <span>3. FAQs</span>
                {formData.faqs.length > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 rounded-full bg-emerald-100 text-[10px] text-emerald-800">
                    {formData.faqs.length}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("seo")}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${
                  activeTab === "seo"
                    ? "border-emerald-600 text-emerald-700 bg-emerald-50/50 rounded-t-xl"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                <Globe size={14} />
                <span>4. SEO & Social Meta</span>
              </button>
            </div>

            {/* Modal Body / Scrollable Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              onKeyDown={(e) => {
                // Prevent Enter key in single-line text inputs from prematurely submitting the multi-step form
                if (e.key === "Enter" && (e.target as HTMLElement).tagName === "INPUT") {
                  e.preventDefault();
                }
              }}
              className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8"
            >
              
              {/* TAB 1: GENERAL & COVER IMAGE */}
              {activeTab === "general" && (
                <div className="space-y-6">
                  {/* Article Title */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center justify-between">
                      <span>Article Title *</span>
                      <span className="text-[11px] text-slate-400 font-bold">{formData.title.length} characters</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Website Design & Development Process for Growing Businesses"
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 text-sm focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all"
                    />
                  </div>

                  {/* URL Slug */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center justify-between">
                      <span>URL Slug (SEO URL Structure) *</span>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, slug: generateSlug(formData.title) })}
                        className="text-[11px] text-emerald-600 hover:underline font-bold flex items-center gap-1"
                      >
                        <Sparkles size={11} /> Auto-generate from title
                      </button>
                    </label>
                    <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600">
                      <span className="px-3.5 py-3 text-xs font-bold text-slate-400 bg-slate-100/80 border-r border-slate-200 select-none">
                        hiverift.com/blog/
                      </span>
                      <input
                        type="text"
                        placeholder="website-design-development-process"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: generateSlug(e.target.value) })}
                        className="w-full px-3.5 py-3 bg-transparent font-bold text-slate-900 text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* Category & Read Time Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-slate-700">Category *</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all"
                      >
                        {categories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-slate-700">Read Time</label>
                      <input
                        type="text"
                        placeholder="e.g. 5 min read"
                        value={formData.readTime}
                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Author & Role Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-slate-700">Author Name</label>
                      <input
                        type="text"
                        placeholder="HiveRift Team"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-slate-700">Author Role / Title</label>
                      <input
                        type="text"
                        placeholder="Tech & Product Strategy"
                        value={formData.authorRole}
                        onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Short Summary Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center justify-between">
                      <span>Article Summary / Excerpt *</span>
                      <span className="text-[11px] text-slate-400 font-bold">{formData.desc.length} characters</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Concise overview displayed on cards and blog listings..."
                      value={formData.desc}
                      onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all leading-relaxed"
                    />
                  </div>

                  {/* Cover Image & Image SEO Card */}
                  <div className="p-6 bg-slate-50/80 border border-slate-200 rounded-2xl space-y-5">
                    <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                      <ImageIcon size={18} className="text-emerald-600" />
                      <span>Cover Image & Image SEO Controls</span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Upload */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-600">Upload Image File</label>
                        <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 rounded-xl hover:border-emerald-500 cursor-pointer transition-all bg-white">
                          <Upload size={22} className="text-slate-400 mb-1" />
                          <span className="text-xs font-bold text-slate-700">Choose PNG, JPG, or WebP</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                const file = e.target.files[0];
                                setImageFile(file);
                                setImageUrlInput("");
                                setPreviewUrl(URL.createObjectURL(file));
                              }
                            }}
                          />
                        </label>
                      </div>

                      {/* Or URL */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-600">Or Paste Image URL</label>
                        <input
                          type="text"
                          placeholder="https://images.unsplash.com/..."
                          value={imageUrlInput}
                          onChange={(e) => setImageUrlInput(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-900 text-xs focus:border-emerald-600 outline-none"
                        />
                      </div>
                    </div>

                    {/* Image SEO Fields (Alt Text, Title, Caption) */}
                    <div className="grid sm:grid-cols-3 gap-3 pt-2 border-t border-slate-200">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black uppercase text-slate-700">Image Alt Text (SEO)</label>
                        <input
                          type="text"
                          placeholder="Descriptive alt text for Google..."
                          value={formData.imageAlt}
                          onChange={(e) => setFormData({ ...formData, imageAlt: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-900 outline-none focus:border-emerald-600"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black uppercase text-slate-700">Image Title Attribute</label>
                        <input
                          type="text"
                          placeholder="Hover tooltip title..."
                          value={formData.imageTitle}
                          onChange={(e) => setFormData({ ...formData, imageTitle: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-900 outline-none focus:border-emerald-600"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black uppercase text-slate-700">Visible Caption</label>
                        <input
                          type="text"
                          placeholder="Optional caption under image..."
                          value={formData.imageCaption}
                          onChange={(e) => setFormData({ ...formData, imageCaption: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-900 outline-none focus:border-emerald-600"
                        />
                      </div>
                    </div>

                    {/* Live Image Preview */}
                    {previewUrl && (
                      <div className="relative aspect-[16/8] max-w-md mx-auto rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (target.src.includes("localhost:7001")) {
                              target.src = target.src.replace("http://localhost:7001", "https://api.hiverift.com");
                              return;
                            }
                            if (target.src.includes("api.hiverift.com")) {
                              target.src = target.src.replace("https://api.hiverift.com", "http://localhost:7001");
                              return;
                            }
                            target.src = getBlogFallbackImage(formData.category);
                          }}
                        />
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-bold">
                          Cover Preview
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: CONTENT BLOCKS & SECTIONS WITH TABLES & POINTERS */}
              {activeTab === "content" && (
                <div className="space-y-8">
                  {/* Executive Summary / Intro */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-2">
                      <Sparkles size={13} className="text-emerald-600" />
                      <span>Executive Summary / Introduction *</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="In-depth introduction paragraph setting up the article context..."
                      value={formData.intro}
                      onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none leading-relaxed"
                    />
                  </div>

                  {/* Key Takeaways */}
                  <div className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-black text-emerald-900">
                        <CheckCircle2 size={18} className="text-emerald-600" />
                        <span>Key Takeaways (Executive Highlights)</span>
                      </div>
                      <button
                        type="button"
                        onClick={addTakeaway}
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-lg transition-colors flex items-center gap-1 shadow-xs"
                      >
                        <Plus size={13} /> Add Takeaway
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {formData.keyTakeaways.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => handleTakeawayChange(idx, e.target.value)}
                            className="w-full px-3.5 py-2 bg-white border border-emerald-200/80 rounded-xl text-xs font-bold text-slate-800 outline-none focus:border-emerald-600"
                          />
                          {formData.keyTakeaways.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeTakeaway(idx)}
                              className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                            >
                              <Trash2 size={15} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Sections Builder */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <h3 className="text-base font-black text-slate-900">Main Content Sections</h3>
                        <p className="text-xs text-slate-500 font-medium">
                          Each section supports semantic headings, formatted paragraphs, bullet pointers, and comparison tables.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={addSection}
                        className="px-4 py-2 bg-slate-900 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <Plus size={14} /> Add Section
                      </button>
                    </div>

                    <div className="space-y-6">
                      {formData.sections.map((sec, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-6 bg-slate-50/80 border border-slate-200 rounded-2xl space-y-5 transition-all hover:border-slate-300"
                        >
                          <div className="flex items-center justify-between">
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider rounded-lg">
                              Section {sIdx + 1}
                            </span>
                            {formData.sections.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeSection(sIdx)}
                                className="text-xs font-bold text-rose-500 hover:text-rose-700 flex items-center gap-1"
                              >
                                <Trash2 size={13} /> Delete Section
                              </button>
                            )}
                          </div>

                          {/* Section Heading */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-black uppercase text-slate-700">Section Heading (H2) *</label>
                            <input
                              type="text"
                              required
                              value={sec.heading}
                              onChange={(e) => handleSectionChange(sIdx, "heading", e.target.value)}
                              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-black text-slate-900 text-sm outline-none focus:border-emerald-600"
                            />
                          </div>

                          {/* Section Paragraph Text */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-black uppercase text-slate-700">
                              Paragraph Body (Use double enter for separate paragraphs, **text** for bold)
                            </label>
                            <textarea
                              required
                              rows={5}
                              value={sec.text}
                              onChange={(e) => handleSectionChange(sIdx, "text", e.target.value)}
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-medium text-slate-800 text-sm outline-none focus:border-emerald-600 leading-relaxed"
                            />
                          </div>

                          {/* Section Pointers (Bullet List) */}
                          <div className="p-4 bg-white border border-slate-200/80 rounded-xl space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                                <List size={14} className="text-emerald-600" />
                                <span>Pointers / Bullet List (Optional)</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => addPointerToSection(sIdx)}
                                className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                              >
                                <Plus size={12} /> Add Pointer
                              </button>
                            </div>

                            {(!sec.pointers || sec.pointers.length === 0) ? (
                              <p className="text-xs text-slate-400 italic">No pointers added yet. Click 'Add Pointer' to add bullet points to this section.</p>
                            ) : (
                              <div className="space-y-2">
                                {sec.pointers.map((pt, pIdx) => (
                                  <div key={pIdx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                                    <input
                                      type="text"
                                      value={pt}
                                      onChange={(e) => updatePointer(sIdx, pIdx, e.target.value)}
                                      className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 outline-none focus:border-emerald-600"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => removePointer(sIdx, pIdx)}
                                      className="p-1 text-slate-400 hover:text-rose-500"
                                    >
                                      <Trash2 size={13} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Section Comparison / Specification Table */}
                          <div className="p-4 bg-white border border-slate-200/80 rounded-xl space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                                <TableIcon size={14} className="text-emerald-600" />
                                <span>Comparison / Specification Table</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => toggleSectionTable(sIdx)}
                                className={`text-xs font-black px-3 py-1 rounded-lg transition-colors ${
                                  sec.table
                                    ? "bg-rose-50 text-rose-600 hover:bg-rose-100"
                                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                                }`}
                              >
                                {sec.table ? "Remove Table" : "+ Add Comparison Table"}
                              </button>
                            </div>

                            {sec.table && (
                              <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-2">
                                  <input
                                    type="text"
                                    placeholder="Table Caption / Title..."
                                    value={sec.table.caption || ""}
                                    onChange={(e) => {
                                      const updated = [...formData.sections];
                                      if (updated[sIdx].table) {
                                        updated[sIdx].table!.caption = e.target.value;
                                        setFormData({ ...formData, sections: updated });
                                      }
                                    }}
                                    className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 outline-none"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => addTableColumn(sIdx)}
                                    className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg shrink-0"
                                  >
                                    + Column
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => addTableRow(sIdx)}
                                    className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg shrink-0"
                                  >
                                    + Row
                                  </button>
                                </div>

                                {/* Table Grid Editor */}
                                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                                  <table className="w-full text-xs text-left">
                                    <thead className="bg-slate-100 font-black text-slate-900 border-b border-slate-200">
                                      <tr>
                                        {sec.table.headers.map((h, cIdx) => (
                                          <th key={cIdx} className="p-2 border-r border-slate-200 min-w-[120px]">
                                            <div className="flex items-center gap-1">
                                              <input
                                                type="text"
                                                value={h}
                                                onChange={(e) => updateTableHeader(sIdx, cIdx, e.target.value)}
                                                className="w-full bg-white px-2 py-1 rounded font-black text-xs outline-none"
                                              />
                                              {sec.table!.headers.length > 1 && (
                                                <button
                                                  type="button"
                                                  onClick={() => removeTableColumn(sIdx, cIdx)}
                                                  className="text-slate-400 hover:text-rose-500"
                                                >
                                                  <X size={12} />
                                                </button>
                                              )}
                                            </div>
                                          </th>
                                        ))}
                                        <th className="p-2 w-8"></th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                      {sec.table.rows.map((row, rIdx) => (
                                        <tr key={rIdx} className="hover:bg-slate-50/50">
                                          {row.map((cell, cIdx) => (
                                            <td key={cIdx} className="p-2 border-r border-slate-200">
                                              <input
                                                type="text"
                                                value={cell}
                                                onChange={(e) => updateTableCell(sIdx, rIdx, cIdx, e.target.value)}
                                                className="w-full bg-transparent px-2 py-1 font-medium text-slate-800 outline-none focus:bg-white rounded"
                                              />
                                            </td>
                                          ))}
                                          <td className="p-2 text-center">
                                            {sec.table!.rows.length > 1 && (
                                              <button
                                                type="button"
                                                onClick={() => removeTableRow(sIdx, rIdx)}
                                                className="text-slate-400 hover:text-rose-500"
                                              >
                                                <Trash2 size={12} />
                                              </button>
                                            )}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Editorial Quote & Conclusion */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-slate-700">Editorial Quote (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Inspirational or key takeaway quote..."
                        value={formData.quote}
                        onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 text-sm outline-none focus:bg-white focus:border-emerald-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-slate-700">Conclusion & Next Steps *</label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Closing summary and recommended next action..."
                        value={formData.conclusion}
                        onChange={(e) => setFormData({ ...formData, conclusion: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 text-sm outline-none focus:bg-white focus:border-emerald-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: FAQS SECTION */}
              {activeTab === "faqs" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                        <HelpCircle size={18} className="text-emerald-600" />
                        <span>Article FAQ Section (Google FAQPage Rich Snippets)</span>
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Answer genuine questions about this topic. These will render as an interactive accordion and inject Schema.org JSON-LD.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={addFaq}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <Plus size={14} /> Add FAQ
                    </button>
                  </div>

                  {formData.faqs.length === 0 ? (
                    <div className="p-12 text-center border-2 border-dashed border-slate-200 rounded-2xl">
                      <HelpCircle size={32} className="text-slate-300 mx-auto mb-2" />
                      <p className="text-sm font-bold text-slate-600">No FAQs added yet</p>
                      <p className="text-xs text-slate-400 mt-1">Click "+ Add FAQ" above to add reader questions and answers.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {formData.faqs.map((faq, idx) => (
                        <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                              Question {idx + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFaq(idx)}
                              className="text-xs font-bold text-rose-500 hover:text-rose-700 flex items-center gap-1"
                            >
                              <Trash2 size={13} /> Remove
                            </button>
                          </div>

                          <input
                            type="text"
                            placeholder="e.g. How much does a modern responsive website cost in India?"
                            value={faq.question}
                            onChange={(e) => updateFaq(idx, "question", e.target.value)}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-900 text-sm outline-none focus:border-emerald-600"
                          />

                          <textarea
                            rows={3}
                            placeholder="Write clear, informative answer..."
                            value={faq.answer}
                            onChange={(e) => updateFaq(idx, "answer", e.target.value)}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-medium text-slate-800 text-xs outline-none focus:border-emerald-600 leading-relaxed"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: DEDICATED SEO & SOCIAL SHARING CONTROLS */}
              {activeTab === "seo" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                      <Globe size={18} className="text-emerald-600" />
                      <span>Dedicated Search Engine Optimization (SEO)</span>
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Control exact meta titles, meta descriptions, target keywords, and social graph cards.
                    </p>
                  </div>

                  {/* SEO Meta Title */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black uppercase text-slate-700">SEO Meta Title</label>
                      <span className={`text-[11px] font-bold ${
                        (formData.seo.metaTitle?.length || 0) > 60 ? "text-amber-600" : "text-emerald-600"
                      }`}>
                        {formData.seo.metaTitle?.length || 0} / 60 characters recommended
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Title displayed on Google Search (defaults to Article Title)"
                      value={formData.seo.metaTitle}
                      onChange={(e) => setFormData({
                        ...formData,
                        seo: { ...formData.seo, metaTitle: e.target.value }
                      })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 text-sm outline-none focus:bg-white focus:border-emerald-600"
                    />
                  </div>

                  {/* SEO Meta Description */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black uppercase text-slate-700">Meta Description</label>
                      <span className={`text-[11px] font-bold ${
                        (formData.seo.metaDescription?.length || 0) > 160 ? "text-amber-600" : "text-emerald-600"
                      }`}>
                        {formData.seo.metaDescription?.length || 0} / 160 characters recommended
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      placeholder="Search snippet summary displayed under Google search result..."
                      value={formData.seo.metaDescription}
                      onChange={(e) => setFormData({
                        ...formData,
                        seo: { ...formData.seo, metaDescription: e.target.value }
                      })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 text-xs outline-none focus:bg-white focus:border-emerald-600 leading-relaxed"
                    />
                  </div>

                  {/* Focus Keyword & Canonical URL Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black uppercase text-slate-700">Focus Target Keyword</label>
                      <input
                        type="text"
                        placeholder="e.g. website development process"
                        value={formData.seo.focusKeyword || ""}
                        onChange={(e) => setFormData({
                          ...formData,
                          seo: { ...formData.seo, focusKeyword: e.target.value }
                        })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 text-xs outline-none focus:bg-white focus:border-emerald-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-black uppercase text-slate-700">Canonical URL (Optional)</label>
                      <input
                        type="text"
                        placeholder="https://hiverift.com/blog/..."
                        value={formData.seo.canonicalUrl || ""}
                        onChange={(e) => setFormData({
                          ...formData,
                          seo: { ...formData.seo, canonicalUrl: e.target.value }
                        })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 text-xs outline-none focus:bg-white focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  {/* Social Sharing (OpenGraph) Preview Card */}
                  <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                    <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                      <LinkIcon size={16} className="text-emerald-600" />
                      <span>Social Sharing Card (WhatsApp, LinkedIn, Twitter, Facebook)</span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black uppercase text-slate-700">Social Share Title</label>
                        <input
                          type="text"
                          placeholder="Defaults to Meta Title"
                          value={formData.seo.ogTitle || ""}
                          onChange={(e) => setFormData({
                            ...formData,
                            seo: { ...formData.seo, ogTitle: e.target.value }
                          })}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-900 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black uppercase text-slate-700">Custom Social Share Image URL</label>
                        <input
                          type="text"
                          placeholder="Defaults to cover image"
                          value={formData.seo.ogImage || ""}
                          onChange={(e) => setFormData({
                            ...formData,
                            seo: { ...formData.seo, ogImage: e.target.value }
                          })}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-900 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Footer / Multi-Step Navigation Bar */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <div>
                  {activeTab === "general" ? (
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold text-xs transition-colors"
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        if (activeTab === "content") setActiveTab("general");
                        else if (activeTab === "faqs") setActiveTab("content");
                        else if (activeTab === "seo") setActiveTab("faqs");
                      }}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <ArrowLeft size={14} />
                      <span>
                        {activeTab === "content" && "Back: General & Cover"}
                        {activeTab === "faqs" && "Back: Content & Tables"}
                        {activeTab === "seo" && "Back: FAQs"}
                      </span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {activeTab !== "seo" ? (
                    <button
                      type="button"
                      key="next-btn"
                      onClick={handleNextStep}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                    >
                      <span>
                        {activeTab === "general" && "Next: Content & Tables"}
                        {activeTab === "content" && "Next: FAQs"}
                        {activeTab === "faqs" && "Next: SEO & Social Meta"}
                      </span>
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      key="submit-btn"
                      disabled={isSubmitting || !submitReady}
                      className="px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-600/25 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Saving Article...</span>
                      ) : (
                        <>
                          <Save size={16} />
                          <span>{initialData ? "Save & Update Article" : "Publish Article"}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
