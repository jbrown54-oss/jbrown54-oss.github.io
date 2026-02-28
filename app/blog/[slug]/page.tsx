import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

// TODO: Implement dynamic blog post loading from markdown files or CMS
// This will be populated by the daily newsletter automation

interface BlogPostData {
  slug: string
  title: string
  date: string
  content: string
}

// Sample blog post structure
const blogPosts: Record<string, BlogPostData> = {
  '2026-02-27': {
    slug: '2026-02-27',
    title: 'February 27, 2026 - Daily Progress Report',
    date: '2026-02-27',
    content: `
# February 27, 2026 - Daily Progress Report

## Calendar & Meetings

- Polar plunge with Seattle Polar Plunge Club: 7:00 AM
- Early study session: 6:30–8:30 AM
- BIOC 406 lecture (Biochemistry): 11:30 AM–12:20 PM
- BIOL 359 lecture (Quantitative Biology): 12:30–1:20 PM
- Seattle Children's Hospital: Interview with Deanna Beauvais re: summer URS position (2:00–3:00 PM)
- Pike Place Market (flowers for Cullen)
- Jazz Alley performance with Cullen (free tickets from Aunt Kim)

## Projects & Work

**Research Interview - Seattle Children's**
- Met with Ivan (data analysis lead) and explored summer URS opportunity
- Strong interview performance — identified follow-up action items
- Planning to reconnect with Ivan to discuss next steps
- Reinforced commitment to research-driven career path

**Academics**
- Canvas feedback released on 5 assignments across BIOC 406 and BIOL 359
- Reviewed instructor comments on quantitative biology problem sets (L11, L12, L13)
- Completed BIOC 406 tRNA & tRNA Synthetases quiz

**Professional & Personal**
- Handshake message from Isabella Deeb (Kodely) — enrichment education company

## Learning & Research

- Reinforced biochemistry concepts from BIOC 406 lecture
- Worked through quantitative analysis methods in BIOL 359
- Gathered feedback on academic performance across multiple assignments
- Explored research opportunities in pediatric health context
- Discovered inspiration at Jazz Alley — rekindled vision for pursuing meaningful success to enable experiences with loved ones

## Physical Activity

- Participated in Seattle Polar Plunge Club: cold water immersion at 7:00 AM
- Swim session with main set: 3x200 descending speed
- Continued commitment to health and community involvement

## Key Takeaways

- **Research Momentum**: Strong interview at Seattle Children's — next step is follow-up with Ivan on data analysis side
- **Relationship & Inspiration**: Jazz Alley experience clarified long-term vision: success enables shared meaningful moments with Cullen
- **Health Discipline**: Maintained early-morning routine (polar plunge + study) + structured swim training
- **Academic Feedback Loop**: Multiple assignments graded same day — staying on top of coursework
- **Community**: Growing involvement with Seattle-based groups (polar plunge club, live music scene)

## Tomorrow's Focus

- Follow up with Ivan at Seattle Children's on summer URS details
- Review assignment feedback and incorporate into upcoming work
- Continue morning routine (study + training)
- Prepare for next lectures in BIOC 406 and BIOL 359

---

*A day anchored by discipline (early swim, polar plunge), opportunity (research interview), and inspiration (jazz with Cullen). The distinction is becoming clear: success isn't just achievement—it's the freedom to share moments that matter.*
    `,
  },
  welcome: {
    slug: 'welcome',
    title: 'Welcome to my daily thoughts',
    date: '2026-02-27',
    content: `
# Welcome to my daily thoughts

This is a space for tracking my daily progress, productivity, and reflections on research, projects, and learning.

Every evening, I'll be prompted to reflect on what I accomplished, and this log will serve as a digital notebook of my journey.

## What to expect here

- Daily progress updates on projects
- Research findings and insights
- Learning reflections
- Project milestones
- Interesting thoughts and ideas

---

Check back tomorrow for the next entry.
    `,
  },
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Post not found
          </h1>
          <Link href="/blog" style={{
            color: 'var(--accent-main)',
            textDecoration: 'none',
            fontWeight: 500
          }}>
            ← Back to blog
          </Link>
        </div>
      </div>
    )
  }

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

      {/* Blog Post */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--bg-tertiary)' }}>
        <article className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Link href="/blog" style={{
            color: 'var(--accent-main)',
            textDecoration: 'none',
            fontWeight: 500,
            display: 'inline-block',
            marginBottom: '2rem'
          }}>
            ← Back to blog
          </Link>

          <header style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              {post.title}
            </h1>
            <time style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              {post.date}
            </time>
          </header>

          <div style={{
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            fontSize: '1rem'
          }}>
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('##')) {
                return (
                  <h2 key={i} style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginTop: '2rem',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)'
                  }}>
                    {line.replace('## ', '')}
                  </h2>
                )
              }
              if (line.startsWith('#') && !line.startsWith('##')) {
                return (
                  <h1 key={i} style={{
                    fontSize: '1.875rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: 'var(--text-primary)'
                  }}>
                    {line.replace('# ', '')}
                  </h1>
                )
              }
              if (line === '---') {
                return <hr key={i} style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid var(--bg-tertiary)' }} />
              }
              if (line.trim().startsWith('-')) {
                return (
                  <li key={i} style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>
                    {line.replace('-', '').trim()}
                  </li>
                )
              }
              if (line.trim()) {
                return (
                  <p key={i} style={{ marginBottom: '1rem' }}>
                    {line}
                  </p>
                )
              }
              return null
            })}
          </div>
        </article>
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
