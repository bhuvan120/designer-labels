import { useState } from 'react'

const HERO_IMAGE =
  'https://images.pexels.com/photos/31317485/pexels-photo-31317485.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1800&h=880'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section id="home" className="hero-section">
      <div className={loaded ? 'hero-loading-shell hero-loading-shell-hidden' : 'hero-loading-shell'} />
      <img
        src={HERO_IMAGE}
        alt="Editorial fashion landscape"
        className={loaded ? 'hero-image hero-image-wide hero-image-loaded' : 'hero-image hero-image-wide'}
        loading="eager"
        onLoad={() => setLoaded(true)}
      />
    </section>
  )
}
