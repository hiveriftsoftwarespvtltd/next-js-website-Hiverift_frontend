"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutAdmin, getAdminUser, AdminUser, RoleType, normalizeRole } from "@/app/config/auth";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  ExternalLink,
  LogOut,
  X,
  Inbox,
  Shield,
  UserCheck,
  Sparkles,
  Star,
  Layers,
} from "lucide-react";

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function AdminSidebar({ isOpen = false, onClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    setCurrentUser(getAdminUser());
  }, []);

  const handleLogout = () => {
    logoutAdmin();
    router.push("/login");
  };

  const userRole: RoleType = normalizeRole(currentUser?.role);

  // Build navigation items filtered by RBAC
  const allNavItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      roles: ["Admin", "Sales", "Blog"] as RoleType[],
    },
    {
      name: "Form Inquiries",
      href: "/admin/inquiries",
      icon: Inbox,
      roles: ["Admin", "Sales"] as RoleType[],
      badge: "Leads",
    },
    {
      name: "Blog Posts",
      href: "/admin/blogs",
      icon: FileText,
      roles: ["Admin", "Blog"] as RoleType[],
      badge: "CMS",
    },
    {
      name: "Google Reviews",
      href: "/admin/testimonials",
      icon: Star,
      roles: ["Admin", "Sales"] as RoleType[],
      badge: "4.9 ★",
    },
    {
      name: "Case Studies",
      href: "/admin/case-studies",
      icon: Layers,
      roles: ["Admin", "Sales"] as RoleType[],
      badge: "Portfolio",
    },
    {
      name: userRole === "Admin" ? "Users & Security" : "Account Security",
      href: "/admin/security",
      icon: Shield,
      roles: ["Admin", "Sales", "Blog"] as RoleType[],
    },
    {
      name: "Careers Page",
      href: "/careers",
      icon: Briefcase,
      external: true,
      roles: ["Admin", "Sales", "Blog"] as RoleType[],
    },
    {
      name: "Live Website",
      href: "/",
      icon: ExternalLink,
      external: true,
      roles: ["Admin", "Sales", "Blog"] as RoleType[],
    },
  ];

  const visibleNavItems = allNavItems.filter((item) =>
    item.roles.includes(userRole)
  );

  const roleStyles = {
    Admin: {
      label: "Super Admin",
      badgeClass: "bg-emerald-950/80 border-emerald-800 text-emerald-400",
      avatarClass: "bg-emerald-500 text-slate-950",
    },
    Sales: {
      label: "Sales Team",
      badgeClass: "bg-blue-950/80 border-blue-800 text-blue-400",
      avatarClass: "bg-blue-500 text-white",
    },
    Blog: {
      label: "Blog Team",
      badgeClass: "bg-purple-950/80 border-purple-800 text-purple-400",
      avatarClass: "bg-purple-500 text-white",
    },
  };

  const currentRoleStyle = roleStyles[userRole] || roleStyles.Admin;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`w-64 bg-slate-900 text-slate-300 h-screen flex flex-col justify-between p-4 fixed left-0 top-0 bottom-0 z-50 border-r border-slate-800 transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="space-y-6">
          {/* Brand Header */}
          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black flex items-center justify-center shadow-lg shadow-emerald-900/50">
                H
              </div>
              <div>
                <h1 className="font-black text-white text-lg tracking-tight">HiveRift</h1>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${currentRoleStyle.badgeClass}`}
                >
                  {currentRoleStyle.label}
                </span>
              </div>
            </div>

            {/* Mobile Close Button */}
            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <div className="px-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
              Management Modules
            </div>

            {visibleNavItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  target={item.external ? "_blank" : undefined}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl font-bold text-xs transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40"
                      : "hover:bg-slate-800/80 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {item.badge && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[9px] font-mono text-emerald-400">
                        {item.badge}
                      </span>
                    )}
                    {item.external && <ExternalLink size={13} className="opacity-50" />}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Profile Badge & Logout Footer */}
        <div className="space-y-3 pt-4 border-t border-slate-800/80">
          <div className="bg-slate-800/60 p-3 rounded-2xl flex items-center gap-3 border border-slate-700/60">
            <div
              className={`w-9 h-9 rounded-xl font-black text-xs flex items-center justify-center shrink-0 shadow-md ${currentRoleStyle.avatarClass}`}
            >
              {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="overflow-hidden flex-1 min-w-0">
              <div className="text-xs font-black text-white truncate">
                {currentUser?.name || "HiveRift Staff"}
              </div>
              <div className="text-[10px] text-slate-400 truncate">
                {currentUser?.email || "staff@hiverift.com"}
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold text-rose-400 hover:bg-rose-950/40 border border-transparent hover:border-rose-900/60 rounded-xl transition-all cursor-pointer"
          >
            <LogOut size={15} />
            <span>Sign Out Session</span>
          </button>
        </div>
      </aside>
    </>
  );
}
