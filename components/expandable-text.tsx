'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

export function ExpandableText({ text, maxLength = 50 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldShowToggle = text.length > maxLength

  const displayText = shouldShowToggle && !isExpanded 
    ? `${text.slice(0, maxLength)}...` 
    : text

  return (
    <div className="space-y-1">
      <motion.p 
        className="text-gray-600 dark:text-gray-300"
        initial={false}
        animate={{ height: "auto" }}
      >
        {displayText}
      </motion.p>
      {shouldShowToggle && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-0.5"
        >
          {isExpanded ? (
            <>
              접기 <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              더 보기 <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  )
} 