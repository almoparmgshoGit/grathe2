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
  User,
  Phone,
  Calendar,
  Globe2,
  Sun,
  Moon,
} from "lucide-react";

export default function SignupPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "male",
    country: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
      title: "إنشاء حساب جديد",
      desc: "أنشئ حسابك الانضمام إلى البرنامج الشرعي العام وابدأ رحلتك في طلب العلوم الشرعية.",
      firstNameLabel: "الاسم الأول",
      firstNamePlaceholder: "محمد",
      lastNameLabel: "الاسم الثاني (العائلة)",
      lastNamePlaceholder: "الأحمد",
      ageLabel: "العمر",
      agePlaceholder: "25",
      genderLabel: "الجنس",
      genders: [
        { value: "male", label: "ذكر" },
        { value: "female", label: "أنثى" },
      ],
      countryLabel: "الدولة",
      countryPlaceholder: "المملكة الأردنية الهاشمية",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "+962 7XXXXXXXX",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "name@example.com",
      passwordLabel: "كلمة المرور",
      passwordPlaceholder: "••••••••",
      confirmPasswordLabel: "تأكيد كلمة المرور",
      confirmPasswordPlaceholder: "••••••••",
      submitBtn: "إنشاء الحساب",
      loadingBtn: "جاري إنشاء الحساب...",
      hasAccount: "لديك حساب بالفعل؟",
      loginLink: "تسجيل الدخول",
      successMsg: "تم إنشاء الحساب بنجاح! نرحب بك في أكاديمية غراس.",
      errorMatch: "كلمتا المرور غير متطابقتين.",
      errorFields: "يرجى ملء جميع الحقول الإلزامية.",
      backHome: "العودة للرئيسية",
    },
    en: {
      brand: "Al-Ghiras Academy",
      subtitle: "General Sharia Program",
      title: "Create New Account",
      desc: "Register to join the General Sharia Program and start your journey in Islamic learning.",
      firstNameLabel: "First Name",
      firstNamePlaceholder: "Mohammed",
      lastNameLabel: "Last Name",
      lastNamePlaceholder: "Al-Ahmed",
      ageLabel: "Age",
      agePlaceholder: "25",
      genderLabel: "Gender",
      genders: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
      countryLabel: "Country",
      countryPlaceholder: "Jordan",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+962 7XXXXXXXX",
      emailLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "••••••••",
      confirmPasswordLabel: "Confirm Password",
      confirmPasswordPlaceholder: "••••••••",
      submitBtn: "Create Account",
      loadingBtn: "Creating account...",
      hasAccount: "Already have an account?",
      loginLink: "Sign In",
      successMsg: "Account created successfully! Welcome to Al-Ghiras Academy.",
      errorMatch: "Passwords do not match.",
      errorFields: "Please fill in all required fields.",
      backHome: "Back to Home",
    },
  }[lang];

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError(t.errorFields);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError(t.errorMatch);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1400);
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

      {/* Main Signup Form Container */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex items-center justify-center">
        <div className="w-full bg-white dark:bg-[#111c2e] rounded-[28px] card-shadow p-8 sm:p-12 border border-slate-200 dark:border-slate-800 transition-colors duration-300">
          {isSuccess ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#15825f]/10 text-[#15825f] flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-[#18322f] dark:text-white">
                {t.successMsg}
              </h3>
              <div className="pt-4">
                <a
                  href="/login"
                  className="px-6 py-3 rounded-sm bg-[#1e3a5f] dark:bg-teal-700 text-white font-semibold text-sm hover:bg-[#15294a] transition-all"
                >
                  {t.loginLink}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="text-center max-w-lg mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#18322f] dark:text-white tracking-tight mb-2">
                  {t.title}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {t.desc}
                </p>
              </div>

              {error && (
                <div className="p-3 rounded-sm bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs flex items-center gap-2 max-w-lg mx-auto">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {/* First Name */}
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300">
                    {t.firstNameLabel} *
                  </label>
                  <div className="relative rounded-sm field-focus border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder={t.firstNamePlaceholder}
                      className="w-full bg-transparent py-3 ps-10 pe-4 text-sm text-slate-900 dark:text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300">
                    {t.lastNameLabel} *
                  </label>
                  <div className="relative rounded-sm field-focus border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder={t.lastNamePlaceholder}
                      className="w-full bg-transparent py-3 ps-10 pe-4 text-sm text-slate-900 dark:text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Age */}
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300">
                    {t.ageLabel}
                  </label>
                  <div className="relative rounded-sm field-focus border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </span>
                    <input
                      type="number"
                      min="10"
                      max="100"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder={t.agePlaceholder}
                      className="w-full bg-transparent py-3 ps-10 pe-4 text-sm text-slate-900 dark:text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300">
                    {t.genderLabel}
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full rounded-sm border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-800 field-focus"
                  >
                    {t.genders.map((g) => (
                      <option key={g.value} value={g.value} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                        {g.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Country */}
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300">
                    {t.countryLabel}
                  </label>
                  <div className="relative rounded-sm field-focus border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                      <Globe2 className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder={t.countryPlaceholder}
                      className="w-full bg-transparent py-3 ps-10 pe-4 text-sm text-slate-900 dark:text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300">
                    {t.phoneLabel}
                  </label>
                  <div className="relative rounded-sm field-focus border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.phonePlaceholder}
                      className="w-full bg-transparent py-3 ps-10 pe-4 text-sm text-slate-900 dark:text-white focus:outline-none text-left"
                    />
                  </div>
                </div>

                {/* Email (Full width in grid) */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300" dir={lang === "en" ? "ltr" : "rtl"}>
                    {t.emailLabel} *
                  </label>
                  <div className="relative rounded-sm field-focus border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      dir="ltr"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.emailPlaceholder}
                      className="w-full bg-transparent py-3 ps-10 pe-4 text-sm text-slate-900 dark:text-white focus:outline-none text-left"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300">
                    {t.passwordLabel} *
                  </label>
                  <div className="relative rounded-sm field-focus border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      dir="ltr"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

                {/* Confirm Password */}
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300">
                    {t.confirmPasswordLabel} *
                  </label>
                  <div className="relative rounded-sm field-focus border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
                    <span className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      dir="ltr"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder={t.confirmPasswordPlaceholder}
                      className="w-full bg-transparent py-3 ps-10 pe-10 text-sm text-slate-900 dark:text-white focus:outline-none text-left"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 end-0 flex items-center pe-3.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="max-w-2xl mx-auto pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-sm bg-gradient-to-r from-[#15825f] to-[#3a4778] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t.loadingBtn}</span>
                    </>
                  ) : (
                    <span>{t.submitBtn}</span>
                  )}
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center pt-2">
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {t.hasAccount}{" "}
                  <a href="/login" className="font-semibold text-[#0f766e] dark:text-teal-400 hover:underline">
                    {t.loginLink}
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <p>© 2026 {t.brand} - {t.subtitle}. All rights reserved.</p>
      </footer>
    </div>
  );
}
