'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Timer, Trophy, RotateCcw } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function MiniGame() {
  const [isRunning, setIsRunning] = useState(false)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)
  const [score, setScore] = useState<number | null>(null)
  const [highScore, setHighScore] = useState<number>(0)

  useEffect(() => {
    // 로컬 스토리지에서 최고 점수 불러오기
    const savedHighScore = localStorage.getItem('timeGameHighScore')
    if (savedHighScore) {
      setHighScore(Number(savedHighScore))
    }

    // cleanup 함수: 컴포넌트가 언마운트될 때 실행
    return () => {
      localStorage.removeItem('timeGameHighScore')
    }
  }, [])

  const handleStart = () => {
    setIsRunning(true)
    setStartTime(Date.now())
    setEndTime(null)
    setScore(null)
  }

  const handleStop = () => {
    if (!isRunning || !startTime) return

    setIsRunning(false)
    const endTimeMs = Date.now()
    setEndTime(endTimeMs)

    const timeDiff = (endTimeMs - startTime) / 1000 // 초 단위로 변환
    const targetTime = 5
    const timeDiffFromTarget = Math.abs(targetTime - timeDiff)
    
    // 새로운 점수 계산 방식
    let calculatedScore = 0
    if (timeDiffFromTarget <=3) {
      calculatedScore = Number((3 - timeDiffFromTarget).toFixed(2))
    }
    
    setScore(calculatedScore)

    if (calculatedScore > highScore) {
      setHighScore(calculatedScore)
      localStorage.setItem('timeGameHighScore', calculatedScore.toString())
    }
  }

  const handleReset = () => {
    setIsRunning(false)
    setStartTime(null)
    setEndTime(null)
    setScore(null)
  }

  const formatTime = (timeMs: number) => {
    return ((timeMs - startTime!) / 1000).toFixed(2)
  }

  return (
    <PageTransition>
      <main className="min-h-screen p-8 md:p-24 bg-gray-100">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-gray-800">5초 맞추기</h1>
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                홈으로
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">게임 방법</h2>
              <p className="text-gray-600">
                시작 버튼을 누르고 정확히 5초 후에 중지 버튼을 눌러보세요.
                <br />
                5초에 가까울수록 높은 점수를 얻을 수 있습니다!
                <br />
                (3초 이상 차이나면 0점)
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-gray-600" />
                  <span className="text-2xl font-mono text-gray-800">
                    {isRunning && startTime 
                      ? formatTime(Date.now()) 
                      : endTime && startTime 
                        ? formatTime(endTime)
                        : "0.00"}
                  </span>
                  초
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-lg text-gray-800">최고 점수: {highScore}점</span>
                </div>
              </div>

              <div className="text-center text-2xl font-bold">
                {isRunning ? (
                  <div className="bg-gray-600 text-white py-2 px-4 rounded-lg">
                    5초에 정지 버튼을 눌러주세요!
                  </div>
                ) : score !== null ? (
                  <div className="py-2 text-gray-800">
                    {score}점
                  </div>
                ) : null}
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1"
                  variant={isRunning ? "secondary" : "default"}
                  onClick={isRunning ? handleStop : handleStart}
                >
                  {isRunning ? "중지" : "시작"}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  disabled={isRunning || (!startTime && !endTime)}
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
} 