import DebtTracker from '@/components/DebtTracker'
import Link from 'next/link'

export const metadata = {
  title: 'Debt Payoff Tracker',
  description: 'Track your study abroad debt payoff progress',
}

export default function DebtTrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e13] via-[#0f1419] to-[#14192a] text-[#f0f4f8]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0e13]/80 backdrop-blur-md border-b border-[#1a2332]/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-[#f0f4f8] hover:text-[#00d9ff] transition-colors">
            JB
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-sm text-[#a0aab8] hover:text-[#00d9ff] transition-colors">Work</Link>
            <Link href="/blog" className="text-sm text-[#a0aab8] hover:text-[#00d9ff] transition-colors">Blog</Link>
            <Link href="#contact" className="text-sm text-[#a0aab8] hover:text-[#00d9ff] transition-colors">Contact</Link>
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
