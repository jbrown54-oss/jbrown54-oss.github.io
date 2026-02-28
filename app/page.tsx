import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  const computationalProjects = [
    {
      title: 'Personal Website',
      description: 'Neural network visualization with cursor-reactive canvas. Next.js + TypeScript deployed to GitHub Pages.',
      tags: ['Next.js', 'TypeScript', 'Canvas', 'React'],
      link: 'https://github.com/jbrown54-oss/jbrown54-oss.github.io',
    },
    {
      title: 'Resume Builder',
      description: 'AI-powered resume optimization for job applications. Automated generation of tailored bullets.',
      tags: ['Claude API', 'Python', 'Data Processing'],
      link: '#',
    },
  ]

  const wetLabProjects = [
    {
      title: 'Emerson Lab',
      description: 'Cerebral organoid research. Single-cell transcriptomics for precision oncology (GBM/meningiomas).',
      tags: ['scRNA-seq', 'Organoids', 'Oncology'],
      link: '#',
    },
    {
      title: 'Multiomics Analysis',
      description: 'Integrating spatial biology with transcriptomics. Custom analysis pipelines for complex datasets.',
      tags: ['Spatial Bio', 'Data Integration', 'Analysis'],
      link: '#',
    },
  ]

  const tools = [
    { category: 'Languages', items: ['Python', 'R', 'TypeScript', 'Bash', 'SQL'] },
    { category: 'ML/AI', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Claude API'] },
    { category: 'Data', items: ['Pandas', 'Seurat', 'Plotly', 'D3.js'] },
    { category: 'Lab', items: ['Fiji', 'NEURON', 'Jupyter', 'Nextflow'] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08090f] via-[#131824] to-[#1d2635]">
      {/* Hero Section - Centered & Refined */}
      <section className="px-4 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Accent Line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#a78bfa]" />
            <span className="text-xs font-bold text-[#a78bfa] tracking-widest uppercase">Neuroscientist & Engineer</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#a78bfa]" />
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight animate-fadeIn">
            Jonas Brown
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-light text-[#a78bfa] mb-8 leading-relaxed">
            Building bridges between wet lab and computation
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-[#b0b8c8] max-w-2xl mx-auto leading-relaxed mb-12">
            Computational neuroscience student at UW. Combining experimental rigor with machine learning to understand brain dynamics, design better experiments, and accelerate discovery.
          </p>

          {/* Social Links */}
          <SocialLinks />

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center">
            <div className="text-[#8a92a6] text-xs tracking-widest uppercase animate-pulse">
              Scroll to explore
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-32 border-t border-[#27323f]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Recent Work</h2>
            <p className="text-lg text-[#b0b8c8]">Computational and experimental projects bridging science and technology</p>
          </div>

          {/* Computational Projects */}
          <div className="mb-24">
            <h3 className="text-lg font-semibold text-[#a78bfa] mb-12 flex items-center gap-3">
              <span className="text-xs bg-[#6366f1] text-[#f5f7fb] px-4 py-2 rounded-full font-bold tracking-wider">COMPUTATIONAL</span>
              <span className="text-[#b0b8c8]">Software & Data Systems</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {computationalProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  className="group relative p-8 rounded-xl bg-[#131824] border border-[#27323f] hover:border-[#a78bfa] hover:bg-[#1d2635] transition-all duration-300 hover:shadow-lg hover:shadow-[#a78bfa]/15"
                >
                  <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                  <h4 className="text-xl font-bold text-[#f5f7fb] mb-3 group-hover:text-[#a78bfa] transition-colors pr-8">
                    {project.title}
                  </h4>
                  <p className="text-[#b0b8c8] mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#08090f] text-[#a78bfa] border border-[#6366f1] border-opacity-40 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Wet Lab Projects */}
          <div>
            <h3 className="text-lg font-semibold text-[#8b5cf6] mb-12 flex items-center gap-3">
              <span className="text-xs bg-[#8b5cf6] text-[#f5f7fb] px-4 py-2 rounded-full font-bold tracking-wider">WET LAB</span>
              <span className="text-[#b0b8c8]">Experimental & Research</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {wetLabProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  className="group relative p-8 rounded-xl bg-[#131824] border border-[#27323f] hover:border-[#8b5cf6] hover:bg-[#1d2635] transition-all duration-300 hover:shadow-lg hover:shadow-[#8b5cf6]/15"
                >
                  <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                  <h4 className="text-xl font-bold text-[#f5f7fb] mb-3 group-hover:text-[#8b5cf6] transition-colors pr-8">
                    {project.title}
                  </h4>
                  <p className="text-[#b0b8c8] mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#08090f] text-[#8b5cf6] border border-[#8b5cf6] border-opacity-40 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-32 border-t border-[#27323f]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Tools & Skills</h2>
            <p className="text-lg text-[#b0b8c8]">Languages, frameworks, and tools I use daily</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((toolGroup, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-[#131824] border border-[#27323f] hover:border-[#a78bfa]/40 transition-colors duration-300">
                <h4 className="text-xs font-bold text-[#a78bfa] uppercase tracking-widest mb-6">
                  {toolGroup.category}
                </h4>
                <ul className="space-y-3">
                  {toolGroup.items.map((item, i) => (
                    <li key={i} className="text-[#b0b8c8] text-sm font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 py-32 border-t border-[#27323f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-20">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">Latest Thoughts</h2>
              <p className="text-lg text-[#b0b8c8]">Writing about research, learning, and building</p>
            </div>
            <Link href="/blog/" className="text-[#a78bfa] hover:text-[#8b5cf6] transition-colors font-medium whitespace-nowrap ml-4">
              View all →
            </Link>
          </div>

          <div className="group relative p-8 rounded-xl bg-[#131824] border border-[#27323f] hover:border-[#a78bfa] hover:bg-[#1d2635] transition-all duration-300 hover:shadow-lg hover:shadow-[#a78bfa]/15">
            <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
            <div className="flex items-start justify-between mb-4 pr-8">
              <h3 className="text-2xl font-bold text-[#f5f7fb] group-hover:text-[#a78bfa] transition-colors">Welcome to my daily thoughts</h3>
              <span className="text-sm text-[#8a92a6] whitespace-nowrap ml-4">2026-02-27</span>
            </div>
            <p className="text-[#b0b8c8] mb-6 text-base leading-relaxed max-w-2xl">
              A space for tracking daily progress, productivity automation, research findings, and learning reflections.
            </p>
            <Link href="/blog/welcome" className="text-[#a78bfa] hover:text-[#8b5cf6] transition-colors text-sm font-medium">
              Read post →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-16 border-t border-[#27323f] text-center text-[#b0b8c8] text-sm">
        <p className="mb-2">Building with Claude AI • {new Date().getFullYear()}</p>
        <p className="text-xs text-[#8a92a6]">Computational neuroscience @ UW</p>
      </footer>
    </div>
  )
}
