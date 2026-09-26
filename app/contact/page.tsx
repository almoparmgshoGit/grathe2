"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
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
} from "lucide-react";

export default function ContactUsPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "general",
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
        desc: "نحن سعداء بسماعك! تواصل معنا لأي أسئلة أو ملاحظات أو استفسارات بخصوص البرنامج الشرعي العام.",
      },
      form: {
        nameLabel: "الاسم الكامل *",
        namePlaceholder: "أدخل اسمك الكامل",
        emailLabel: "البريد الإلكتروني *",
        emailPlaceholder: "name@example.com",
        phoneLabel: "رقم الهاتف (اختياري)",
        phonePlaceholder: "+962 7XXXXXXXX",
        subjectLabel: "موضوع الاستفسار *",
        subjects: [
          { value: "general", label: "استفسار عام" },
          { value: "support", label: "دعم فني وتطبيقي" },
          { value: "partnership", label: "شراكة وتبرع" },
          { value: "feedback", label: "ملاحظات واقتراحات" },
          { value: "other", label: "أخرى" },
        ],
        messageLabel: "الرسالة *",
        messagePlaceholder: "اكتب رسالتك أو استفسارك هنا بالتفصيل...",
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
      info: {
        title: "معلومات الاتصال",
        subtitle: "تستطيع التواصل معنا مباشرة عبر القنوات التالية",
        emailLabel: "البريد الإلكتروني",
        emailValue: "info@ghirasacademy.com",
        phoneLabel: "رقم الهاتف",
        phoneValue: "+962 7 1234 5678",
        addressLabel: "العنوان الفعلي",
        addressValue: "عمان، الأردن - شارع الملك عبدالله الثاني",
        hoursLabel: "ساعات العمل الرسمية",
        hoursValue: "الأحد – الخميس: ٩:٠٠ صباحاً – ٦:٠٠ مساءً",
        mapTitle: "موقعنا على الخريطة",
        directionsBtn: "احصل على الاتجاهات",
      },
      social: {
        title: "تابعنا على منصات التواصل",
        subtitle: "ابق على اطلاع بآخر المستجدات والمحتوى العلمي",
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
        desc: "We'd love to hear from you! Reach out with any questions, feedback, or inquiries regarding the General Sharia Program.",
      },
      form: {
        nameLabel: "Full Name *",
        namePlaceholder: "Enter your full name",
        emailLabel: "Email Address *",
        emailPlaceholder: "name@example.com",
        phoneLabel: "Phone Number (Optional)",
        phonePlaceholder: "+962 7XXXXXXXX",
        subjectLabel: "Subject *",
        subjects: [
          { value: "general", label: "General Inquiry" },
          { value: "support", label: "Support" },
          { value: "partnership", label: "Partnership" },
          { value: "feedback", label: "Feedback" },
          { value: "other", label: "Other" },
        ],
        messageLabel: "Message *",
        messagePlaceholder: "Type your message or inquiry here in detail...",
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
      info: {
        title: "Contact Information",
        subtitle: "You can reach us directly through the following channels",
        emailLabel: "Email Address",
        emailValue: "info@ghirasacademy.com",
        phoneLabel: "Phone Number",
        phoneValue: "+962 7 1234 5678",
        addressLabel: "Physical Address",
        addressValue: "Amman, Jordan - King Abdullah II Street",
        hoursLabel: "Working Hours",
        hoursValue: "Sunday – Thursday: 9:00 AM – 6:00 PM",
        mapTitle: "Our Location on Map",
        directionsBtn: "Get Directions",
      },
      social: {
        title: "Connect on Social Media",
        subtitle: "Stay updated with our latest news and scholarly content",
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

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111c2e] rounded-[28px] p-8 sm:p-10 border border-slate-200 dark:border-slate-800 card-shadow transition-colors duration-300">
            {isSubmitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#15825f]/10 text-[#15825f] flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-[#18322f] dark:text-white">
                  {t.form.successTitle}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-base">
                  {t.form.successDesc}
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: "", email: "", phone: "", subject: "general", message: "", honeypot: "" });
                  }}
                  className="px-6 py-3 rounded-sm bg-[#1e3a5f] dark:bg-teal-700 text-white font-semibold text-sm hover:bg-[#15294a] transition-all"
                >
                  {t.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-[#18322f] dark:text-white mb-2">
                  {lang === "ar" ? "أرسل لنا استفسارك" : "Send Us Your Inquiry"}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  {lang === "ar" ? "املأ النموذج أدناه وسيقوم فريقنا بالرد عليك في أقرب وقت." : "Fill out the form below and our team will get back to you shortly."}
                </p>

                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-1.5">
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
                      className={`w-full rounded-sm border px-4 py-3 text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-800 field-focus transition-all ${
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
                    <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-1.5" dir={lang === "en" ? "ltr" : "rtl"}>
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
                      className={`w-full rounded-sm border px-4 py-3 text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-800 field-focus transition-all text-left ${
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.form.phonePlaceholder}
                      className="w-full rounded-sm border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-800 field-focus text-left transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.form.subjectLabel}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-sm border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-800 field-focus transition-all"
                    >
                      {t.form.subjects.map((sub) => (
                        <option key={sub.value} value={sub.value} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                          {sub.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.form.messageLabel}
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder={t.form.messagePlaceholder}
                    className={`w-full rounded-sm border px-4 py-3 text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-800 field-focus transition-all ${
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
                  className="w-full py-4 rounded-sm bg-gradient-to-r from-[#15825f] to-[#3a4778] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
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

          {/* Contact Information & Social (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-[#111c2e] rounded-[28px] p-8 border border-slate-200 dark:border-slate-800 card-shadow space-y-6 transition-colors duration-300">
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
                  <div className="w-12 h-12 rounded-full bg-[#e09f3e]/10 dark:bg-amber-900/40 text-[#e09f3e] dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      {t.info.phoneLabel}
                    </span>
                    <a
                      href={`tel:${t.info.phoneValue}`}
                      className="text-sm font-bold text-[#1e3a5f] dark:text-amber-300 hover:underline"
                      dir="ltr"
                    >
                      {t.info.phoneValue}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#bc4749]/10 dark:bg-rose-900/40 text-[#bc4749] dark:text-rose-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      {t.info.addressLabel}
                    </span>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {t.info.addressValue}
                    </p>
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
            <div className="bg-white dark:bg-[#111c2e] rounded-[28px] p-8 border border-slate-200 dark:border-slate-800 card-shadow space-y-6 transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#18322f] dark:text-white">
                {t.social.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t.social.subtitle}
              </p>

              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] transition-all group"
                >
                  <Share2 className="w-6 h-6 text-[#1e3a5f] dark:text-slate-300 group-hover:text-white transition-colors" />
                  <span className="text-xs font-medium dark:text-slate-300">Facebook</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-[#bc4749] hover:text-white hover:border-[#bc4749] transition-all group"
                >
                  <Globe className="w-6 h-6 text-[#bc4749] dark:text-slate-300 group-hover:text-white transition-colors" />
                  <span className="text-xs font-medium dark:text-slate-300">Instagram</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-[#0f766e] hover:text-white hover:border-[#0f766e] transition-all group"
                >
                  <ExternalLink className="w-6 h-6 text-[#0f766e] dark:text-slate-300 group-hover:text-white transition-colors" />
                  <span className="text-xs font-medium dark:text-slate-300">LinkedIn</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group"
                >
                  <MessageSquare className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors" />
                  <span className="text-xs font-medium dark:text-slate-300">Twitter/X</span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all group"
                >
                  <Video className="w-6 h-6 text-red-600 dark:text-rose-400 group-hover:text-white transition-colors" />
                  <span className="text-xs font-medium dark:text-slate-300">YouTube</span>
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center gap-2 hover:bg-[#18322f] hover:text-white hover:border-[#18322f] transition-all group"
                >
                  <Send className="w-6 h-6 text-[#18322f] dark:text-slate-300 group-hover:text-white transition-colors" />
                  <span className="text-xs font-medium dark:text-slate-300">TikTok</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Section E – Map / Location */}
        <div className="mt-16 bg-white dark:bg-[#111c2e] rounded-[28px] p-8 border border-slate-200 dark:border-slate-800 card-shadow space-y-6 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-[#18322f] dark:text-white">
                {t.info.mapTitle}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t.info.addressValue}
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Amman+Jordan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#0f766e] dark:bg-teal-700 text-white text-xs font-semibold hover:bg-[#063b39] transition-all shadow-sm"
            >
              <MapPin className="w-4 h-4" />
              {t.info.directionsBtn}
            </a>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 relative">
            <iframe
              title="Academy Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54060.29749132145!2d35.8953186!3d31.953949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x6318c0cd7854b6d2!2sAmman%2C%20Jordan!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
