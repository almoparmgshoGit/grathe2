"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Globe,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sun,
  Moon,
} from "lucide-react";

export default function LoginPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("ghiras_theme") === "dark";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("ghiras_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("ghiras_theme", "light");
    }
  };

  const t = {
    ar: {
      brand: "أكاديمية غراس",
      subtitle: "البرنامج الشرعي العام",
      title: "تسجيل الدخول لحسابك",
      desc: "أدخل بريدك الإلكتروني وكلمة المرور للوصول إلى مقرراتك وبرامجك الشرعية.",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "name@example.com",
      passwordLabel: "كلمة المرور",
      passwordPlaceholder: "••••••••",
      rememberMe: "تذكرني",
      forgotPassword: "نسيت كلمة المرور؟",
      submitBtn: "تسجيل الدخول",
      loadingBtn: "جاري تسجيل الدخول...",
      noAccount: "ليس لديك حساب؟",
      signupLink: "إنشاء حساب جديد",
      successMsg: "تم تسجيل الدخول بنجاح! جاري تحويلك...",
      errorMsg: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
      backHome: "العودة للرئيسية",
    },
    en: {
      brand: "Al-Ghiras Academy",
      subtitle: "General Sharia Program",
      title: "Sign in to your account",
      desc: "Enter your email and password to access your courses and Sharia programs.",
      emailLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "••••••••",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      submitBtn: "Sign In",
      loadingBtn: "Signing in...",
      noAccount: "Don't have an account?",
      signupLink: "Create new account",
      successMsg: "Login successful! Redirecting...",
      errorMsg: "Invalid email or password.",
      backHome: "Back to Home",
    },
  }[lang];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError(lang === "ar" ? "يرجى إدخال البريد الإلكتروني وكلمة المرور" : "Please enter email and password");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className={`min-h-screen bg-[#f7f8f4] dark:bg-[#09111e] text-[#18322f] dark:text-slate-100 font-sans flex flex-col justify-between transition-colors duration-300 ${lang === "en" ? "ltr" : "rtl"}`} dir={lang === "en" ? "ltr" : "rtl"}>
      {/* Top Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center overflow-hidden">
            <img src="/logo.png" alt="شعار غراس" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-bold text-base sm:text-lg text-[#1e3a5f] dark:text-white tracking-tight block">
              {t.brand}
            </span>
            <span className="text-[10px] text-[#0f766e] dark:text-teal-400 font-semibold block">
              {t.subtitle}
            </span>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#1e3a5f]" />}
          </button>

          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="px-3 py-1.5 rounded-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-[#0f766e] dark:text-teal-400" />
            {lang === "ar" ? "English" : "العربية"}
          </button>
          <a
            href="/"
            className="text-xs font-semibold text-[#1e3a5f] dark:text-teal-400 hover:underline hidden sm:inline"
          >
            {t.backHome}
          </a>
        </div>
      </div>

      {/* Main Login Card / Grid */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 bg-white dark:bg-[#111c2e] rounded-[28px] card-shadow overflow-hidden border border-slate-200 dark:border-slate-800 transition-colors duration-300">

          {/* Left Hero / Branding Panel (5 cols) */}
          <div className="hidden md:flex md:col-span-5 hero-gradient p-10 text-white flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-16 -end-16 w-64 h-64 rounded-full bg-white/10 blur-xl pointer-events-none" />
            <div className="absolute -bottom-16 -start-16 w-64 h-64 rounded-full bg-[#f5cb5c]/20 blur-xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="inline-block px-3 py-1 rounded-sm bg-white/10 border border-white/30 text-xs font-semibold uppercase tracking-wider">
                {t.subtitle}
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight">
                {lang === "ar" ? "أهلاً بك مجدداً في رحلة العلم" : "Welcome Back to Your Journey"}
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                {lang === "ar" ? "واصل تعلم العلوم الشرعية وفق منهجية أصيلة وميسرة." : "Continue learning authentic Sharia sciences in a structured way."}
              </p>
            </div>

            <div className="relative z-10 pt-12">
              <div className="w-24 h-24 rounded-2xl bg-white p-2 border border-white/30 shadow-xl flex items-center justify-center">
                <img src="/logo.png" alt="الشعار" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Right Form Panel (7 cols) */}
          <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#15825f]/10 text-[#15825f] flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#18322f] dark:text-white">
                  {t.successMsg}
                </h3>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-6 max-w-md mx-auto w-full">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#18322f] dark:text-white">
                    {t.title}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.desc}
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-sm bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Email Field */}
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300">
                    {t.emailLabel}
                  </label>
                  <div className="relative rounded-sm field-focus border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      dir="ltr"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full bg-transparent py-3 ps-10 pe-4 text-sm text-slate-900 dark:text-white focus:outline-none text-left"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300">
                      {t.passwordLabel}
                    </label>
                    <a href="#forgot" className="text-xs text-[#0f766e] dark:text-teal-400 font-semibold hover:underline">
                      {t.forgotPassword}
                    </a>
                  </div>
                  <div className="relative rounded-sm field-focus border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      dir="ltr"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t.passwordPlaceholder}
                      className="w-full bg-transparent py-3 ps-10 pe-10 text-sm text-slate-900 dark:text-white focus:outline-none text-left"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 end-0 flex items-center pe-3.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 dark:text-slate-400">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded-sm border-slate-300 dark:border-slate-700 text-[#1e3a5f] focus:ring-[#1e3a5f] w-4 h-4"
                    />
                    <span>{t.rememberMe}</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-sm bg-gradient-to-r from-[#15825f] to-[#3a4778] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t.loadingBtn}</span>
                    </>
                  ) : (
                    <span>{t.submitBtn}</span>
                  )}
                </button>

                {/* Signup Link */}
                <div className="text-center pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {t.noAccount}{" "}
                    <a href="/signup" className="font-semibold text-[#0f766e] dark:text-teal-400 hover:underline">
                      {t.signupLink}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <p>© 2026 {t.brand} - {t.subtitle}. All rights reserved.</p>
      </footer>
    </div>
  );
}
