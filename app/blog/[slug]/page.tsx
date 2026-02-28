import Link from 'next/link'

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
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Link href="/blog/" className="text-blue-600 hover:text-blue-700">
          ← Back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-20">
      <article className="max-w-2xl w-full">
        <Link href="/blog/" className="text-blue-600 hover:text-blue-700 font-medium mb-8 inline-block">
          ← Back to blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <time className="text-gray-500">{post.date}</time>
        </header>

        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('##')) {
              return (
                <h2 key={i} className="text-2xl font-bold mt-6 mb-4">
                  {line.replace('## ', '')}
                </h2>
              )
            }
            if (line.startsWith('#')) {
              return (
                <h1 key={i} className="text-3xl font-bold mb-4">
                  {line.replace('# ', '')}
                </h1>
              )
            }
            if (line === '---') {
              return <hr key={i} className="my-8" />
            }
            if (line.trim()) {
              return (
                <p key={i} className="mb-4">
                  {line}
                </p>
              )
            }
            return null
          })}
        </div>
      </article>
    </div>
  )
}
