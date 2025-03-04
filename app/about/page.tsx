import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gamepad2, ArrowLeft, Clock, Trophy } from "lucide-react"

interface Game {
  title: string;
  description: string;
  genre: string;
  releaseDate: string;
  thumbnail: string;
}

const games: Game[] = [
  {
    title: "스페이스 어드벤처",
    description: "무한한 우주를 탐험하며 적들과 싸우는 슈팅 게임",
    genre: "슈팅",
    releaseDate: "2024.03",
    thumbnail: "/games/space-adventure.jpg"
  },
  {
    title: "퍼즐 매스터",
    description: "두뇌를 자극하는 다양한 퍼즐을 풀어보세요",
    genre: "퍼즐",
    releaseDate: "2024.02",
    thumbnail: "/games/puzzle-master.jpg"
  },
  {
    title: "닌자 러너",
    description: "끝없는 모험을 달리는 2D 플랫포머 게임",
    genre: "플랫포머",
    releaseDate: "2024.01",
    thumbnail: "/games/ninja-runner.jpg"
  }
]

export default function Games() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold">게임 라이브러리</h1>
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              홈으로
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                <Gamepad2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-gray-400" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{game.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {game.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-1" />
                    <span className="text-sm">{game.genre}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{game.releaseDate}</span>
                  </div>
                </div>
                <Button className="w-full">
                  게임 시작하기
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 