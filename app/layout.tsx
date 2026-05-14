import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav'
import ServiceWorkerRegistrar from '../components/ServiceWorkerRegistrar'
import AudioUnlock from '../components/AudioUnlock'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'SleepMellow — Sleep Deeper',
  description: 'Sleep deeper with beautiful ambient sounds, a powerful mixer, live radio, and a gentle sleep timer. Free to start.',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#0d0d14] text-[#e8e8f0] antialiased">
        <Nav />
        <ServiceWorkerRegistrar />
        <AudioUnlock />
        {children}
      </body>
    </html>
  )
}