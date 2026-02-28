'use client'

export default function SocialLinks() {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/jbrown54-oss',
      icon: '✌',
      label: 'github.com/jbrown54-oss',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jonasbrown-mcd',
      icon: '🔗',
      label: 'linkedin.com/in/jonasbrown',
    },
    {
      name: 'Email',
      url: 'mailto:contact@jonasbrrow.dev',
      icon: '✉',
      label: 'contact@jonasbrrow.dev',
    },
  ]

  return (
    <div className="flex gap-8 justify-center mb-12">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <span className="text-4xl group-hover:scale-110 transition-transform">{link.icon}</span>
          <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  )
}
