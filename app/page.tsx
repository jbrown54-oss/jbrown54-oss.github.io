'use client'

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
    },
    {
      title: 'Resume Builder',
      description: 'AI-powered resume optimization leveraging Claude API to generate tailored bullets. Automates job application workflows with intelligent bullet point synthesis.',
      tags: ['Claude API', 'Python', 'Data Processing'],
      link: '#',
    },
  ]

  const wetLabProjects = [
    {
      title: 'Emerson Lab Research',
      description: 'Cerebral organoid research investigating GBM and meningioma oncology. Single-cell transcriptomics analysis and precision oncology approaches.',
      tags: ['scRNA-seq', 'Organoids', 'Oncology'],
      link: '#',
    },
    {
      title: 'Multiomics Analysis',
      description: 'Integration of spatial biology with transcriptomics data. Custom analysis pipelines for complex multi-modal datasets with advanced visualization.',
      tags: ['Spatial Bio', 'Data Integration', 'Analysis'],
      link: '#',
    },
  ]

  const skills = [
    { category: 'Languages', items: ['Python', 'R', 'TypeScript', 'Bash', 'SQL'] },
    { category: 'ML/AI', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Claude API'] },
    { category: 'Data', items: ['Pandas', 'Seurat', 'Plotly', 'D3.js'] },
    { category: 'Lab', items: ['Fiji', 'NEURON', 'Jupyter', 'Nextflow'] },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
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
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
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

      {/* Hero Section */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--bg-tertiary)' }} className="text-center">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
            Jonas Brown
          </h1>

          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, lineHeight: 1.2, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Building the intersection of wet lab and computation
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Computational neuroscience student at University of Washington. Combining experimental rigor with machine learning to understand brain dynamics, design better experiments, and accelerate discovery.
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <SocialLinks />
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href="#work" className="btn btn-primary" style={{ backgroundColor: 'var(--accent-main)', color: 'var(--bg-primary)' }}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ borderColor: 'var(--accent-main)', color: 'var(--accent-main)' }}>
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--bg-tertiary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-main)', marginBottom: '1rem' }}>
              My Work
            </h3>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Projects
            </h2>
          </div>

          {/* Computational Projects */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--text-primary)' }}>
              Computational
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {computationalProjects.map((project) => (
                <a key={project.title} href={project.link} className="card" style={{ textDecoration: 'none' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    {project.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: '0.875rem',
                        padding: '0.25rem 0.75rem',
                        backgroundColor: 'var(--bg-tertiary)',
                        borderRadius: '0.25rem',
                        color: 'var(--text-secondary)'
                      }}>
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
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--text-primary)' }}>
              Wet Lab
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {wetLabProjects.map((project) => (
                <a key={project.title} href={project.link} className="card" style={{ textDecoration: 'none' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    {project.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: '0.875rem',
                        padding: '0.25rem 0.75rem',
                        backgroundColor: 'var(--bg-tertiary)',
                        borderRadius: '0.25rem',
                        color: 'var(--text-secondary)'
                      }}>
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
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--bg-tertiary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-main)', marginBottom: '1rem' }}>
              Skills
            </h3>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Tools & Technologies
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="card">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--accent-main)' }}>
                  {skillGroup.category}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {skillGroup.items.map((item) => (
                    <span key={item} style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                      • {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--bg-tertiary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-main)', marginBottom: '1rem' }}>
              Blog
            </h3>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Latest Thoughts
            </h2>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Link href="/blog/welcome" className="card" style={{ textDecoration: 'none', display: 'block' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Welcome to My Blog
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
                Thoughts on neuroscience, computation, and building at the intersection of wet lab and code.
              </p>
              <p style={{ color: 'var(--accent-main)', fontSize: '0.875rem', fontWeight: 600 }}>
                Read More →
              </p>
            </Link>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog" className="btn btn-secondary" style={{ borderColor: 'var(--accent-main)', color: 'var(--accent-main)' }}>
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--bg-tertiary)' }} className="text-center">
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>
            Let's Talk
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Interested in collaborating or just want to connect? I'd love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:jonas.s.brown@hotmail.com" className="btn btn-primary" style={{ backgroundColor: 'var(--accent-main)', color: 'var(--bg-primary)' }}>
              Send an Email
            </a>
            <div>
              <SocialLinks />
            </div>
          </div>
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
