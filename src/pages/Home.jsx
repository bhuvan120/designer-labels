import { useMemo, useState } from 'react'
import Hero from '../components/Hero.jsx'
import ProductCarousel from '../components/ProductCarousel.jsx'
import DesignerModal from '../components/DesignerModal.jsx'
import Footer from '../components/Footer.jsx'
import designs from '../data/designs.js'

export default function Home() {
  const [activeDesign, setActiveDesign] = useState(null)
  const featuredDesigns = useMemo(() => designs, [])
  const womenswearPreview = useMemo(
    () => designs.filter((item) => item.category === 'Womenswear').slice(0, 2),
    [],
  )
  const menswearPreview = useMemo(
    () => designs.filter((item) => item.category === 'Menswear').slice(0, 2),
    [],
  )
  const editorialCards = useMemo(
    () => [
      {
        key: 'celebration',
        title: 'Celebration Edit',
        image: '/designs/feedback/feedback-37.jpeg',
        href: '/products?category=Womenswear',
      },
      {
        key: 'menswear',
        title: 'Menswear Edit',
        image: '/designs/feedback/feedback-31.jpeg',
        href: '/products?category=Menswear',
      },
      {
        key: 'fabric',
        title: 'Fabric Details',
        image: '/designs/feedback/feedback-34.jpeg',
        href: '/products?category=Design%20Details',
      },
    ],
    [],
  )

  return (
    <>
      <main>
        <Hero />
        <section className="section editorial-section">
          <div className="section-header editorial-header">
            <div>
              <p className="eyebrow">Featured Collection</p>
              <h2>Curated edits from Niharika&apos;s label.</h2>
            </div>
          </div>

          <div className="editorial-grid">
            {editorialCards.map((card) => (
              <a key={card.key} href={card.href} className="editorial-card">
                <img src={card.image} alt={card.title} className="editorial-card-image" />
                <div className="editorial-card-overlay">
                  <h3>{card.title}</h3>
                  <span className="editorial-card-button">View Products</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <ProductCarousel
          designs={featuredDesigns}
          onSelectDesign={setActiveDesign}
          onShowAllProducts={() => {
            window.location.href = '/products'
          }}
          eyebrow="Selected Pieces"
          title="A wider look at the collection."
          description="Scroll through more products here, then open the full collection for every piece."
        />

        <section className="section category-preview-section">
          <div className="category-preview-grid">
            <a href="/products?category=Womenswear" className="category-preview-card">
              <div className="category-preview-heading">
                <p className="eyebrow">Womenswear</p>
                <h2>Selected pieces for women.</h2>
              </div>
              <div className="category-preview-images">
                {womenswearPreview.map((design) => (
                  <img key={design.id} src={design.image} alt={design.title} className="category-preview-image" />
                ))}
              </div>
              <span className="category-preview-link">Explore Womenswear</span>
            </a>

            <a href="/products?category=Menswear" className="category-preview-card">
              <div className="category-preview-heading">
                <p className="eyebrow">Menswear</p>
                <h2>Tailored looks for men.</h2>
              </div>
              <div className="category-preview-images">
                {menswearPreview.map((design) => (
                  <img key={design.id} src={design.image} alt={design.title} className="category-preview-image" />
                ))}
              </div>
              <span className="category-preview-link">Explore Menswear</span>
            </a>
          </div>
        </section>

        <section className="section home-closing-section">
          <div className="home-closing-panel">
            <div className="home-closing-copy">
              <p className="eyebrow">Made To Order</p>
              <h2>Custom pieces, label products, and design inquiries in one place.</h2>
              <p>
                Explore the full collection or contact Niharika directly for custom looks,
                product orders, and design collaborations.
              </p>
            </div>

            <div className="home-closing-actions">
              <a href="/products" className="button button-secondary">
                View All Products
              </a>
              <a href="/contact" className="button button-primary">
                Contact Niharika
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <DesignerModal design={activeDesign} onClose={() => setActiveDesign(null)} />
    </>
  )
}
