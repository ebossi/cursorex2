import "./globals.css"
import { Inter } from "next/font/google"
import { AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ebossi WebGL Games",
  description: "Unity로 제작한 웹 게임들을 자유롭게 즐겨보세요.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}
