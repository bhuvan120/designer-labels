import { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Showcase from './components/Showcase.jsx'
import DesignerModal from './components/DesignerModal.jsx'
import AboutSection from './components/AboutSection.jsx'
import JoinSection from './components/JoinSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import CollectionStrip from './components/CollectionStrip.jsx'
import FeaturedProduct from './components/FeaturedProduct.jsx'
import designs from './data/designs.js'

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeDesign, setActiveDesign] = useState(null)
  const [showAllProducts, setShowAllProducts] = useState(false)

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(designs.map((item) => item.category)))],
    [],
  )

  const filteredDesigns =
    activeCategory === 'All'
      ? designs
      : designs.filter((item) => item.category === activeCategory)

  const visibleDesigns = showAllProducts ? filteredDesigns : filteredDesigns.slice(0, 4)

  return (
    <div className="app-shell">
      <Navbar showAllProducts={showAllProducts} onToggleProducts={setShowAllProducts} />
      <main>
        <Hero />
        <CollectionStrip />
        <Showcase
          designs={visibleDesigns}
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectDesign={setActiveDesign}
          showAllProducts={showAllProducts}
          totalCount={filteredDesigns.length}
          onShowAllProducts={() => setShowAllProducts(true)}
        />
        {!showAllProducts && <FeaturedProduct design={designs[0]} onSelectDesign={setActiveDesign} />}
        <AboutSection />
        <JoinSection />
        <ContactSection />
      </main>
      <Footer />
      <DesignerModal design={activeDesign} onClose={() => setActiveDesign(null)} />
    </div>
  )
}

export default App
