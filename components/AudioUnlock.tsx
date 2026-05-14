'use client'

import { useEffect } from 'react'
import { Howler } from 'howler'

export default function AudioUnlock() {
  useEffect(() => {
    const unlock = () => {
      if (Howler.ctx && Howler.ctx.state === 'suspended') {
        Howler.ctx.resume()
      }
      const sound = new Howl({ src: ['data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'], volume: 0 })
      sound.play()
      document.removeEventListener('touchstart', unlock)
      document.removeEventListener('click', unlock)
    }
    document.addEventListener('touchstart', unlock, { once: true })
    document.addEventListener('click', unlock, { once: true })
  }, [])
  return null
}