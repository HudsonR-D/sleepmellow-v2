'use client'

import { useEffect } from 'react'

export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(reg => {
        console.log('[SW] Registered:', reg.scope)
      }).catch(console.error)
    }
  }, [])
  return null
}