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
