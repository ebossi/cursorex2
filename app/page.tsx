import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gamepad2, Info, Mail, Dices } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-center text-sm lg:flex flex-col gap-8">
          <h1 className="text-4xl font-bold mb-4 text-center">에보시의 WebGL 게임 갤러리</h1>
          <p className="text-xl mb-8 text-center">
            Unity로 제작한 웹 게임들을 자유롭게 즐겨보세요.
            <br />
            모든 게임은 브라우저에서 바로 플레이할 수 있습니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">최신 게임</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                새롭게 출시된 게임들을 가장 먼저 만나보세요.
              </p>
              <Link href="/about">
                <Button className="w-full">
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  게임 둘러보기
                </Button>
              </Link>
            </div>

            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">개발 이야기</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                게임 개발 과정과 기술적인 이야기들을 공유합니다.
              </p>
              <Link href="/devlog">
                <Button variant="outline" className="w-full">
                  <Info className="mr-2 h-4 w-4" />
                  자세히 보기
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/minigame">
              <Button variant="secondary">
                <Dices className="mr-2 h-4 w-4" />
                미니게임 하기
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost">
                <Mail className="mr-2 h-4 w-4" />
                문의하기
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
