"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Globe,
  ArrowLeft,
  ArrowRight,
  Share2,
  Video,
  MessageSquare,
  AlertCircle,
  Loader2,
  ExternalLink,
  Sun,
  Moon,
  Bot,
  HelpCircle,
  Wrench,
} from "lucide-react";

export default function ContactUsPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [darkMode, setDarkMode] = useState(false);
  const [subjectType, setSubjectType] = useState<"inquiry" | "support" | "other">("inquiry");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const content = {
    ar: {
      nav: {
        about: "عن الأكاديمية",
        contact: "اتصل بنا",
        home: "الرئيسية",
      },
      header: {
        title: "اتصل بنا",
        desc: "تواصل معنا مباشرة عبر قنوات التواصل الاجتماعي أو بوتات الخدمة السريعة للرد على استفساراتكم ودعمكم الفني.",
      },
      form: {
        nameLabel: "الاسم الكامل *",
        namePlaceholder: "أدخل اسمك الكامل",
        emailLabel: "البريد الإلكتروني *",
        emailPlaceholder: "name@example.com",
        messageLabel: "الرسالة *",
        messagePlaceholder: "اكتب رسالتك أو ملاحظتك هنا...",
        submitBtn: "إرسال الرسالة",
        sendingBtn: "جاري الإرسال...",
        successTitle: "تم إرسال رسالتك بنجاح!",
        successDesc: "شكراً لتواصلك معنا! سنرد عليك خلال ٢٤ ساعة.",
        sendAnother: "إرسال رسالة أخرى",
        errors: {
          name: "يرجى إدخال الاسم الكامل",
          email: "يرجى إدخال بريد إلكتروني صحيح",
          message: "يرجى إدخال محتوى الرسالة",
        },
      },
      bots: {
        inquiryTitle: "بوت الاستفسارات الآلي",
        inquiryDesc: "للحصول على ردود فورية حول البرامج، المقررات، ومواعيد التسجيل، يرجى الانتقال إلى بوت الاستفسارات الخاص بنا.",
        inquiryBtn: "الانتقال إلى بوت الاستفسارات",
        supportTitle: "بوت الدعم الفني",
        supportDesc: "تواجه مشكلة تقنية في المنصة أو في الدخول لحسابك؟ تواصل مباشرة مع بوت الدعم الفني لحل المشكلة فورا.",
        supportBtn: "الانتقال إلى بوت الدعم الفني",
      },
      info: {
        title: "معلومات التواصل المباشر",
        subtitle: "تستطيع مراسلتنا أو متابعتنا عبر القنوات الرسمية التالية",
        emailLabel: "البريد الإلكتروني الرسمي",
        emailValue: "info@ghirasacademy.com",
        hoursLabel: "ساعات العمل الرسمية",
        hoursValue: "الأحد – الخميس: ٩:٠٠ صباحاً – ٦:٠٠ مساءً",
      },
      social: {
        title: "صفحات التواصل الاجتماعي",
        subtitle: "تابعنا على منصاتنا الرسمية لبث المحتوى العلمي والأخبار",
      },
    },
    en: {
      nav: {
        about: "About Academy",
        contact: "Contact Us",
        home: "Home",
      },
      header: {
        title: "Contact Us",
        desc: "Reach out to us directly through social media channels or quick service bots for inquiries and technical support.",
      },
      form: {
        nameLabel: "Full Name *",
        namePlaceholder: "Enter your full name",
        emailLabel: "Email Address *",
        emailPlaceholder: "name@example.com",
        messageLabel: "Message *",
        messagePlaceholder: "Type your message or feedback here...",
        submitBtn: "Send Message",
        sendingBtn: "Sending...",
        successTitle: "Message Sent Successfully!",
        successDesc: "Thank you for contacting us! We will get back to you within 24 hours.",
        sendAnother: "Send Another Message",
        errors: {
          name: "Please enter your full name",
          email: "Please enter a valid email address",
          message: "Please enter your message content",
        },
      },
      bots: {
        inquiryTitle: "Automated Inquiry Bot",
        inquiryDesc: "For instant answers regarding programs, courses, and schedules, please switch to our dedicated inquiry bot.",
        inquiryBtn: "Open Inquiry Bot",
        supportTitle: "Technical Support Bot",
        supportDesc: "Facing technical issues on the platform or logging in? Connect directly with our support bot for immediate assistance.",
        supportBtn: "Open Support Bot",
      },
      info: {
        title: "Direct Contact Info",
        subtitle: "You can email us or follow our official channels",
        emailLabel: "Official Email Address",
        emailValue: "info@ghirasacademy.com",
        hoursLabel: "Working Hours",
        hoursValue: "Sunday – Thursday: 9:00 AM – 6:00 PM",
      },
      social: {
        title: "Social Media Pages",
        subtitle: "Follow our official platforms for scholarly content and updates",
      },
    },
  };

  const t = content[lang];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = t.form.errors.name;
    if (!formData.email.trim() || !formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = t.form.errors.email;
    }
    if (!formData.message.trim()) newErrors.message = t.form.errors.message;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className={`min-h-screen bg-[#f7f8f4] dark:bg-[#09111e] text-[#18322f] dark:text-slate-100 font-sans transition-colors duration-300 ${lang === "en" ? "ltr" : "rtl"}`} dir={lang === "en" ? "ltr" : "rtl"}>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#111c2e]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="شعار أكاديمية غراس" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-bold text-lg sm:text-xl text-[#1e3a5f] dark:text-white tracking-tight block">
                {lang === "ar" ? "أكاديمية غراس" : "Al-Ghiras Academy"}
              </span>
              <span className="text-[11px] text-[#0f766e] dark:text-teal-400 font-semibold block tracking-wide">
                {lang === "ar" ? "البرنامج الشرعي العام" : "General Sharia Program"}
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#1e3a5f]" />}
            </button>

            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="px-3 py-1.5 rounded-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-[#0f766e] dark:text-teal-400" />
              {lang === "ar" ? "English" : "العربية"}
            </button>
            <a
              href="/"
              className="px-4 py-2 rounded-sm bg-[#1e3a5f] dark:bg-teal-700 text-white text-xs font-semibold hover:bg-[#15294a] dark:hover:bg-teal-600 transition-all shadow-sm flex items-center gap-1.5"
            >
              {lang === "ar" ? "العودة للرئيسية" : "Back to Home"}
            </a>
          </div>
        </div>
      </header>

      {/* Header Section */}
      <section className="hero-gradient text-white py-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-white p-2 border border-white/30 shadow-xl flex items-center justify-center">
            <img src="/logo.png" alt="شعار غراس" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {t.header.title}
          </h1>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto font-light">
            {t.header.desc}
          </p>
        </div>
      </section>

      {/* Main Content: Split Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Inquiry / Support / Message Section (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111c2e] rounded-2xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 card-shadow transition-colors duration-300 space-y-6">

            {/* Subject Type Selector */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#18322f] dark:text-white">
                {lang === "ar" ? "اختر طبيعة التواصل:" : "Select Contact Type:"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSubjectType("inquiry")}
                  className={`p-3 rounded-sm border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    subjectType === "inquiry"
                      ? "bg-[#0f766e] text-white border-[#0f766e] shadow-sm"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>{lang === "ar" ? "استفسار عام" : "General Inquiry"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSubjectType("support")}
                  className={`p-3 rounded-sm border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    subjectType === "support"
                      ? "bg-[#1e3a5f] text-white border-[#1e3a5f] shadow-sm"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Wrench className="w-4 h-4" />
                  <span>{lang === "ar" ? "دعم فني" : "Tech Support"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSubjectType("other")}
                  className={`p-3 rounded-sm border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    subjectType === "other"
                      ? "bg-[#e09f3e] text-[#18322f] border-[#e09f3e] shadow-sm"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === "ar" ? "ملاحظات أخرى" : "Feedback"}</span>
                </button>
              </div>
            </div>

            {/* If General Inquiry selected -> Redirect to Inquiry Bot */}
            {subjectType === "inquiry" && (
              <div className="bg-[#0f766e]/10 dark:bg-teal-950/40 border border-[#0f766e]/30 rounded-xl p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0f766e] text-white flex items-center justify-center shadow-md">
                  <Bot className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#18322f] dark:text-white">
                    {t.bots.inquiryTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    {t.bots.inquiryDesc}
                  </p>
                </div>
                <a
                  href="https://t.me/ghiras_inquiry_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-[#0f766e] hover:bg-[#063b39] text-white font-semibold text-sm transition-all shadow-lg"
                >
                  <span>{t.bots.inquiryBtn}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* If Tech Support selected -> Redirect to Support Bot */}
            {subjectType === "support" && (
              <div className="bg-[#1e3a5f]/10 dark:bg-indigo-950/40 border border-[#1e3a5f]/30 rounded-xl p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#1e3a5f] text-white flex items-center justify-center shadow-md">
                  <Wrench className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#18322f] dark:text-white">
                    {t.bots.supportTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    {t.bots.supportDesc}
                  </p>
                </div>
                <a
                  href="https://t.me/ghiras_support_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-[#1e3a5f] hover:bg-[#15294a] text-white font-semibold text-sm transition-all shadow-lg"
                >
                  <span>{t.bots.supportBtn}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* If Feedback/Other selected -> Show Contact Form with Textarea */}
            {subjectType === "other" && (
              <div>
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#15825f]/10 text-[#15825f] flex items-center justify-center animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-[#18322f] dark:text-white">
                      {t.form.successTitle}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm">
                      {t.form.successDesc}
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: "", email: "", message: "", honeypot: "" });
                      }}
                      className="px-6 py-2.5 rounded-sm bg-[#1e3a5f] dark:bg-teal-700 text-white font-semibold text-xs hover:bg-[#15294a] transition-all"
                    >
                      {t.form.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-[#18322f] dark:text-white">
                      {lang === "ar" ? "إرسال ملاحظة أو رسالة" : "Send Feedback or Message"}
                    </h3>

                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-1">
                          {t.form.nameLabel}
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: "" });
                          }}
                          placeholder={t.form.namePlaceholder}
                          className={`w-full rounded-sm border px-3.5 py-2.5 text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-800 field-focus transition-all ${
                            errors.fullName ? "border-red-500" : "border-slate-300 dark:border-slate-700"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-1" dir={lang === "en" ? "ltr" : "rtl"}>
                          {t.form.emailLabel}
                        </label>
                        <input
                          type="email"
                          dir="ltr"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          placeholder={t.form.emailPlaceholder}
                          className={`w-full rounded-sm border px-3.5 py-2.5 text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-800 field-focus transition-all text-left ${
                            errors.email ? "border-red-500" : "border-slate-300 dark:border-slate-700"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-1">
                        {t.form.messageLabel}
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        placeholder={t.form.messagePlaceholder}
                        className={`w-full rounded-sm border px-3.5 py-2.5 text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-800 field-focus transition-all ${
                          errors.message ? "border-red-500" : "border-slate-300 dark:border-slate-700"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-sm bg-gradient-to-r from-[#15825f] to-[#3a4778] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t.form.sendingBtn}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.form.submitBtn}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

          </div>

          {/* Contact Information & Social (5 cols) */}
          <div className="lg:col-span-5 space-y-8">

            {/* Direct Email & Hours */}
            <div className="bg-white dark:bg-[#111c2e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 card-shadow space-y-6 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#18322f] dark:text-white">
                {t.info.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t.info.subtitle}
              </p>

              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0f766e]/10 dark:bg-teal-900/40 text-[#0f766e] dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      {t.info.emailLabel}
                    </span>
                    <a
                      href={`mailto:${t.info.emailValue}`}
                      className="text-sm font-bold text-[#1e3a5f] dark:text-teal-300 hover:underline"
                      dir="ltr"
                    >
                      {t.info.emailValue}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1e3a5f]/10 dark:bg-indigo-900/40 text-[#1e3a5f] dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      {t.info.hoursLabel}
                    </span>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {t.info.hoursValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white dark:bg-[#111c2e] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 card-shadow space-y-6 transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#18322f] dark:text-white">
                {t.social.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t.social.subtitle}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all group"
                >
                  <svg className="w-6 h-6 text-red-600 dark:text-rose-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-xs font-medium dark:text-slate-300">YouTube</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] transition-all group"
                >
                  <svg className="w-6 h-6 text-[#1e3a5f] dark:text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-xs font-medium dark:text-slate-300">Facebook</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group"
                >
                  <svg className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span className="text-xs font-medium dark:text-slate-300">TikTok</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-[#bc4749] hover:text-white hover:border-[#bc4749] transition-all group"
                >
                  <svg className="w-6 h-6 text-[#bc4749] dark:text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-xs font-medium dark:text-slate-300">Instagram</span>
                </a>

                {/* Telegram */}
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all group col-span-2 sm:col-span-1"
                >
                  <svg className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.119.098.152.228.163.33.016.116.033.378.016.586z"/>
                  </svg>
                  <span className="text-xs font-medium dark:text-slate-300">Telegram</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#18322f] dark:bg-[#070d17] text-white/70 py-12 border-t border-[#063b39] dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 p-1 flex items-center justify-center shadow-sm">
              <img src="/logo.png" alt="شعار" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-bold text-white text-base">
                {lang === "ar" ? "أكاديمية غراس - البرنامج الشرعي العام" : "Al-Ghiras Academy - General Sharia Program"}
              </span>
              <p className="text-xs text-white/50">
                {lang === "ar" ? "أكاديمية تعليمية أصيلة لعلوم الشريعة" : "Authentic Islamic Educational Academy"}
              </p>
            </div>
          </div>
          <p className="text-xs text-white/60 text-center">
            {lang === "ar" ? "© 2026 أكاديمية غراس. جميع الحقوق محفوظة." : "© 2026 Al-Ghiras Academy. All rights reserved."}
          </p>
          <div className="flex items-center gap-6 text-xs text-white/80">
            <a href="/" className="hover:text-white transition-colors">
              {lang === "ar" ? "عن الأكاديمية" : "About Academy"}
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              {lang === "ar" ? "اتصل بنا" : "Contact Us"}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
