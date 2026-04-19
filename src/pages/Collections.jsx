import { useMemo, useState } from 'react'
import Showcase from '../components/Showcase.jsx'
import DesignerModal from '../components/DesignerModal.jsx'
import Footer from '../components/Footer.jsx'
import designs from '../data/designs.js'

export default function Collections() {
  const initialCategory = new URLSearchParams(window.location.search).get('category') || 'All'
  const searchQuery = (new URLSearchParams(window.location.search).get('q') || '').trim().toLowerCase()
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [activeDesign, setActiveDesign] = useState(null)

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(designs.map((item) => item.category)))],
    [],
  )

  const categoryDesigns =
    activeCategory === 'All'
      ? designs
      : designs.filter((item) => item.category === activeCategory)

  const filteredDesigns = searchQuery
    ? categoryDesigns.filter((item) =>
        [item.title, item.category, item.shortDescription, item.fullDescription]
          .join(' ')
          .toLowerCase()
          .includes(searchQuery),
      )
    : categoryDesigns

  return (
    <>
      <main>
        <Showcase
          designs={filteredDesigns}
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectDesign={setActiveDesign}
          showAllProducts={true}
          totalCount={filteredDesigns.length}
          onShowAllProducts={() => {}}
        />
      </main>
      <Footer />
      <DesignerModal design={activeDesign} onClose={() => setActiveDesign(null)} />
    </>
  )
}
