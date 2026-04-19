import { getCustomOrderMessage, getWhatsAppUrl } from '../utils/whatsapp.js'

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

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <p className="footer-title">LABEL NIHARIKA</p>
        <p className="footer-copy">Original garments, product concepts, and custom design work by Niharika.</p>
      </div>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footer-socials">
        <a
          href="https://www.instagram.com/label_by_niharikabadri/"
          className="instagram-link footer-instagram"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
          <span>@label_by_niharikabadri</span>
        </a>
        <a
          href={getWhatsAppUrl(getCustomOrderMessage())}
          className="instagram-link footer-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          <span>Order on WhatsApp</span>
        </a>
      </div>
    </footer>
  )
}
