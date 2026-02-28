import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
      {/* Hero Section */}
      <div className="max-w-2xl text-center mb-16">
        <h1 className="mb-6 text-5xl md:text-6xl font-bold">
          Jonas Brown
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-4">
          Molecular biology & computational neuroscience student at UW
        </p>

        <p className="text-lg text-gray-500 mb-12">
          Building the future of human-AI collaboration through research, code, and relentless experimentation.
        </p>
      </div>

      {/* Social Links */}
      <SocialLinks />

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mb-12">
        <div className="p-6 rounded-lg bg-white bg-opacity-40 backdrop-blur-sm border border-gray-200 hover:bg-opacity-60 transition-all cursor-pointer">
          <h3 className="text-lg font-semibold mb-2">Projects</h3>
          <p className="text-gray-600 text-sm">
            Resume builder, health platform, personal website, job automation.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-white bg-opacity-40 backdrop-blur-sm border border-gray-200 hover:bg-opacity-60 transition-all cursor-pointer">
          <h3 className="text-lg font-semibold mb-2">Research</h3>
          <p className="text-gray-600 text-sm">
            GBM, meningiomas, cerebral organoids, multiomics, spatial biology.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-white bg-opacity-40 backdrop-blur-sm border border-gray-200 hover:bg-opacity-60 transition-all cursor-pointer">
          <h3 className="text-lg font-semibold mb-2">Stack</h3>
          <p className="text-gray-600 text-sm">
            Python, R, TypeScript, Claude AI, Next.js, computational tools.
          </p>
        </div>
      </div>

      {/* Blog Link */}
      <Link
        href="/blog/"
        className="text-blue-600 hover:text-blue-700 font-medium transition-colors mb-20"
      >
        → Read daily thoughts and progress →
      </Link>

      {/* Footer */}
      <footer className="fixed bottom-6 w-full text-center text-sm text-gray-500">
        <p>
          Building with Claude AI • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}
