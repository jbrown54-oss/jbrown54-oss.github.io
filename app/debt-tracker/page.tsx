import DebtTracker from '@/components/DebtTracker'
import Link from 'next/link'

export const metadata = {
  title: 'Debt Payoff Tracker',
  description: 'Track your study abroad debt payoff progress',
}

import ThemeToggle from '@/components/ThemeToggle'

export default function DebtTrackerPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--color-bg-primary)]/95 backdrop-blur-md border-b border-[var(--color-bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-[var(--color-text-primary)] hover:text-[var(--color-accent-cyan)] transition-colors">
            JB
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors">Work</Link>
            <Link href="/blog" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors">Blog</Link>
            <Link href="#contact" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors">Contact</Link>
            <div className="border-l border-[var(--color-bg-tertiary)] h-6 mx-2" />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="px-6 py-32 flex justify-center">
        <div className="w-full">
          <DebtTracker />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#1a2332]/40 text-center">
        <p className="text-[#a0aab8] text-sm mb-2">Building with Next.js & Claude AI • {new Date().getFullYear()}</p>
        <p className="text-xs text-[#a0aab8]/60">Computational neuroscience @ University of Washington</p>
      </footer>
    </div>
  )
}
