"use client"

import { useState } from "react"

type Lang = "ja" | "en" | "vi"

const t = {
  ja: {
    contact_nav: "お問い合わせ",
    hero_eyebrow: "expand business Input / Output",
    hero_tagline: "ビジネスを、前へ。",
    hero_sub: "アプリ開発・メディア制作・コンサルティング",
    hero_desc: 'exbizIO は「expand business Input/Output」の造語。ベトナム・ホーチミンを拠点に、ビジネスの入力と出力を最大化するプロダクトと知識を届けます。',
    hero_cta: "お問い合わせ",
    products_title: "プロダクト",
    vitrace_name: "Vitrace",
    vitrace_tag: "ヘルスケア SaaS",
    vitrace_desc: "持病・健康管理アプリ。毎日の症状・食事・睡眠・バイタルを記録し、AIがあなたの健康パターンを分析します。",
    reservio_name: "Reservio",
    reservio_tag: "予約・POS SaaS",
    reservio_desc: "美容サロン向け予約・POSシステム。予約管理・スタッフシフト・売上管理をひとつのプラットフォームにまとめます。",
    qrofyle_name: "QROFYLE",
    qrofyle_tag: "デジタル名刺 SaaS",
    qrofyle_desc: "QRコードで繋がるデジタル名刺・組織プロフィール。個人・チーム・支店のプロフィールをQRひとつで共有できます。",
    themyworld_name: "The MY World",
    themyworld_tag: "パーソナルサイト",
    themyworld_desc: "Google Local Guideレビューを掲載するパーソナルサイト。ホーチミンを中心にレストラン・スポットを紹介します。",
    product_link: "詳細を見る →",
    about_title: "私たちについて",
    about_desc: "themyworld.com は、アプリ制作・メディア運営・コンサルティングを軸に、自由な発想で価値を生み出すクリエイティブグループです。ヘルスケアからビジネス管理まで、使う人の課題を解決するプロダクトをつくり続けています。",
    contact_title: "お問い合わせ",
    name_label: "お名前",
    email_label: "メールアドレス",
    message_label: "メッセージ",
    submit: "送信する",
    sending: "送信中...",
    success: "送信しました。ありがとうございます！",
    error: "送信に失敗しました。再度お試しください。",
    footer: "© 2025 themyworld.com. All rights reserved.",
  },
  en: {
    contact_nav: "Contact",
    hero_eyebrow: "expand business Input / Output",
    hero_tagline: "Expand. Build. Connect.",
    hero_sub: "App Development · Media Creation · Consulting",
    hero_desc: "exbizIO stands for \"expand business Input/Output\" — based in Ho Chi Minh City, Vietnam, delivering digital products and expertise that maximize the input and output of your business.",
    hero_cta: "Get in Touch",
    products_title: "Products",
    vitrace_name: "Vitrace",
    vitrace_tag: "Healthcare SaaS",
    vitrace_desc: "A personal health & chronic condition management app. Track daily symptoms, meals, sleep, and vitals — let AI reveal the patterns that impact your health.",
    reservio_name: "Reservio",
    reservio_tag: "Reservation & POS SaaS",
    reservio_desc: "A reservation & POS system for beauty salons. Manage bookings, staff scheduling, and sales all in one platform.",
    qrofyle_name: "QROFYLE",
    qrofyle_tag: "Digital Business Card SaaS",
    qrofyle_desc: "Digital business cards & organization profiles via QR code. Share individual, team, and branch profiles with a single scan.",
    themyworld_name: "The MY World",
    themyworld_tag: "Personal Site",
    themyworld_desc: "A personal site featuring Google Local Guide reviews. Discover restaurants and spots in Ho Chi Minh City and beyond.",
    product_link: "Learn more →",
    about_title: "About Us",
    about_desc: "themyworld.com is a creative collective building apps, creating media, and providing consulting — freely and independently. From healthcare tools to business management systems, we craft digital products that solve real problems.",
    contact_title: "Contact Us",
    name_label: "Name",
    email_label: "Email",
    message_label: "Message",
    submit: "Send Message",
    sending: "Sending...",
    success: "Message sent. Thank you!",
    error: "Failed to send. Please try again.",
    footer: "© 2025 themyworld.com. All rights reserved.",
  },
  vi: {
    contact_nav: "Liên hệ",
    hero_eyebrow: "expand business Input / Output",
    hero_tagline: "Mở rộng. Xây dựng. Kết nối.",
    hero_sub: "Phát triển ứng dụng · Tạo nội dung · Tư vấn",
    hero_desc: "exbizIO là viết tắt của \"expand business Input/Output\" — đặt trụ sở tại TP. Hồ Chí Minh, Việt Nam, cung cấp các sản phẩm số và chuyên môn giúp tối đa hóa đầu vào và đầu ra kinh doanh của bạn.",
    hero_cta: "Liên hệ ngay",
    products_title: "Sản phẩm",
    vitrace_name: "Vitrace",
    vitrace_tag: "Healthcare SaaS",
    vitrace_desc: "Ứng dụng quản lý sức khỏe & bệnh mãn tính. Ghi lại triệu chứng, bữa ăn, giấc ngủ hàng ngày — AI phân tích các mẫu ảnh hưởng đến sức khỏe của bạn.",
    reservio_name: "Reservio",
    reservio_tag: "Đặt lịch & POS SaaS",
    reservio_desc: "Hệ thống đặt lịch & POS cho salon làm đẹp. Quản lý đặt lịch, lịch nhân viên và doanh thu trong một nền tảng duy nhất.",
    qrofyle_name: "QROFYLE",
    qrofyle_tag: "Danh thiếp số SaaS",
    qrofyle_desc: "Danh thiếp số & hồ sơ tổ chức qua mã QR. Chia sẻ hồ sơ cá nhân, nhóm và chi nhánh chỉ bằng một lần quét.",
    themyworld_name: "The MY World",
    themyworld_tag: "Trang cá nhân",
    themyworld_desc: "Trang cá nhân với các đánh giá Google Local Guide. Khám phá nhà hàng và địa điểm tại TP.HCM và các nơi khác.",
    product_link: "Xem chi tiết →",
    about_title: "Về chúng tôi",
    about_desc: "themyworld.com là một nhóm sáng tạo chuyên phát triển ứng dụng, sản xuất media và tư vấn — tự do và độc lập. Từ công cụ chăm sóc sức khỏe đến hệ thống quản lý doanh nghiệp, chúng tôi tạo ra các sản phẩm số giải quyết vấn đề thực tế.",
    contact_title: "Liên hệ",
    name_label: "Họ tên",
    email_label: "Email",
    message_label: "Tin nhắn",
    submit: "Gửi",
    sending: "Đang gửi...",
    success: "Đã gửi thành công. Cảm ơn bạn!",
    error: "Gửi thất bại. Vui lòng thử lại.",
    footer: "© 2025 themyworld.com. All rights reserved.",
  },
}

// ─── Product logo icons ────────────────────────────────────────────────────

function VitraceIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="9" fill="#10b981"/>
      <polyline points="26,18 21,18 17.5,25 10.5,11 7,18 4,18"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        transform="translate(3,0)"/>
    </svg>
  )
}

function ReservioIcon() {
  function star4(cx: number, cy: number, r1: number, r2: number) {
    const pts = []
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4 - Math.PI / 2
      const r = i % 2 === 0 ? r1 : r2
      pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`)
    }
    return `M ${pts.join(" L ")} Z`
  }
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="res-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed"/>
          <stop offset="100%" stopColor="#c084fc"/>
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="9" fill="url(#res-g)"/>
      <path d={star4(18, 18, 9, 2)} fill="white"/>
      <path d={star4(27, 10, 3.5, 0.8)} fill="white" opacity="0.9"/>
      <path d={star4(10, 26, 2.5, 0.6)} fill="white" opacity="0.7"/>
    </svg>
  )
}

function QrofyleIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="9" fill="#4f46e5"/>
      <g transform="translate(4,4) scale(0.875)">
        <rect x="1" y="1" width="12" height="12" rx="2.5" fill="white"/>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1" fill="#4f46e5"/>
        <rect x="5.5" y="5.5" width="3" height="3" rx="0.5" fill="white"/>
        <rect x="19" y="1" width="12" height="12" rx="2.5" fill="white"/>
        <rect x="21.5" y="3.5" width="7" height="7" rx="1" fill="#4f46e5"/>
        <rect x="23.5" y="5.5" width="3" height="3" rx="0.5" fill="white"/>
        <rect x="1" y="19" width="12" height="12" rx="2.5" fill="white"/>
        <rect x="3.5" y="21.5" width="7" height="7" rx="1" fill="#4f46e5"/>
        <rect x="5.5" y="23.5" width="3" height="3" rx="0.5" fill="white"/>
        <rect x="19" y="19" width="5" height="5" rx="1" fill="white"/>
        <rect x="26" y="19" width="5" height="5" rx="1" fill="white"/>
        <rect x="19" y="26" width="5" height="5" rx="1" fill="white"/>
        <rect x="26" y="26" width="5" height="5" rx="1" fill="white" opacity="0.4"/>
      </g>
    </svg>
  )
}

function ThemyworldIcon() {
  return (
    <img
      src="https://res.cloudinary.com/di1ff45bi/image/upload/v1781101407/GoogleIcon_bb8z6a.png"
      alt="The MY World"
      width={36}
      height={36}
      className="rounded-full object-cover shrink-0"
    />
  )
}

function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#4f46e5" />
      {/* Output arrow → (white, prominent) */}
      <line x1="6" y1="11" x2="21" y2="11" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <polyline points="17,7 21,11 17,15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Input arrow ← (light indigo, subtle) */}
      <line x1="26" y1="21" x2="11" y2="21" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" />
      <polyline points="15,17 11,21 15,25" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const iconSize = size === "sm" ? 24 : 30
  const cls = size === "sm" ? "text-xl" : "text-2xl"
  return (
    <span className={`inline-flex items-center gap-2 ${cls} tracking-tight leading-none select-none font-sans`}>
      <LogoMark size={iconSize} />
      <span><span className="font-light text-slate-400">ex</span><span className="font-extrabold text-slate-900">biz</span><span className="font-bold text-indigo-600">IO</span></span>
    </span>
  )
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("ja")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const tx = t[lang]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus("success")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-colors bg-white"

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-0.5 text-sm">
              {(["ja", "en", "vi"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-0.5 rounded-md transition-colors ${
                    lang === l
                      ? "text-indigo-600 font-semibold"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {l === "ja" ? "JP" : l === "en" ? "EN" : "VI"}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {tx.contact_nav}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-24">
        <p className="text-xs font-semibold text-indigo-500 tracking-[0.2em] uppercase mb-5">
          {tx.hero_eyebrow}
        </p>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-5">
          {tx.hero_tagline}
        </h1>
        <p className="text-base font-medium text-slate-500 mb-3">{tx.hero_sub}</p>
        <p className="text-base text-slate-400 max-w-lg leading-relaxed mb-10">{tx.hero_desc}</p>
        <a
          href="#contact"
          className="inline-flex items-center px-7 py-3 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
        >
          {tx.hero_cta}
        </a>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-slate-100" />
      </div>

      {/* Products */}
      <section id="products" className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-8">
          {tx.products_title}
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Vitrace */}
          <div className="border border-slate-200 rounded-2xl p-7 hover:border-emerald-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-5">
              <VitraceIcon />
              <div>
                <p className="font-bold text-slate-900 leading-tight">{tx.vitrace_name}</p>
                <p className="text-xs text-slate-400">{tx.vitrace_tag}</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">{tx.vitrace_desc}</p>
            <a href="https://vitrace.exbizio.com" className="text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
              {tx.product_link}
            </a>
          </div>

          {/* Reservio */}
          <div className="border border-slate-200 rounded-2xl p-7 hover:border-violet-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-5">
              <ReservioIcon />
              <div>
                <p className="font-bold text-slate-900 leading-tight">{tx.reservio_name}</p>
                <p className="text-xs text-slate-400">{tx.reservio_tag}</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">{tx.reservio_desc}</p>
            <a href="https://reservio.themyworld.com" className="text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors">
              {tx.product_link}
            </a>
          </div>

          {/* QROFYLE */}
          <div className="border border-slate-200 rounded-2xl p-7 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-5">
              <QrofyleIcon />
              <div>
                <p className="font-bold text-slate-900 leading-tight">{tx.qrofyle_name}</p>
                <p className="text-xs text-slate-400">{tx.qrofyle_tag}</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">{tx.qrofyle_desc}</p>
            <a href="https://qrofyle.exbizio.com" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
              {tx.product_link}
            </a>
          </div>

          {/* The MY World */}
          <div className="border border-slate-200 rounded-2xl p-7 hover:border-orange-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center gap-3 mb-5">
              <ThemyworldIcon />
              <div>
                <p className="font-bold text-slate-900 leading-tight">{tx.themyworld_name}</p>
                <p className="text-xs text-slate-400">{tx.themyworld_tag}</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">{tx.themyworld_desc}</p>
            <a href="https://www.themyworld.com" className="text-sm font-semibold text-orange-600 hover:text-orange-800 transition-colors">
              {tx.product_link}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-6">
            {tx.about_title}
          </p>
          <p className="text-xl font-light text-slate-700 leading-relaxed max-w-2xl">
            {tx.about_desc}
          </p>
          <p className="mt-6 text-sm font-medium text-slate-400">themyworld.com</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-8">
          {tx.contact_title}
        </p>
        {status === "success" ? (
          <div className="max-w-lg rounded-2xl bg-emerald-50 border border-emerald-200 px-8 py-12 text-center">
            <p className="text-emerald-700 font-medium">{tx.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">{tx.name_label}</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">{tx.email_label}</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">{tx.message_label}</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-500">{tx.error}</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-7 py-3 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-sm"
            >
              {status === "sending" ? tx.sending : tx.submit}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Logo size="sm" />
          <p className="text-xs text-slate-400">{tx.footer}</p>
        </div>
      </footer>
    </div>
  )
}
