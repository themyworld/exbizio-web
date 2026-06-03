import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })

export const metadata: Metadata = {
  title: "exbizIO — Expand Business Input/Output",
  description: "アプリ開発・メディア制作・コンサルティング。App Development, Media Creation, Consulting. | themyworld.com",
  openGraph: {
    title: "exbizIO — Expand Business Input/Output",
    description: "アプリ開発・メディア制作・コンサルティング。App Development, Media Creation, Consulting.",
    url: "https://www.exbizio.com",
    siteName: "exbizIO",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
