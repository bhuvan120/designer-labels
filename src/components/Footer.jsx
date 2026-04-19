export default function Footer() {
  return (
    <footer className="site-footer">
      <p>(c) 2026 Niharika</p>
      <a
        href="https://www.instagram.com/label_by_niharikabadri/"
        className="instagram-link footer-instagram"
        target="_blank"
        rel="noreferrer"
      >
        <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" />
        </svg>
        <span>@label_by_niharikabadri</span>
      </a>
    </footer>
  )
}
