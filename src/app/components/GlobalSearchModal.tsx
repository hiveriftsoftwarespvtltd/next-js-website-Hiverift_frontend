"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Code2,
  MapPin,
  Sparkles,
  Command,
  CornerDownLeft,
  CheckCircle2,
  Layers
} from "lucide-react";
import { searchGlobal, GlobalSearchItem } from "@/app/data/globalSearchData";

// Global custom event helpers
export function openGlobalSearch(query: string = "") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-global-search", { detail: { query } })
    );
  }
}

export function closeGlobalSearch() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("close-global-search"));
  }
}

export function GlobalSearchModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Listen to keyboard shortcut (Ctrl+K, Cmd+K, or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in another input/textarea
      const target = e.target as HTMLElement;
      const isInput = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "/" && !isInput && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = (e: any) => {
      setIsOpen(true);
      if (e.detail?.query) {
        setQuery(e.detail.query);
      }
    };

    const handleCustomClose = () => {
      setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-global-search", handleCustomOpen);
    window.addEventListener("close-global-search", handleCustomClose);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-global-search", handleCustomOpen);
      window.removeEventListener("close-global-search", handleCustomClose);
    };
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const rawResults = searchGlobal(query);
  const results = activeCategory === "All"
    ? rawResults
    : rawResults.filter((item) => item.category === activeCategory);

  // Keyboard navigation within list
  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && results.length > 0) {
      e.preventDefault();
      const targetItem = results[selectedIndex] || results[0];
      if (targetItem) {
        setIsOpen(false);
        router.push(targetItem.url);
      }
    }
  };

  const getCategoryIcon = (cat: GlobalSearchItem["category"]) => {
    switch (cat) {
      case "Keyword":
        return <Search size={14} className="text-emerald-600" />;
      case "Industry":
        return <Building2 size={14} className="text-teal-600" />;
      case "Service":
        return <Code2 size={14} className="text-blue-600" />;
      case "Location":
        return <MapPin size={14} className="text-amber-600" />;
      default:
        return <Sparkles size={14} className="text-emerald-600" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      {/* Click outside backdrop */}
      <div
        className="fixed inset-0 -z-10"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[82vh] transition-all"
        onKeyDown={handleListKeyDown}
      >
        {/* Search Header Bar (Matches User Screenshot) */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3 bg-gradient-to-b from-[#f8fdfa] to-white">
          <div className="relative flex-1 flex items-center">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Filter keywords (e.g. Delhi, Portal, App)..."
              className="w-full pl-10 pr-24 py-3 text-sm sm:text-base rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all placeholder:text-slate-400 text-slate-900 font-medium"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
              >
                <X size={15} />
              </button>
            ) : (
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                <span>ESC to close</span>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              if (results.length > 0) {
                const target = results[selectedIndex] || results[0];
                setIsOpen(false);
                router.push(target.url);
              }
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-xs shadow-md shadow-emerald-600/20 transition-all shrink-0 cursor-pointer"
          >
            <span>Search</span>
            <CornerDownLeft size={13} />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="sm:hidden p-2 text-slate-400 hover:text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Category Tabs & Quick Suggestions */}
        <div className="px-4 py-2.5 bg-[#fafcfb] border-b border-slate-100 flex items-center justify-between gap-2 overflow-x-auto text-xs">
          <div className="flex items-center gap-1.5 shrink-0">
            {["All", "Keyword", "Service", "Industry", "Location"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white shadow-2xs"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat === "Keyword" ? "Keywords" : cat === "Service" ? "Services" : cat === "Industry" ? "Industries" : cat === "Location" ? "Locations" : "All"}
              </button>
            ))}
          </div>

          <span className="text-[11px] text-slate-400 shrink-0 hidden md:inline">
            {results.length} matches
          </span>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-1.5 flex-1 max-h-[52vh]">
          {results.length > 0 ? (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full p-3 rounded-2xl flex items-center justify-between gap-3 transition-all text-left ${
                    isSelected
                      ? "bg-emerald-50 border border-emerald-300 shadow-2xs"
                      : "hover:bg-slate-50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? "bg-white border-emerald-300 text-emerald-700"
                          : "bg-slate-100 border-slate-200 text-slate-500"
                      }`}
                    >
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900 truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full shrink-0">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-xs text-emerald-700 font-bold opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                      View
                    </span>
                    <ArrowUpRight
                      size={15}
                      className={isSelected ? "text-emerald-700" : "text-slate-400"}
                    />
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="text-center py-12 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-800">
                No solutions found matching "{query}"
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching for "Real Estate", "FinTech", "CRM", "SaaS", "Delhi", "Shopify", or "Hospital".
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Hotkeys & Quick Suggestions */}
        <div className="px-5 py-3 border-t border-slate-100 bg-[#fafcfb] flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Quick Searches:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {["FinTech", "Real Estate", "SaaS", "Delhi", "CRM", "POS"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setQuery(tag)}
                  className="px-2 py-0.5 bg-white border border-slate-200 hover:border-emerald-400 hover:text-emerald-800 rounded-md font-medium transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3 font-mono text-[10px]">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
