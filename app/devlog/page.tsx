import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

interface DevLog {
  title: string;
  date: string;
  category: string;
  summary: string;
  slug: string;
}

const devLogs: DevLog[] = [
  {
    title: "Unity WebGL 최적화 이야기",
    date: "2024.03.15",
    category: "기술",
    summary: "WebGL 빌드 크기를 줄이고 로딩 시간을 개선한 과정을 공유합니다.",
    slug: "unity-webgl-optimization"
  },
  {
    title: "2D 게임 캐릭터 디자인 과정",
    date: "2024.03.10",
    category: "디자인",
    summary: "픽셀 아트 캐릭터를 디자인하고 애니메이션을 제작한 과정을 소개합니다.",
    slug: "2d-character-design"
  },
  {
    title: "게임 사운드 제작기",
    date: "2024.03.05",
    category: "사운드",
    summary: "게임의 분위기를 살리는 효과음과 배경음악 제작 과정을 공유합니다.",
    slug: "game-sound-production"
  }
]

export default function DevLog() {
  return (
    <PageTransition>
      <main className="min-h-screen p-8 md:p-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-4xl font-bold">개발 이야기</h1>
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                홈으로
              </Button>
            </Link>
          </div>

          <div className="space-y-8">
            {devLogs.map((log, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold">{log.title}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{log.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {log.summary}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm text-gray-500">{log.category}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    자세히 보기
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
} 