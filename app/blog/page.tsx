import Link from 'next/link'

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
    <div className="flex flex-col items-center min-h-screen px-4 py-20">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl font-bold mb-4">Daily Log</h1>
        <p className="text-gray-600 mb-12">
          Thoughts, progress, and reflections on research, projects, and learning.
        </p>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="block p-6 rounded-lg bg-white bg-opacity-40 backdrop-blur-sm border border-gray-200 hover:bg-opacity-60 transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <time className="text-gray-500 text-sm">{post.date}</time>
              </div>
              <p className="text-gray-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No posts yet. Check back soon.</p>
          </div>
        )}
      </div>
    </div>
  )
}
