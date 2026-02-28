'use client'

import DebtTracker from '@/components/DebtTracker'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function DebtTrackerPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderBottom: '1px solid var(--bg-tertiary)',
        backdropFilter: 'blur(10px)',
      }}>
        <style>{`
          [data-theme="dark"] nav {
            background-color: rgba(26, 20, 16, 0.95);
          }
          nav a:hover {
            color: var(--accent-main);
          }
        `}</style>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem' }}>
          <Link href="/" style={{
            fontWeight: 'bold',
            fontSize: '1.25rem',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}>
            JB
          </Link>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/" style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}>
              Work
            </Link>
            <Link href="/blog" style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}>
              Blog
            </Link>
            <Link href="/debt-tracker" style={{
              fontSize: '0.875rem',
              color: 'var(--accent-main)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              fontWeight: 500,
            }}>
              Debt Tracker
            </Link>
            <Link href="#contact" style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}>
              Contact
            </Link>
            <div style={{ borderLeft: '1px solid var(--bg-tertiary)', height: '1.5rem', margin: '0 0.5rem' }} />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Content */}
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <DebtTracker />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 1.5rem', borderTop: '1px solid var(--bg-tertiary)', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
          Built with Next.js & TypeScript • {new Date().getFullYear()}
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
          Computational neuroscience @ University of Washington
        </p>
      </footer>
    </div>
  )
}
