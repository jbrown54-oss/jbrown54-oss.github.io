'use client'

import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
}

// Placeholder for blog posts - will be populated by the daily newsletter automation
const blogPosts: BlogPost[] = [
  {
    slug: 'welcome',
    title: 'Welcome to my daily thoughts',
    date: '2026-02-27',
    excerpt:
      'A space for tracking productivity, projects, and growth. Daily reflections on research, automation, and learning.',
  },
]

export default function BlogIndex() {
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
              color: 'var(--accent-main)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              fontWeight: 500
            }}>
              Blog
            </Link>
            <Link href="/debt-tracker" style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
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

      {/* Blog Content */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--bg-tertiary)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Daily Log
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '3rem' }}>
            Thoughts, progress, and reflections on research, projects, and learning.
          </p>

          {/* Blog Posts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="card"
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    flex: 1
                  }}>
                    {post.title}
                  </h2>
                  <time style={{
                    color: 'var(--text-tertiary)',
                    fontSize: '0.875rem',
                    marginLeft: '1rem',
                    whiteSpace: 'nowrap'
                  }}>
                    {post.date}
                  </time>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {blogPosts.length === 0 && (
            <div style={{ textAlign: 'center', paddingTop: '5rem', paddingBottom: '5rem' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                No posts yet. Check back soon.
              </p>
            </div>
          )}
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
