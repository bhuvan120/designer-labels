import { useEffect, useState } from 'react'
import { getCustomOrderMessage, getWhatsAppUrl } from '../utils/whatsapp.js'

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/products?category=Womenswear', label: 'Womenswear' },
  { href: '/products?category=Menswear', label: 'Menswear' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function SearchIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m17 17 4 4" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 19.5 5.7 15.4a7.2 7.2 0 1 1 2.9 2.9l-4.1 1.2Z" />
      <path d="M9.2 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4l.6 1.4c.1.2.1.4-.1.6l-.4.5c-.1.1-.2.3 0 .5.4.8 1.1 1.5 2 2 .2.1.4.1.5-.1l.6-.7c.1-.2.3-.2.6-.1l1.4.7c.2.1.4.3.4.5 0 .5-.2 1-.6 1.3-.4.4-1.2.5-2.1.2-1.8-.5-3.8-2.1-4.8-3.8-.5-.9-.8-1.7-.7-2.3.1-.2.2-.4.4-.6Z" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
      {open ? (
        <>
          <path d="M6 6 18 18" />
          <path d="M18 6 6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  )
}

export default function Navbar({ currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState(
    new URLSearchParams(window.location.search).get('q') || '',
  )

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [currentPath])

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const query = searchQuery.trim()
    window.location.href = query ? `/products?q=${encodeURIComponent(query)}` : '/products'
  }

  return (
    <>
      <div
        className={
          currentPath === '/' && !scrolled
            ? 'site-header-shell site-header-shell-transparent'
            : 'site-header-shell'
        }
      >
        <header className="site-header">
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <MenuIcon open={menuOpen} />
          </button>

          <a href="/" className="brand-lockup" aria-label="Label Niharika home">
            <span className="brand-lockup-top">LABEL</span>
            <span className="brand-lockup-bottom">NIHARIKA</span>
          </a>

          <div className="site-header-right">
            <form
              className={searchOpen || searchQuery ? 'header-search header-search-open' : 'header-search'}
              onSubmit={handleSearchSubmit}
              role="search"
            >
              <button
                type="button"
                className="search-toggle"
                onClick={() => setSearchOpen((current) => !current)}
                aria-label={searchOpen ? 'Close search' : 'Open search'}
              >
                <SearchIcon />
              </button>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search products"
                aria-label="Search products"
                onBlur={() => {
                  if (!searchQuery) {
                    setSearchOpen(false)
                  }
                }}
              />
            </form>
            <a
              href={getWhatsAppUrl(getCustomOrderMessage())}
              className="instagram-link nav-whatsapp"
              target="_blank"
              rel="noreferrer"
              aria-label="Order on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </header>
      </div>

      <div
        className={menuOpen ? 'site-sidebar-backdrop site-sidebar-backdrop-open' : 'site-sidebar-backdrop'}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="site-menu"
        className={menuOpen ? 'site-sidebar site-sidebar-open' : 'site-sidebar'}
        aria-label="Primary navigation"
      >
        <div className="site-sidebar-header">
          <p className="eyebrow">Menu</p>
          <button
            type="button"
            className="site-sidebar-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close sidebar"
          >
            <MenuIcon open={true} />
          </button>
        </div>

        <div className="site-sidebar-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={currentPath === link.href ? 'nav-link-active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
