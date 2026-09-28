"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, getAdminUser, RoleType, hasRole, normalizeRole, logoutAdmin } from "@/app/config/auth";
import { RefreshCw, Lock, ShieldAlert, ArrowRight, LogOut } from "lucide-react";
import Link from "next/link";

interface AdminGuardProps {
  children: React.ReactNode;
  allowedRoles?: RoleType[];
}

export function AdminGuard({ children, allowedRoles }: AdminGuardProps) {
  const [mounted, setMounted] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [hasPermission, setHasPermission] = useState(true);
  const [checking, setChecking] = useState(true);
  const [userRole, setUserRole] = useState<RoleType>("Admin");
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    if (!isAuthenticated()) {
      router.replace("/login");
      setChecking(false);
      return;
    }

    const user = getAdminUser();
    const cleanRole = normalizeRole(user?.role);
    setUserRole(cleanRole);

    // Super Admin / Admin role has universal bypass to all modules
    if (cleanRole === "Admin") {
      setHasPermission(true);
    } else if (allowedRoles && allowedRoles.length > 0) {
      const allowed = hasRole(allowedRoles);
      setHasPermission(allowed);
    } else {
      setHasPermission(true);
    }

    setAuthorized(true);
    setChecking(false);
  }, [router, allowedRoles]);

  if (!mounted || checking || !authorized) {
    return (
      <div suppressHydrationWarning className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-4">
        <div suppressHydrationWarning className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4 animate-bounce">
          <Lock size={24} />
        </div>
        <div suppressHydrationWarning className="flex items-center gap-2 font-black text-sm text-slate-300">
          <RefreshCw size={16} className="animate-spin text-emerald-500" />
          <span>Verifying 2FA Session & Role Permissions...</span>
        </div>
      </div>
    );
  }

  // Role Mismatch (Access Forbidden)
  if (!hasPermission) {
    const targetUrl = userRole === "Blog" ? "/admin/blogs" : userRole === "Sales" ? "/admin/inquiries" : "/admin";
    const targetLabel = userRole === "Blog" ? "Blog CMS" : userRole === "Sales" ? "Sales Inquiries" : "Dashboard";

    const handleReLogin = () => {
      logoutAdmin();
      router.replace("/login");
    };

    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mb-6 shadow-xl">
          <ShieldAlert size={32} />
        </div>
        <h2 className="text-2xl font-black text-white mb-2">Access Restricted by Role</h2>
        <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
          You are signed in as <strong className="text-emerald-400 uppercase font-bold">{userRole}</strong>. This module is restricted to <strong>{allowedRoles?.join(", ")}</strong> personnel only.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={targetUrl}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-900/40"
          >
            <span>Return to {targetLabel}</span>
            <ArrowRight size={14} />
          </Link>
          <button
            onClick={handleReLogin}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all border border-slate-700 cursor-pointer"
          >
            <LogOut size={14} />
            <span>Switch Account / Re-login</span>
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
