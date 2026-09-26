"use client";

import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Target,
  Compass,
  Sparkles,
  Clock,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  Globe,
  Star,
  CheckCircle2,
  BookMarked,
  Share2,
  Mail,
  ExternalLink,
  LogIn,
  UserPlus,
  User,
  Camera,
  Sun,
  Moon,
} from "lucide-react";

export default function AboutUsPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [darkMode, setDarkMode] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);

  useEffect(() => {
    // Check system preference or localStorage
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
        mission: "الرسالة والرؤية",
        values: "قيمنا",
        story: "قصتنا",
        team: "فريقنا",
        stats: "إحصائياتنا",
        contactUs: "اتصل بنا",
        login: "تسجيل الدخول",
        signup: "إنشاء حساب",
      },
      hero: {
        badge: "البرنامج الشرعي العام",
        title: "أكاديمية غراس - العلوم الشرعية والتعليم الأصيل",
        tagline: "أكاديمية غراس",
        description:
          "نسعى لتقديم العلوم الشرعية الأصيلة بمنهجية علمية متكاملة وميسرة لكل طالب علم، نجمع بين التراث العريق والتقنيات الحديثة لبناء جيل واعٍ بدينه وعلمه.",
        ctaBrowse: "التسجيل في البرنامج",
        ctaContact: "اتصل بنا",
      },
      missionVision: {
        title: "الرسالة والرؤية",
        subtitle: "نحو تأصيل علمي راسخ ونشر نافع للعلوم الشرعية",
        missionTitle: "رسالتنا (Mission)",
        missionText:
          "تيسير تعلم العلوم الشرعية وفق منهج أهل السنة والجماعة، وتقديمها بجودة عالية وأساليب تعليمية حديثة تصل لكل راغب في العلم الشرعي في كل مكان.",
        visionTitle: "رؤيتنا (Vision)",
        visionText:
          "أن نكون الأكاديمية الرائدة عالمياً في نشر التعليم الشرعي الأصيل وتمكين طلاب العلم من دراسة العلوم الشرعية باتقان واطمئنان.",
      },
      values: {
        title: "قيمنا الأساسية",
        subtitle: "المبادئ الشرعية والأخلاقية التي توجّه مسيرتنا العلمية",
        items: [
          {
            icon: <Award className="w-6 h-6 text-[#0f766e] dark:text-[#2dd4bf]" />,
            title: "الأصالة والإتقان",
            desc: "الالتزام بالمنهج العلمي الرصين والفهم الصحيح للنصوص الشرعية وفق أصول العلماء.",
          },
          {
            icon: <Sparkles className="w-6 h-6 text-[#e09f3e] dark:text-amber-400" />,
            title: "التيسير والشمول",
            desc: "تقريب العلم الشرعي وتسهيل فهمه لجميع المستويات والشرائح بحسب قدراتهم.",
          },
          {
            icon: <HeartHandshake className="w-6 h-6 text-[#bc4749] dark:text-rose-400" />,
            title: "الإخلاص والأمانة",
            desc: "تحري الأمانة العلمية وابتغاء رضا الله سبحانه وتعالى في نشر العلم النافع.",
          },
          {
            icon: <ShieldCheck className="w-6 h-6 text-[#15825f] dark:text-emerald-400" />,
            title: "الموثوقية والاعتماد",
            desc: "مناهج مقررة ومراجعة من نخبة من العلماء والمشايخ الأجلاء المتخصصين.",
          },
          {
            icon: <Users className="w-6 h-6 text-[#3a4778] dark:text-indigo-400" />,
            title: "العناية بالطالب",
            desc: "مواكبة مسيرة الطالب العلمية والإجابة عن تساؤلاته وتوجيهه بالشكل الأمثل.",
          },
          {
            icon: <Globe className="w-6 h-6 text-[#44928a] dark:text-teal-400" />,
            title: "خدمة المجتمع",
            desc: "نشر الوعي الشرعي الصحيح وبناء مجتمعات واعية بأحكام دينها وقيمه.",
          },
        ],
      },
      story: {
        title: "قصتنا وتاريخنا",
        subtitle: "رحلة مباركة في خدمة القرآن الكريم والعلوم الشرعية",
        timeline: [
          {
            year: "2018",
            title: "تأسيس الأكاديمية",
            desc: "انطلاق فكرة 'أكاديمية غراس' كحلقة تعليمية مباركة لتعليم القرآن والعلوم الشرعية الأساسية لجمع من الطلاب.",
          },
          {
            year: "2020",
            title: "إطلاق المنصة الرقمية",
            desc: "تطوير المنصة الإلكترونية للبرنامج الشرعي العام لتستوعب الآلاف من طلاب العلم حول العالم.",
          },
          {
            year: "2023",
            title: "توسيع المناهج",
            desc: "اعتماد مستويات متقدمة في الفقه، العقيدة، التفسير، والحديث، مع لجان علمية متخصصة.",
          },
          {
            year: "2026",
            title: "الريادة العالمية",
            desc: "وصول عدد المستفيدين من البرنامج الشرعي العام إلى أكثر من 15,000 طالب علم مع إعانات ومسارات تفاعلية متطورة.",
          },
        ],
      },
      team: {
        title: "الهيئة العلمية والتدريسية",
        subtitle: "نخبة من العلماء والمشايخ والأكاديميين المشرفين على المناهج",
        viewAll: "عرض جميع أعضاء هيئة التدريس",
        members: [
          {
            name: "فضيلة الشيخ د. أحمد العبدالله",
            role: "المشرف العام ورئيس اللجنة العلمية",
            bio: "حاصل على الدكتوراه في الفقه وأصوله، وأستاذ الدراسات الإسلامية بخبرة تتجاوز 20 عاماً في التدريس الشرعي والتوجيه.",
          },
          {
            name: "د. فاطمة الزهراء الشريف",
            role: "مقررة قسم التفسير وعلوم القرآن",
            bio: "باحثة متخصصة في القراءات والتفسير، تشرف على إعداد ومراجعة المناهج القرآنية وبرامج الحفظ والفهم.",
          },
          {
            name: "فضيلة الشيخ د. إبراهيم المكي",
            role: "أستاذ الحديث الشريف وعلومه",
            bio: "محقق وباحث في السنة النبوية، له عدة مؤلفات وتحقيقات علمية معتمدة في كتب الحديث الشريف.",
          },
        ],
      },
      stats: {
        title: "إحصائيات البرنامج الشرعي العام",
        subtitle: "أرقام تعكس الإقبال المبارك على طلب العلم النافع",
        items: [
          { label: "طالب علم منتظم", value: "15,420+", icon: <Users className="w-8 h-8 text-[#0f766e] dark:text-[#2dd4bf]" /> },
          { label: "مقرر شرعي معتمد", value: "120+", icon: <BookOpen className="w-8 h-8 text-[#e09f3e] dark:text-amber-400" /> },
          { label: "شيخ وعالم مشرف", value: "45+", icon: <Award className="w-8 h-8 text-[#bc4749] dark:text-rose-400" /> },
          { label: "سنوات العطاء العلمي", value: "8+", icon: <Clock className="w-8 h-8 text-[#1e3a5f] dark:text-indigo-400" /> },
        ],
      },
      cta: {
        title: "ابدأ رحلتك في طلب العلم الشرعي اليوم",
        desc: "انضم إلى أكاديمية غراس - البرنامج الشرعي العام، واطلب العلم بطريقة منهجية وميسرة.",
        browse: "إنشاء حساب والانضمام",
        contact: "اتصل بنا",
      },
      footer: {
        copy: "© 2026 أكاديمية غراس - البرنامج الشرعي العام. جميع الحقوق محفوظة.",
        tag: "أكاديمية تعليمية أصيلة لعلوم الشريعة",
      },
    },
    en: {
      nav: {
        about: "About Academy",
        mission: "Mission & Vision",
        values: "Our Values",
        story: "Our Story",
        team: "Faculty",
        stats: "Statistics",
        contactUs: "Contact Us",
        login: "Sign In",
        signup: "Sign Up",
      },
      hero: {
        badge: "General Sharia Program",
        title: "Al-Ghiras Academy - Authentic Sharia Sciences & Islamic Education",
        tagline: "Al-Ghiras Academy",
        description:
          "We offer authentic Islamic sciences with a comprehensive, accessible methodology for every knowledge seeker, bridging rich heritage with modern learning.",
        ctaBrowse: "Enroll in Program",
        ctaContact: "Contact Us",
      },
      missionVision: {
        title: "Mission & Vision",
        subtitle: "Towards firm scholarly grounding and beneficial dissemination of Sharia",
        missionTitle: "Our Mission",
        missionText:
          "To facilitate learning Sharia sciences according to the methodology of Ahlus-Sunnah wal-Jama'ah, delivering high quality and accessible education worldwide.",
        visionTitle: "Our Vision",
        visionText:
          "To be the leading global academy for authentic Islamic education, empowering students to study Sharia sciences with excellence and confidence.",
      },
      values: {
        title: "Our Core Values",
        subtitle: "Sharia and ethical principles guiding our scholarly journey",
        items: [
          {
            icon: <Award className="w-6 h-6 text-[#0f766e] dark:text-[#2dd4bf]" />,
            title: "Authenticity & Precision",
            desc: "Commitment to sound scholarly methodology and correct understanding of texts.",
          },
          {
            icon: <Sparkles className="w-6 h-6 text-[#e09f3e] dark:text-amber-400" />,
            title: "Facilitation & Inclusivity",
            desc: "Making Sharia knowledge accessible and easy to understand for all levels.",
          },
          {
            icon: <HeartHandshake className="w-6 h-6 text-[#bc4749] dark:text-rose-400" />,
            title: "Sincerity & Trust",
            desc: "Upholding scholarly integrity and seeking Allah's pleasure in spreading beneficial knowledge.",
          },
          {
            icon: <ShieldCheck className="w-6 h-6 text-[#15825f] dark:text-emerald-400" />,
            title: "Reliability & Accreditation",
            desc: "Curricula reviewed and endorsed by elite scholars and specialized sheikhs.",
          },
          {
            icon: <Users className="w-6 h-6 text-[#3a4778] dark:text-indigo-400" />,
            title: "Student Care",
            desc: "Guiding students throughout their scholarly journey and answering inquiries.",
          },
          {
            icon: <Globe className="w-6 h-6 text-[#44928a] dark:text-teal-400" />,
            title: "Community Service",
            desc: "Spreading correct Sharia awareness and building knowledgeable communities.",
          },
        ],
      },
      story: {
        title: "Our Story & History",
        subtitle: "A blessed journey in serving the Noble Quran and Sharia sciences",
        timeline: [
          {
            year: "2018",
            title: "Academy Inception",
            desc: "Al-Ghiras started as a blessed study circle teaching Quran and basic Sharia sciences to students.",
          },
          {
            year: "2020",
            title: "Digital Platform Launch",
            desc: "Developing the e-learning portal for the General Sharia Program to reach thousands worldwide.",
          },
          {
            year: "2023",
            title: "Curriculum Expansion",
            desc: "Adopting advanced levels in Fiqh, Aqeedah, Tafsir, and Hadith with specialized academic committees.",
          },
          {
            year: "2026",
            title: "Global Leadership",
            desc: "Over 15,000 active students benefiting from structured interactive Sharia learning tracks.",
          },
        ],
      },
      team: {
        title: "Faculty & Scholarly Committee",
        subtitle: "Elite scholars, sheikhs, and academics supervising our curricula",
        viewAll: "View All Faculty Members",
        members: [
          {
            name: "Sheikh Dr. Ahmed Al-Abdullah",
            role: "General Supervisor & Head of Scientific Committee",
            bio: "Ph.D. in Fiqh & Usul al-Fiqh, Islamic studies professor with over 20 years of experience in Sharia teaching.",
          },
          {
            name: "Dr. Fatimah Al-Zahraa Al-Sharif",
            role: "Chair of Tafsir & Quranic Sciences",
            bio: "Researcher specialized in Quranic readings and Tafsir, overseeing Quranic curricula and memorization programs.",
          },
          {
            name: "Sheikh Dr. Ibrahim Al-Makki",
            role: "Professor of Hadith & its Sciences",
            bio: "Researcher in Sunnah with several certified publications and scholarly works in Hadith studies.",
          },
        ],
      },
      stats: {
        title: "General Sharia Program Statistics",
        subtitle: "Numbers reflecting blessed engagement in seeking beneficial knowledge",
        items: [
          { label: "Enrolled Students", value: "15,420+", icon: <Users className="w-8 h-8 text-[#0f766e] dark:text-[#2dd4bf]" /> },
          { label: "Accredited Courses", value: "120+", icon: <BookOpen className="w-8 h-8 text-[#e09f3e] dark:text-amber-400" /> },
          { label: "Supervising Scholars", value: "45+", icon: <Award className="w-8 h-8 text-[#bc4749] dark:text-rose-400" /> },
          { label: "Years of Scholarly Service", value: "8+", icon: <Clock className="w-8 h-8 text-[#1e3a5f] dark:text-indigo-400" /> },
        ],
      },
      cta: {
        title: "Start Your Sharia Learning Journey Today",
        desc: "Join Al-Ghiras Academy - General Sharia Program, and pursue Islamic knowledge in a systematic and accessible way.",
        browse: "Sign Up & Join",
        contact: "Contact Us",
      },
      footer: {
        copy: "© 2026 Al-Ghiras Academy - General Sharia Program. All rights reserved.",
        tag: "Authentic Islamic Educational Academy",
      },
    },
  };

  const t = content[lang];

  return (
    <div className={`min-h-screen bg-[#f7f8f4] dark:bg-[#09111e] text-[#18322f] dark:text-slate-100 font-sans transition-colors duration-300 ${lang === "en" ? "ltr" : "rtl"}`} dir={lang === "en" ? "ltr" : "rtl"}>
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#111c2e]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
            <a href="#about" className="hover:text-[#0f766e] dark:hover:text-teal-400 transition-colors">{t.nav.about}</a>
            <a href="#mission" className="hover:text-[#0f766e] dark:hover:text-teal-400 transition-colors">{t.nav.mission}</a>
            <a href="#values" className="hover:text-[#0f766e] dark:hover:text-teal-400 transition-colors">{t.nav.values}</a>
            <a href="#story" className="hover:text-[#0f766e] dark:hover:text-teal-400 transition-colors">{t.nav.story}</a>
            <a href="#team" className="hover:text-[#0f766e] dark:hover:text-teal-400 transition-colors">{t.nav.team}</a>
            <a href="#stats" className="hover:text-[#0f766e] dark:hover:text-teal-400 transition-colors">{t.nav.stats}</a>
            <a href="/contact" className="hover:text-[#0f766e] dark:hover:text-teal-400 transition-colors">{t.nav.contactUs}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-sm"
              aria-label="Toggle Dark Mode"
              title={darkMode ? "الوضع الفاتح" : "الوضع الداكن"}
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
              href="/login"
              className="px-3 py-2 rounded-sm border border-[#1e3a5f] dark:border-slate-600 text-[#1e3a5f] dark:text-slate-200 text-xs font-semibold hover:bg-[#1e3a5f] hover:text-white dark:hover:bg-slate-700 transition-all flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              {t.nav.login}
            </a>
            <a
              href="/signup"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#1e3a5f] dark:bg-teal-700 text-white text-xs font-semibold hover:bg-[#15294a] dark:hover:bg-teal-600 transition-all shadow-sm"
            >
              <UserPlus className="w-3.5 h-3.5" />
              {t.nav.signup}
            </a>
          </div>
        </div>
      </header>

      {/* Section A – Hero / Introduction */}
      <section id="about" className="relative hero-gradient text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute -end-24 top-20 h-72 w-72 rounded-[35%] border border-white/25 bg-white/10 blur-[1px] float-shape pointer-events-none" />
        <div className="absolute -bottom-28 start-1/3 h-80 w-80 rounded-full border border-white/20 bg-[#f5cb5c]/20 blur-sm float-shape pointer-events-none" style={{ animationDelay: '-3s' }} />

        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)`,
            backgroundSize: '54px 54px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-sm bg-white/10 border border-white/30 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                {t.hero.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                {t.hero.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl font-light">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/signup"
                  className="px-6 py-3 rounded-sm bg-[#e09f3e] text-[#18322f] font-semibold text-sm hover:bg-[#d08f2e] transition-all shadow-lg flex items-center gap-2"
                >
                  {t.hero.ctaBrowse}
                  {lang === "ar" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 rounded-sm bg-white/10 border border-white/40 text-white font-semibold text-sm hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  {t.hero.ctaContact}
                </a>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] overflow-hidden card-shadow border border-white/20 bg-white/10 p-6 backdrop-blur-md text-center">
                <div className="w-full h-[320px] rounded-[22px] bg-white/5 border-2 border-dashed border-white/30 flex flex-col items-center justify-center text-white/70 gap-3 mb-4">
                  <Camera className="w-12 h-12 text-white/50" />
                  <span className="text-sm font-medium">
                    {lang === "ar" ? "مساحة مخصصة للصورة الترويجية (ارفق صورتك هنا)" : "Image Placeholder (Drop your image here)"}
                  </span>
                </div>
                <div className="absolute bottom-6 start-6 end-6 bg-[#063b39]/90 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e09f3e] flex items-center justify-center text-[#18322f] font-bold text-lg shrink-0">
                    15K+
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {lang === "ar" ? "طالب علم منتظم في البرنامج" : "Active Students Enrolled"}
                    </p>
                    <p className="text-xs text-white/70">
                      {lang === "ar" ? "منهجية أصيلة وتدريس رصين" : "Authentic methodology & rigorous teaching"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B – Our Mission & Vision */}
      <section id="mission" className="py-20 bg-white dark:bg-[#111c2e] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f766e] dark:text-teal-400 mb-2 block">
              {lang === "ar" ? "أهدافنا الإستراتيجية" : "Strategic Goals"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18322f] dark:text-white tracking-tight">
              {t.missionVision.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
              {t.missionVision.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[28px] p-8 sm:p-10 bg-[#f7f8f4] dark:bg-[#17253d] border border-slate-200 dark:border-slate-800 card-shadow relative overflow-hidden group hover:border-[#0f766e] dark:hover:border-teal-400 transition-all">
              <div className="w-14 h-14 rounded-full bg-[#0f766e]/10 dark:bg-teal-900/40 flex items-center justify-center text-[#0f766e] dark:text-teal-400 mb-6 group-hover:bg-[#0f766e] group-hover:text-white transition-all">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#18322f] dark:text-white mb-4">
                {t.missionVision.missionTitle}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {t.missionVision.missionText}
              </p>
              <div className="mt-8 flex items-center gap-2 text-[#0f766e] dark:text-teal-400 font-semibold text-sm">
                <span>{lang === "ar" ? "تأصيل شرعي دقيق" : "Precise Sharia grounding"}</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            <div className="rounded-[28px] p-8 sm:p-10 bg-[#f7f8f4] dark:bg-[#17253d] border border-slate-200 dark:border-slate-800 card-shadow relative overflow-hidden group hover:border-[#1e3a5f] dark:hover:border-indigo-400 transition-all">
              <div className="w-14 h-14 rounded-full bg-[#1e3a5f]/10 dark:bg-indigo-900/40 flex items-center justify-center text-[#1e3a5f] dark:text-indigo-400 mb-6 group-hover:bg-[#1e3a5f] group-hover:text-white transition-all">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#18322f] dark:text-white mb-4">
                {t.missionVision.visionTitle}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {t.missionVision.visionText}
              </p>
              <div className="mt-8 flex items-center gap-2 text-[#1e3a5f] dark:text-indigo-400 font-semibold text-sm">
                <span>{lang === "ar" ? "ريادة عالمية في التعليم الشرعي" : "Global leadership in Sharia education"}</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section C – Our Values */}
      <section id="values" className="py-20 bg-[#f7f8f4] dark:bg-[#09111e] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e09f3e] dark:text-amber-400 mb-2 block">
              {lang === "ar" ? "مبادئنا وأخلاقياتنا" : "Our Principles"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18322f] dark:text-white tracking-tight">
              {t.values.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
              {t.values.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.items.map((val, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111c2e] rounded-sm p-6 border border-slate-200 dark:border-slate-800 card-shadow hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-sm bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-[#18322f] dark:text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D – Our Story / History */}
      <section id="story" className="py-20 bg-white dark:bg-[#111c2e] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#bc4749] dark:text-rose-400 mb-2 block">
              {lang === "ar" ? "محطات مباركة" : "Milestones"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18322f] dark:text-white tracking-tight">
              {t.story.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
              {t.story.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {t.story.timeline.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTimeline(idx)}
                className={`cursor-pointer rounded-[28px] p-6 transition-all border ${
                  activeTimeline === idx
                    ? "bg-[#1e3a5f] dark:bg-teal-800 text-white border-[#1e3a5f] dark:border-teal-700 card-shadow scale-[1.02]"
                    : "bg-[#f7f8f4] dark:bg-[#17253d] text-[#18322f] dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-[#1e3a5f]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xl font-extrabold px-3 py-1 rounded-full ${
                    activeTimeline === idx ? "bg-[#e09f3e] text-[#18322f]" : "bg-white dark:bg-slate-800 text-[#1e3a5f] dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  }`}>
                    {item.year}
                  </span>
                  <Clock className={`w-5 h-5 ${activeTimeline === idx ? "text-[#e09f3e]" : "text-slate-400"}`} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${activeTimeline === idx ? "text-white" : "text-[#18322f] dark:text-white"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${activeTimeline === idx ? "text-white/85" : "text-slate-600 dark:text-slate-300"}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section E – Our Team / Key Instructors */}
      <section id="team" className="py-20 bg-[#f7f8f4] dark:bg-[#09111e] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f766e] dark:text-teal-400 mb-2 block">
              {lang === "ar" ? "الهيئة العلمية" : "Faculty & Scholars"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18322f] dark:text-white tracking-tight">
              {t.team.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
              {t.team.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.team.members.map((member, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111c2e] rounded-[28px] overflow-hidden border border-slate-200 dark:border-slate-800 card-shadow hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Faculty Photo Placeholder */}
                <div className="h-64 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 gap-2 relative">
                  <User className="w-16 h-16 text-slate-300 dark:text-slate-600" />
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {lang === "ar" ? "صورة عضو الهيئة (مساحة فارغة)" : "Faculty Photo Placeholder"}
                  </span>
                  <span className="absolute bottom-4 start-4 bg-[#e09f3e] text-[#18322f] text-xs font-bold px-3 py-1 rounded-full">
                    {member.role}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#18322f] dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                      {member.bio}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <a href="#share" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#1e3a5f] hover:text-white transition-all">
                        <Share2 className="w-4 h-4" />
                      </a>
                      <a href="#mail" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#0f766e] hover:text-white transition-all">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                    <span className="text-xs text-[#0f766e] dark:text-teal-400 font-semibold flex items-center gap-1 cursor-pointer hover:underline">
                      {lang === "ar" ? "السيرة العلمية" : "CV Profile"} <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#instructors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#1e3a5f] dark:bg-teal-700 text-white font-semibold text-sm hover:bg-[#15294a] dark:hover:bg-teal-600 transition-all shadow-md"
            >
              {t.team.viewAll}
              {lang === "ar" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </a>
          </div>
        </div>
      </section>

      {/* Section F – Key Statistics / Achievements */}
      <section id="stats" className="py-20 bg-white dark:bg-[#111c2e] border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e09f3e] dark:text-amber-400 mb-2 block">
              {lang === "ar" ? "إحصائيات البرنامج" : "Program Metrics"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18322f] dark:text-white tracking-tight">
              {t.stats.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
              {t.stats.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.stats.items.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-[28px] p-8 bg-[#f7f8f4] dark:bg-[#17253d] border border-slate-200 dark:border-slate-800 card-shadow text-center flex flex-col items-center justify-center hover:border-[#0f766e] dark:hover:border-teal-400 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#1e3a5f] dark:text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section G – Call to Action (CTA) */}
      <section id="cta" className="py-24 hero-gradient text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="w-24 h-24 mx-auto rounded-2xl bg-white p-2 border border-white/30 shadow-2xl flex items-center justify-center">
            <img src="/logo.png" alt="شعار أكاديمية غراس" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.cta.title}
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light">
            {t.cta.desc}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="/signup"
              className="px-8 py-4 rounded-sm bg-[#e09f3e] text-[#18322f] font-bold text-base hover:bg-[#d08f2e] transition-all shadow-xl flex items-center gap-2"
            >
              {t.cta.browse}
              {lang === "ar" ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </a>
            <a
              href="/contact"
              className="px-8 py-4 rounded-sm bg-white/10 border border-white/40 text-white font-bold text-base hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              {t.cta.contact}
            </a>
          </div>
        </div>
      </section>

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
              <p className="text-xs text-white/50">{t.footer.tag}</p>
            </div>
          </div>
          <p className="text-xs text-white/60 text-center">
            {t.footer.copy}
          </p>
          <div className="flex items-center gap-6 text-xs text-white/80">
            <a href="/login" className="hover:text-white transition-colors">
              {lang === "ar" ? "تسجيل الدخول" : "Sign In"}
            </a>
            <a href="/signup" className="hover:text-white transition-colors">
              {lang === "ar" ? "إنشاء حساب" : "Sign Up"}
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
