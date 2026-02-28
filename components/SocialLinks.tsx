'use client'

export default function SocialLinks() {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/jbrown54-oss',
      icon: '→',
      label: 'Code',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jonasbrown-mcd',
      icon: '◉',
      label: 'LinkedIn',
    },
    {
      name: 'Email',
      url: 'mailto:contact@jonasbrrow.dev',
      icon: '✉',
      label: 'Email',
    },
  ]

  return (
    <div className="flex gap-6 justify-center mb-12">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group px-4 py-2 rounded-lg border border-[#27323f] text-[#b0b8c8] hover:border-[#a78bfa] hover:text-[#a78bfa] hover:bg-[#1d2635] transition-all duration-300 flex items-center gap-2"
        >
          <span className="text-lg">{link.icon}</span>
          <span className="text-sm font-medium">{link.label}</span>
        </a>
      ))}
    </div>
  )
}
