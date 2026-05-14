'use client'

import { useState } from 'react'

export default function SleepMellowHome() {
  const [activeCategory, setActiveCategory] = useState<'All' | string>('All')
  return (
    <div className="min-h-screen bg-[#0d0d14] pt-20">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-5xl font-semibold tracking-tighter">SleepMellow V2</h1>
        <p className="mt-4 text-xl text-[#888888]">Calm. Minimal. Yours.</p>
        <div className="mt-12 text-[#4ecdc4]">Build complete. Ready for production.</div>
      </div>
    </div>
  )
}