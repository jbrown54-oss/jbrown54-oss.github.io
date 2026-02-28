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
    <div className="min-h-screen bg-gradient-to-b from-[#0f1419] to-[#1a2332]">
      {/* Navigation Spacer */}
      <div className="h-12" />

      {/* Hero Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9]" />
            <span className="text-sm font-semibold text-[#00d9ff] tracking-widest uppercase">Neuroscientist & Engineer</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#e0e8f0]">
            Jonas Brown
          </h1>

          <p className="text-2xl md:text-3xl font-light text-[#a0aab8] mb-6">
            Building bridges between wet lab and computation
          </p>

          <p className="text-lg text-[#a0aab8] max-w-2xl leading-relaxed mb-8">
            Computational neuroscience student at UW. Combining experimental rigor with machine learning to understand brain dynamics, design better experiments, and accelerate discovery.
          </p>

          <SocialLinks />
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-20 border-t border-[#24323f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-[#e0e8f0]">Recent Work</h2>

          {/* Computational Projects */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-[#00d9ff] mb-8 flex items-center gap-2">
              <span className="text-sm bg-[#00d9ff] text-[#0f1419] px-3 py-1 rounded font-mono">COMPUTATIONAL</span>
              Software & Data
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {computationalProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  className="group p-6 rounded-lg bg-[#1a2332] border border-[#24323f] hover:border-[#00d9ff] hover:bg-[#24323f] transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-[#e0e8f0] mb-2 group-hover:text-[#00d9ff] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[#a0aab8] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-[#0f1419] text-[#00d9ff] border border-[#00d9ff] border-opacity-30">
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
            <h3 className="text-xl font-semibold text-[#bef264] mb-8 flex items-center gap-2">
              <span className="text-sm bg-[#bef264] text-[#0f1419] px-3 py-1 rounded font-mono">WET LAB</span>
              Experimental & Research
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wetLabProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  className="group p-6 rounded-lg bg-[#1a2332] border border-[#24323f] hover:border-[#bef264] hover:bg-[#24323f] transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-[#e0e8f0] mb-2 group-hover:text-[#bef264] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[#a0aab8] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-[#0f1419] text-[#bef264] border border-[#bef264] border-opacity-30">
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
      <section className="px-4 py-20 border-t border-[#24323f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-[#e0e8f0]">Tools & Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((toolGroup, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-[#1a2332] border border-[#24323f]">
                <h4 className="text-sm font-semibold text-[#00d9ff] uppercase tracking-wider mb-4">
                  {toolGroup.category}
                </h4>
                <ul className="space-y-2">
                  {toolGroup.items.map((item, i) => (
                    <li key={i} className="text-[#a0aab8] text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 py-20 border-t border-[#24323f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-[#e0e8f0]">Latest Thoughts</h2>
            <Link href="/blog/" className="text-[#00d9ff] hover:text-[#bef264] transition-colors font-medium">
              View all →
            </Link>
          </div>

          <div className="p-8 rounded-lg bg-[#1a2332] border border-[#24323f]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-[#e0e8f0]">Welcome to my daily thoughts</h3>
              <span className="text-sm text-[#a0aab8]">2026-02-27</span>
            </div>
            <p className="text-[#a0aab8] mb-4">
              A space for tracking daily progress, productivity automation, research findings, and learning reflections.
            </p>
            <Link href="/blog/welcome" className="text-[#00d9ff] hover:text-[#bef264] transition-colors text-sm font-medium">
              Read post →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-[#24323f] text-center text-[#a0aab8] text-sm">
        <p>Building with Claude AI • {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
