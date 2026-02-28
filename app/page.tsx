import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  const computationalProjects = [
    {
      title: 'Personal Website',
      description: 'Neural network visualization with cursor-reactive canvas. Built with Next.js, TypeScript, and Canvas API. Deployed on GitHub Pages with CI/CD automation.',
      tags: ['Next.js', 'TypeScript', 'Canvas', 'React'],
      link: 'https://github.com/jbrown54-oss/jbrown54-oss.github.io',
      icon: '→',
    },
    {
      title: 'Resume Builder',
      description: 'AI-powered resume optimization leveraging Claude API to generate tailored bullets. Automates job application workflows with intelligent bullet point synthesis.',
      tags: ['Claude API', 'Python', 'Data Processing'],
      link: '#',
      icon: '→',
    },
  ]

  const wetLabProjects = [
    {
      title: 'Emerson Lab Research',
      description: 'Cerebral organoid research investigating GBM and meningioma oncology. Single-cell transcriptomics analysis and precision oncology approaches.',
      tags: ['scRNA-seq', 'Organoids', 'Oncology'],
      link: '#',
      icon: '→',
    },
    {
      title: 'Multiomics Analysis',
      description: 'Integration of spatial biology with transcriptomics data. Custom analysis pipelines for complex multi-modal datasets with advanced visualization.',
      tags: ['Spatial Bio', 'Data Integration', 'Analysis'],
      link: '#',
      icon: '→',
    },
  ]

  const tools = [
    { category: 'Languages', items: ['Python', 'R', 'TypeScript', 'Bash', 'SQL'], colorVar: 'var(--color-accent-cyan)' },
    { category: 'ML/AI', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Claude API'], colorVar: 'var(--color-accent-cyan)' },
    { category: 'Data', items: ['Pandas', 'Seurat', 'Plotly', 'D3.js'], colorVar: 'var(--color-accent-purple)' },
    { category: 'Lab', items: ['Fiji', 'NEURON', 'Jupyter', 'Nextflow'], colorVar: 'var(--color-accent-lime)' },
  ]

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--color-bg-primary)]/95 backdrop-blur-md border-b border-[var(--color-bg-tertiary)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-[var(--color-text-primary)] hover:text-[var(--color-accent-cyan)] transition-colors">
            JB
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors">Work</Link>
            <Link href="/blog" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors">Blog</Link>
            <Link href="/debt-tracker" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors">Debt Tracker</Link>
            <Link href="#contact" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors">Contact</Link>
            <div className="border-l border-[var(--color-bg-tertiary)] h-6 mx-2" />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-48 pb-32 md:pt-56 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[var(--color-accent-cyan)]/10 to-transparent rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full bg-[var(--color-accent-cyan)]/10 border border-[var(--color-accent-cyan)]/30 hover:border-[var(--color-accent-cyan)]/50 transition-all">
            <span className="w-2 h-2 bg-[var(--color-accent-cyan)] rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-[var(--color-accent-cyan)] tracking-widest uppercase">Neuroscientist & Engineer</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-[var(--color-text-primary)]">
            Jonas Brown
          </h1>

          <p className="text-2xl md:text-3xl font-light text-[var(--color-text-secondary)] mb-6 leading-relaxed mx-auto">
            Building the intersection of <span className="text-[var(--color-accent-cyan)] font-medium">wet lab</span> and <span className="text-[var(--color-accent-purple)] font-medium">computation</span>
          </p>

          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 font-light mx-auto max-w-2xl">
            Computational neuroscience student at University of Washington. Combining experimental rigor with machine learning to understand brain dynamics, design better experiments, and accelerate discovery.
          </p>

          <div className="mb-16 flex justify-center">
            <SocialLinks />
          </div>

          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            <a href="#work" className="px-8 py-3 rounded-lg bg-[var(--color-accent-cyan)] text-[var(--color-bg-primary)] font-semibold hover:bg-[var(--color-accent-cyan-dark)] transition-all hover:shadow-lg hover:translate-y-[-2px]">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-lg border border-[var(--color-accent-cyan)] text-[var(--color-accent-cyan)] font-semibold hover:bg-[var(--color-accent-cyan)]/10 transition-all">
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center pt-8 border-t border-[var(--color-bg-tertiary)]">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-[var(--color-text-secondary)] tracking-widest uppercase font-medium">Scroll to explore</span>
              <svg className="w-5 h-5 text-[var(--color-accent-cyan)] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="px-6 py-48 border-t border-[var(--color-bg-tertiary)] relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-[var(--color-accent-cyan)] tracking-widest uppercase">Featured Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[var(--color-text-primary)]">Recent Projects</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mx-auto max-w-2xl">Computational and experimental work bridging science and software engineering</p>
          </div>

          {/* Computational Projects */}
          <div className="mb-32">
            <div className="mb-12 pb-6 border-b border-[var(--color-bg-tertiary)] text-center">
              <h3 className="text-sm font-bold text-[var(--color-accent-cyan)] tracking-widest uppercase">Computational</h3>
              <p className="text-[var(--color-text-secondary)] text-sm mt-2">Software & Data Systems</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {computationalProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  className="group relative overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-bg-tertiary)] hover:border-[var(--color-accent-cyan)]/50 transition-all duration-300 hover:shadow-lg p-8 hover:translate-y-[-4px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-cyan)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-cyan)] transition-colors leading-tight max-w-[80%]">
                        {project.title}
                      </h4>
                      <span className="text-2xl text-[var(--color-accent-cyan)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                        {project.icon}
                      </span>
                    </div>
                    <p className="text-[var(--color-text-secondary)] mb-8 text-base leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/30 font-medium group-hover:bg-[var(--color-accent-cyan)]/20 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Wet Lab Projects */}
          <div>
            <div className="mb-12 pb-6 border-b border-[var(--color-bg-tertiary)] text-center">
              <h3 className="text-sm font-bold text-[var(--color-accent-lime)] tracking-widest uppercase">Wet Lab</h3>
              <p className="text-[var(--color-text-secondary)] text-sm mt-2">Experimental & Research</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {wetLabProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  className="group relative overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-bg-tertiary)] hover:border-[var(--color-accent-lime)]/50 transition-all duration-300 hover:shadow-lg p-8 hover:translate-y-[-4px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-lime)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-lime)] transition-colors leading-tight max-w-[80%]">
                        {project.title}
                      </h4>
                      <span className="text-2xl text-[var(--color-accent-lime)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                        {project.icon}
                      </span>
                    </div>
                    <p className="text-[var(--color-text-secondary)] mb-8 text-base leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-[var(--color-accent-lime)]/10 text-[var(--color-accent-lime)] border border-[var(--color-accent-lime)]/30 font-medium group-hover:bg-[var(--color-accent-lime)]/20 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-48 border-t border-[var(--color-bg-tertiary)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-[var(--color-accent-cyan)] tracking-widest uppercase">Technical Stack</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[var(--color-text-primary)]">Skills & Tools</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mx-auto max-w-2xl">Languages, frameworks, and tools I use to build things</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((toolGroup, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-bg-tertiary)] transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:border-current"
                style={{ '--hover-color': toolGroup.colorVar } as React.CSSProperties}
              >
                <h4
                  className="text-xs font-bold tracking-widest uppercase mb-6 transition-colors"
                  style={{ color: toolGroup.colorVar }}
                >
                  {toolGroup.category}
                </h4>
                <ul className="space-y-3">
                  {toolGroup.items.map((item, i) => (
                    <li key={i} className="text-[var(--color-text-secondary)] text-sm font-medium group-hover:text-[var(--color-text-primary)] transition-colors">
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
      <section className="px-6 py-48 border-t border-[var(--color-bg-tertiary)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-[var(--color-accent-purple)] tracking-widest uppercase">Writing</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[var(--color-text-primary)]">Latest Thoughts</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8">Reflections on research, learning, and building</p>
            <Link href="/blog/" className="inline-block text-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan-dark)] transition-colors font-semibold text-sm px-4 py-2 rounded-lg border border-[var(--color-accent-cyan)]/30 hover:border-[var(--color-accent-cyan)] hover:bg-[var(--color-accent-cyan)]/5">
              View all →
            </Link>
          </div>

          <a href="/blog/welcome" className="group block relative overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-bg-tertiary)] hover:border-[var(--color-accent-purple)]/50 transition-all duration-300 hover:shadow-lg p-8 md:p-10 hover:translate-y-[-4px] max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-purple)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-purple)] transition-colors mb-2">
                  Welcome to my daily thoughts
                </h3>
                <p className="text-[var(--color-text-secondary)]">Latest update: 2026-02-27</p>
              </div>
              <span className="text-2xl text-[var(--color-accent-purple)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              A space for tracking daily progress, productivity automation insights, research findings, and learning reflections across neuroscience, engineering, and AI.
            </p>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-48 border-t border-[var(--color-bg-tertiary)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold text-[var(--color-accent-cyan)] tracking-widest uppercase">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-[var(--color-text-primary)]">Let's Talk</h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in collaboration, research, or just want to chat? Reach out via email or social media.
          </p>
          <a
            href="mailto:jonas.s.brown@hotmail.com"
            className="inline-block px-8 py-4 rounded-lg bg-[var(--color-accent-cyan)] text-[var(--color-bg-primary)] font-semibold hover:bg-[var(--color-accent-cyan-dark)] transition-all hover:shadow-lg hover:translate-y-[-2px]"
          >
            Send an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[var(--color-bg-tertiary)] text-center">
        <p className="text-[var(--color-text-secondary)] text-sm mb-2">Building with Next.js & Claude AI • {new Date().getFullYear()}</p>
        <p className="text-xs text-[var(--color-text-tertiary)]">Computational neuroscience @ University of Washington</p>
      </footer>
    </div>
  )
}
