import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Github, Twitter, Gamepad2 } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function Contact() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="max-w-3xl w-full space-y-8">
          <h1 className="text-4xl font-bold">게임 개발자 에보시</h1>
          
          <div className="space-y-6">
            <p className="text-lg">
              Unity와 WebGL을 활용한 웹 게임 개발에 대한 문의나 협업 제안을 환영합니다.
              게임 개발에 대한 기술적인 질문이나 새로운 프로젝트 제안도 언제든 환영합니다.
            </p>
            
            <div className="space-y-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>ebossi.games@example.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5" />
                <span>github.com/ebossi-games</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5" />
                <span>@ebossi_games</span>
              </div>

              <div className="flex items-center gap-3">
                <Gamepad2 className="w-5 h-5" />
                <span>Unity Connect: ebossi</span>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">협업 문의</h2>
              <p className="mb-4">
                다음과 같은 분야의 협업을 찾고 있습니다:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>게임 디자인 및 기획</li>
                <li>2D/3D 아트워크</li>
                <li>사운드 디자인</li>
                <li>게임 QA 테스트</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between">
            <Link href="/">
              <Button variant="outline">홈으로 돌아가기</Button>
            </Link>
            <Link href="/about">
              <Button>게임 둘러보기</Button>
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  )
} 