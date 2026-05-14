'use client'

import { Settings, Home, Radio } from 'lucide-react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a4a] bg-[#0d0d14]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#7c6fff] to-[#4ecdc4]" />
          <span className="text-xl font-semibold tracking-tight">SleepMellow</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm text-[#888888] hover:text-white">
            <Home size={16} /> Home
          </Link>
          <Link href="/radio" className="flex items-center gap-2 text-sm text-[#888888] hover:text-white">
            <Radio size={16} /> Radio
          </Link>
          <button onClick={() => {}} className="flex items-center gap-2 text-sm text-[#888888] hover:text-white">
            <Settings size={16} /> Settings
          </button>
        </div>
      </div>
    </nav>
  )
}