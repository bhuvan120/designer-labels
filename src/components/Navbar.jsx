import { useState } from 'react'
import { getCustomOrderMessage, getWhatsAppUrl } from '../utils/whatsapp.js'

const links = [
  { href: '#explore', label: 'Products' },
  { href: '#about', label: 'About' },
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

export default function Navbar({ showAllProducts, onToggleProducts }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a href="#home" className="brand-mark">
        <span className="brand-logo">
          <img src="brand/logo.jpeg" alt="" />
        </span>
        <span  className="brand-name">Niharika Labels</span>
      </a>

      <nav
        id="site-menu"
        className={menuOpen ? 'site-nav site-nav-open' : 'site-nav'}
        aria-label="Primary navigation"
      >
        <button
          type="button"
          className="nav-menu-product"
          onClick={() => {
            onToggleProducts(!showAllProducts)
            setMenuOpen(false)
          }}
        >
          {showAllProducts ? 'Home' : 'All Products'}
        </button>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => {
              if (link.href === '#explore') {
                onToggleProducts(true)
              }
              setMenuOpen(false)
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-socials">
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
        <a
          href={getWhatsAppUrl(getCustomOrderMessage())}
          className="instagram-link nav-instagram"
          target="_blank"
          rel="noreferrer"
          aria-label="Order on WhatsApp"
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/label_by_niharikabadri/"
          className="instagram-link nav-instagram"
          target="_blank"
          rel="noreferrer"
          aria-label="Niharika on Instagram"
        >
          <InstagramIcon />
          <span>Instagram</span>
        </a>
      </div>
    </header>
  )
}
