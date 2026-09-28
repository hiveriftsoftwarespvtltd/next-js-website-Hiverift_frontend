"use client";

import { useEffect, useState } from "react";
import { Menu, ShieldCheck } from "lucide-react";
import { getAdminUser, AdminUser } from "@/app/config/auth";
import Link from "next/link";

interface AdminHeaderProps {
  title?: string;
  subtitle?: string;
  onMenuClick?: () => void;
  onOpenSidebar?: () => void;
}

export function AdminHeader({
  title = "CMS Command Center",
  subtitle = "Dynamic Inquiries, Content Engine & 2FA Security",
  onMenuClick,
  onOpenSidebar,
}: AdminHeaderProps) {
  const [user, setUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    setUser(getAdminUser());
  }, []);

  const handleToggle = onOpenSidebar || onMenuClick;

  const roleBadgeStyles: Record<string, string> = {
    Admin: "bg-emerald-950/80 border-emerald-800 text-emerald-400",
    Sales: "bg-blue-950/80 border-blue-800 text-blue-400",
    Blog: "bg-purple-950/80 border-purple-800 text-purple-400",
  };

  const userRole = user?.role || "Admin";
  const badgeStyle = roleBadgeStyles[userRole] || roleBadgeStyles.Admin;

  return (
    <header className="bg-slate-900/90 border-b border-slate-800/80 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 sticky top-0 z-30 backdrop-blur-md">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Toggle Button */}
        {handleToggle && (
          <button
            onClick={handleToggle}
            className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
            title="Toggle Navigation Menu"
          >
            <Menu size={20} />
          </button>
        )}

        <div>
          <h1 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[11px] font-medium text-slate-400 hidden sm:block">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Connection Status Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded-full text-[11px] font-mono font-bold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>API Connected (200 OK)</span>
        </div>

        {/* User Info Link to Security */}
        <Link
          href="/admin/security"
          className="flex items-center gap-2.5 p-1 sm:pl-3 sm:pr-2 sm:py-1 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
            {user?.name ? user.name.charAt(0).toUpperCase() : "A"}
          </div>
          <div className="hidden md:block text-left">
            <div className="text-xs font-bold text-white leading-tight truncate max-w-[120px]">
              {user?.name || "HiveRift Staff"}
            </div>
            <div className="text-[10px] text-slate-400 font-mono leading-tight">
              {userRole}
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
