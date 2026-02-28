import type { Metadata } from 'next'
import NeuralBackground from '@/components/NeuralBackground'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Jonas Brown | Molecular Biology & Computational Neuroscience',
  description:
    'Molecular biology and computational neuroscience student at UW. Building the future of human-AI collaboration.',
  creator: 'Jonas Brown',
  keywords: ['neuroscience', 'computational biology', 'AI', 'research'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <NeuralBackground />
        <main className="relative z-10 min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  )
}
