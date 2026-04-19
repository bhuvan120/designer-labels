const links = [
  { href: '#explore', label: 'Explore' },
  { href: '#about', label: 'About' },
  { href: '#join', label: 'Design Request' },
  { href: '#contact', label: 'Contact' },
]

function InstagramIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <header className="site-header">
      <a href="#home" className="brand-mark">
        Niharika Labels
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="https://www.instagram.com/label_by_niharikabadri/"
        className="instagram-link nav-instagram"
        target="_blank"
        rel="noreferrer"
        aria-label="Niharika on Instagram"
      >
        <InstagramIcon />
        <span>label_by_niharikabadri</span>
      </a>
    </header>
  )
}
