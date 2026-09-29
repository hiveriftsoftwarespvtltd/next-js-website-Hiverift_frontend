"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  ArrowLeft,
  KeyRound,
  CheckCircle2,
} from "lucide-react";
import { loginAdminApi, verifyOtpApi, resendOtpApi, isAuthenticated, getAdminUser } from "@/app/config/auth";
import Swal from "sweetalert2";

export default function LoginPage() {
  // Step: "credentials" or "otp"
  const [step, setStep] = useState<"credentials" | "otp">("credentials");

  // Step 1 state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Step 2 (OTP) state
  const [tempToken, setTempToken] = useState("");
  const [targetEmail, setTargetEmail] = useState("hiverift@gmail.com");
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", "", "", ""]);
  const [resendCooldown, setResendCooldown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [isResendingOtp, setIsResendingOtp] = useState(false);

  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      const user = getAdminUser();
      if (user?.role === "Blog") {
        router.replace("/admin/blogs");
      } else {
        router.replace("/admin");
      }
    }
  }, [router]);

  // Resend cooldown timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === "otp" && resendCooldown > 0) {
      timer = setTimeout(() => setResendCooldown((prev) => prev - 1), 1000);
    } else if (resendCooldown === 0) {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [step, resendCooldown]);

  // Step 1: Submit Credentials
  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginAdminApi(email, password);
      if (res.success && res.tempToken) {
        setTempToken(res.tempToken);
        setTargetEmail(res.targetEmail || "hiverift@gmail.com");
        setStep("otp");
        setResendCooldown(60);
        setCanResend(false);
        // Focus first OTP input after render
        setTimeout(() => {
          otpInputRefs.current[0]?.focus();
        }, 150);
      } else {
        setError(res.message || "Invalid credentials.");
      }
    } catch (err: any) {
      setError(err?.message || "Failed to contact auth server.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Handle OTP input changes
  const handleOtpChange = (index: number, value: string) => {
    const cleanValue = value.replace(/[^0-9]/g, "");
    if (!cleanValue) {
      const newOtp = [...otpValues];
      newOtp[index] = "";
      setOtpValues(newOtp);
      return;
    }

    // Single character input
    const newOtp = [...otpValues];
    newOtp[index] = cleanValue.slice(-1);
    setOtpValues(newOtp);

    // Auto-advance
    if (index < 5 && cleanValue) {
      otpInputRefs.current[index + 1]?.focus();
    }

    // Auto submit if all 6 filled
    const fullCode = newOtp.join("");
    if (fullCode.length === 6 && !newOtp.includes("")) {
      handleVerifyOtp(fullCode);
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, 6);
    if (pasted.length > 0) {
      const newOtp = [...otpValues];
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pasted[i] || "";
      }
      setOtpValues(newOtp);
      if (pasted.length === 6) {
        handleVerifyOtp(pasted);
      } else {
        otpInputRefs.current[Math.min(pasted.length, 5)]?.focus();
      }
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (codeToVerify?: string) => {
    const code = codeToVerify || otpValues.join("");
    if (code.length !== 6) {
      setError("Please enter the complete 6-digit OTP code.");
      return;
    }

    setError("");
    setIsVerifyingOtp(true);

    try {
      const res = await verifyOtpApi(tempToken, code);
      if (res.success && res.user) {
        await Swal.fire({
          icon: "success",
          title: "Identity Verified!",
          text: `Welcome back, ${res.user.name} (${res.user.role}). Redirecting to CMS...`,
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
          background: "#0f172a",
          color: "#ffffff",
          iconColor: "#10b981",
        });

        if (res.user.role === "Blog") {
          router.push("/admin/blogs");
        } else {
          router.push("/admin");
        }
      } else {
        setError(res.message || "Invalid or expired OTP code.");
      }
    } catch (err: any) {
      setError(err?.message || "Failed to verify OTP.");
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  // Step 2: Resend OTP
  const handleResendOtp = async () => {
    if (!canResend || isResendingOtp) return;
    setIsResendingOtp(true);
    setError("");

    try {
      const res = await resendOtpApi(tempToken);
      if (res.success) {
        setResendCooldown(60);
        setCanResend(false);
        setOtpValues(["", "", "", "", "", ""]);
        otpInputRefs.current[0]?.focus();
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "New 6-digit OTP sent to hiverift@gmail.com",
          showConfirmButton: false,
          timer: 3000,
          background: "#0f172a",
          color: "#ffffff",
        });
      } else {
        setError(res.message || "Failed to resend code.");
      }
    } catch (err: any) {
      setError(err?.message || "Failed to resend OTP.");
    } finally {
      setIsResendingOtp(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden font-['Roboto',sans-serif]">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md relative z-10">
        <AnimatePresence mode="wait">
          {step === "credentials" ? (
            /* ================= STEP 1: CREDENTIALS ================= */
            <motion.div
              key="step-credentials"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black text-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/50">
                  H
                </div>
                <h1 className="text-2xl font-black text-white tracking-tight">HiveRift CMS</h1>
                <p className="text-xs font-bold text-slate-400 mt-1">
                  Sign in with authorized staff credentials
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded-full text-[11px] font-mono text-emerald-400 mt-3">
                  <ShieldCheck size={13} />
                  <span>2FA OTP Protection Enabled</span>
                </div>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="mb-6 p-4 bg-rose-950/80 border border-rose-800/80 text-rose-200 rounded-2xl text-xs font-bold text-center">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleCredentialsSubmit} className="space-y-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Login ID / Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hiverift@gmail.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all placeholder:text-slate-600"
                    />
                    <Mail size={16} className="absolute left-4 text-slate-500" />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Password
                    </label>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-11 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all placeholder:text-slate-600"
                    />
                    <Lock size={16} className="absolute left-4 text-slate-500" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-slate-500 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={15} className="animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>Continue to 2FA</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </form>

              {/* Roles Quick Preview Note */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 text-center text-[11px] text-slate-500 space-y-1">
                <p>Role-Based Access: Admin, Sales Team & Blog Team</p>
                <p className="text-[10px] text-slate-600">
                  Every sign-in requires OTP confirmation sent to registered mailbox.
                </p>
              </div>
            </motion.div>
          ) : (
            /* ================= STEP 2: 2FA OTP VERIFICATION ================= */
            <motion.div
              key="step-otp"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl"
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/30">
                  <KeyRound size={26} />
                </div>
                <h2 className="text-xl font-black text-white tracking-tight">Two-Factor Authentication</h2>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Enter the 6-digit verification code dispatched to:
                </p>
                <div className="inline-block mt-1 px-3 py-1 bg-emerald-950/80 border border-emerald-800 rounded-lg text-emerald-400 font-mono text-xs font-bold">
                  {targetEmail}
                </div>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="mb-5 p-3.5 bg-rose-950/80 border border-rose-800/80 text-rose-200 rounded-xl text-xs font-bold text-center">
                  {error}
                </div>
              )}

              {/* 6 Digit Inputs */}
              <div className="flex justify-center gap-2 sm:gap-2.5 my-6">
                {otpValues.map((val, idx) => (
                  <input
                    key={idx}
                    ref={(el) => {
                      otpInputRefs.current[idx] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={val}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                    onPaste={idx === 0 ? handleOtpPaste : undefined}
                    className="w-11 h-13 sm:w-12 sm:h-14 bg-slate-950 border border-slate-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 rounded-xl text-center text-xl font-mono font-black text-white outline-none transition-all"
                  />
                ))}
              </div>

              {/* Verify Button */}
              <button
                type="button"
                onClick={() => handleVerifyOtp()}
                disabled={isVerifyingOtp || otpValues.includes("")}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isVerifyingOtp ? (
                  <>
                    <RefreshCw size={15} className="animate-spin" />
                    <span>Verifying Code...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={15} />
                    <span>Authorize Sign-In</span>
                  </>
                )}
              </button>

              {/* Resend OTP & Back */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setStep("credentials");
                    setError("");
                  }}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer font-bold"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Login</span>
                </button>

                <div>
                  {canResend ? (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={isResendingOtp}
                      className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors cursor-pointer"
                    >
                      {isResendingOtp ? "Sending..." : "Resend Code"}
                    </button>
                  ) : (
                    <span className="text-slate-500 font-mono">
                      Resend in {resendCooldown}s
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
