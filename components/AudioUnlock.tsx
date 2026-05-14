'use client'

import { useEffect } from 'react'
import { Howler } from 'howler'

export default function AudioUnlock() {
  useEffect(() => {
    const unlock = () => {
      if (Howler.ctx?.state === 'suspended') Howler.ctx.resume()
      const s = new Howl({ src: ['data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'], volume: 0 })
      s.play()
      ;['touchstart','click'].forEach(e => document.removeEventListener(e, unlock))
    }
    ;['touchstart','click'].forEach(e => document.addEventListener(e, unlock, { once: true }))
  }, [])
  return null
}