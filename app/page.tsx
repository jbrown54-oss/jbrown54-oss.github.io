import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'

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
    { category: 'Languages', items: ['Python', 'R', 'TypeScript', 'Bash', 'SQL'], colorClass: 'text-[#00d9ff]', borderClass: 'border-[#00d9ff]/20 hover:border-[#00d9ff]/60' },
    { category: 'ML/AI', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Claude API'], colorClass: 'text-[#00d9ff]', borderClass: 'border-[#00d9ff]/20 hover:border-[#00d9ff]/60' },
    { category: 'Data', items: ['Pandas', 'Seurat', 'Plotly', 'D3.js'], colorClass: 'text-[#a78bfa]', borderClass: 'border-[#a78bfa]/20 hover:border-[#a78bfa]/60' },
    { category: 'Lab', items: ['Fiji', 'NEURON', 'Jupyter', 'Nextflow'], colorClass: 'text-[#bef264]', borderClass: 'border-[#bef264]/20 hover:border-[#bef264]/60' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e13] via-[#0f1419] to-[#14192a] text-[#f0f4f8]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0e13]/80 backdrop-blur-md border-b border-[#1a2332]/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-[#f0f4f8] hover:text-[#00d9ff] transition-colors">
            JB
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-sm text-[#a0aab8] hover:text-[#00d9ff] transition-colors">Work</Link>
            <Link href="/blog" className="text-sm text-[#a0aab8] hover:text-[#00d9ff] transition-colors">Blog</Link>
            <Link href="/debt-tracker" className="text-sm text-[#a0aab8] hover:text-[#00d9ff] transition-colors">Debt Tracker</Link>
            <Link href="#contact" className="text-sm text-[#a0aab8] hover:text-[#00d9ff] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-48 pb-32 md:pt-56 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#00d9ff]/5 to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full bg-[#00d9ff]/5 border border-[#00d9ff]/20 hover:border-[#00d9ff]/40 transition-all">
            <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-[#00d9ff] tracking-widest uppercase">Neuroscientist & Engineer</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#f0f4f8] via-[#d4dce8] to-[#00d9ff]">
            Jonas Brown
          </h1>

          <p className="text-2xl md:text-3xl font-light text-[#a0aab8] mb-6 leading-relaxed max-w-3xl">
            Building the intersection of <span className="text-[#00d9ff] font-medium">wet lab</span> and <span className="text-[#a78bfa] font-medium">computation</span>
          </p>

          <p className="text-base md:text-lg text-[#a0aab8] max-w-3xl leading-relaxed mb-10 font-light">
            Computational neuroscience student at University of Washington. Combining experimental rigor with machine learning to understand brain dynamics, design better experiments, and accelerate discovery.
          </p>

          <div className="mb-16">
            <SocialLinks />
          </div>

          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#work" className="px-8 py-3 rounded-lg bg-[#00d9ff] text-[#0a0e13] font-semibold hover:bg-[#00b8d4] transition-all hover:shadow-lg hover:shadow-[#00d9ff]/20 hover:translate-y-[-2px]">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-lg border border-[#a0aab8] text-[#f0f4f8] font-semibold hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all">
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center pt-8 border-t border-[#1a2332]/50">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-[#a0aab8] tracking-widest uppercase font-medium">Scroll to explore</span>
              <svg className="w-5 h-5 text-[#00d9ff] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="px-6 py-48 border-t border-[#1a2332]/40 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-[#00d9ff] tracking-widest uppercase">Featured Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#f0f4f8]">Recent Projects</h2>
            <p className="text-lg text-[#a0aab8] max-w-2xl">Computational and experimental work bridging science and software engineering</p>
          </div>

          {/* Computational Projects */}
          <div className="mb-32">
            <div className="mb-12 pb-6 border-b border-[#1a2332]/40">
              <h3 className="text-sm font-bold text-[#00d9ff] tracking-widest uppercase">Computational</h3>
              <p className="text-[#a0aab8] text-sm mt-2">Software & Data Systems</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {computationalProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#14192a] border border-[#1a2332] hover:border-[#00d9ff]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00d9ff]/10 p-8 hover:translate-y-[-4px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-2xl font-bold text-[#f0f4f8] group-hover:text-[#00d9ff] transition-colors leading-tight max-w-[80%]">
                        {project.title}
                      </h4>
                      <span className="text-2xl text-[#00d9ff] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                        {project.icon}
                      </span>
                    </div>
                    <p className="text-[#a0aab8] mb-8 text-base leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 font-medium group-hover:bg-[#00d9ff]/20 transition-colors">
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
            <div className="mb-12 pb-6 border-b border-[#1a2332]/40">
              <h3 className="text-sm font-bold text-[#bef264] tracking-widest uppercase">Wet Lab</h3>
              <p className="text-[#a0aab8] text-sm mt-2">Experimental & Research</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {wetLabProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#14192a] border border-[#1a2332] hover:border-[#bef264]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#bef264]/10 p-8 hover:translate-y-[-4px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#bef264]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-2xl font-bold text-[#f0f4f8] group-hover:text-[#bef264] transition-colors leading-tight max-w-[80%]">
                        {project.title}
                      </h4>
                      <span className="text-2xl text-[#bef264] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                        {project.icon}
                      </span>
                    </div>
                    <p className="text-[#a0aab8] mb-8 text-base leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-[#bef264]/10 text-[#bef264] border border-[#bef264]/30 font-medium group-hover:bg-[#bef264]/20 transition-colors">
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
      <section className="px-6 py-48 border-t border-[#1a2332]/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-[#00d9ff] tracking-widest uppercase">Technical Stack</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#f0f4f8]">Skills & Tools</h2>
            <p className="text-lg text-[#a0aab8] max-w-2xl">Languages, frameworks, and tools I use to build things</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((toolGroup, idx) => (
              <div 
                key={idx}
                className={`group p-8 rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#14192a] border transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] ${toolGroup.borderClass}`}
              >
                <h4 className={`text-xs font-bold tracking-widest uppercase mb-6 transition-colors ${toolGroup.colorClass}`}>
                  {toolGroup.category}
                </h4>
                <ul className="space-y-3">
                  {toolGroup.items.map((item, i) => (
                    <li key={i} className="text-[#a0aab8] text-sm font-medium group-hover:text-[#f0f4f8] transition-colors">
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
      <section className="px-6 py-48 border-t border-[#1a2332]/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex items-center justify-between">
            <div>
              <div className="inline-block mb-4">
                <span className="text-xs font-bold text-[#a78bfa] tracking-widest uppercase">Writing</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#f0f4f8]">Latest Thoughts</h2>
              <p className="text-lg text-[#a0aab8]">Reflections on research, learning, and building</p>
            </div>
            <Link href="/blog/" className="text-[#00d9ff] hover:text-[#00b8d4] transition-colors font-semibold whitespace-nowrap text-sm ml-4 mt-auto px-4 py-2 rounded-lg border border-[#00d9ff]/30 hover:border-[#00d9ff] hover:bg-[#00d9ff]/5">
              View all →
            </Link>
          </div>

          <a href="/blog/welcome" className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#14192a] border border-[#1a2332] hover:border-[#a78bfa]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#a78bfa]/10 p-8 md:p-10 hover:translate-y-[-4px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#a78bfa]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#f0f4f8] group-hover:text-[#a78bfa] transition-colors mb-2">
                  Welcome to my daily thoughts
                </h3>
                <p className="text-[#a0aab8]">Latest update: 2026-02-27</p>
              </div>
              <span className="text-2xl text-[#a78bfa] opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </div>
            <p className="text-[#a0aab8] text-lg leading-relaxed max-w-2xl">
              A space for tracking daily progress, productivity automation insights, research findings, and learning reflections across neuroscience, engineering, and AI.
            </p>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-48 border-t border-[#1a2332]/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold text-[#00d9ff] tracking-widest uppercase">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-[#f0f4f8]">Let's Talk</h2>
          <p className="text-lg text-[#a0aab8] mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in collaboration, research, or just want to chat? Reach out via email or social media.
          </p>
          <a 
            href="mailto:jonas.s.brown@hotmail.com" 
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] text-[#0a0e13] font-semibold hover:shadow-lg hover:shadow-[#00d9ff]/30 transition-all hover:translate-y-[-2px]"
          >
            Send an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#1a2332]/40 text-center">
        <p className="text-[#a0aab8] text-sm mb-2">Building with Next.js & Claude AI • {new Date().getFullYear()}</p>
        <p className="text-xs text-[#a0aab8]/60">Computational neuroscience @ University of Washington</p>
      </footer>
    </div>
  )
}
