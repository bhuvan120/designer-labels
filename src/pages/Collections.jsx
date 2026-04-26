import { useMemo, useState } from 'react'
import Showcase from '../components/Showcase.jsx'
import DesignerModal from '../components/DesignerModal.jsx'
import Footer from '../components/Footer.jsx'
import designs from '../data/designs.js'

const normalizeSearchText = (value) =>
  value
    .toLowerCase()
    .replace(/\bwomens?\s+wear\b/g, 'womenswear')
    .replace(/\bmens?\s+wear\b/g, 'menswear')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

export default function Collections() {
  const initialCategory = new URLSearchParams(window.location.search).get('category') || 'All'
  const searchQuery = (new URLSearchParams(window.location.search).get('q') || '').trim()
  const normalizedSearchQuery = normalizeSearchText(searchQuery)
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

  const filteredDesigns = normalizedSearchQuery
    ? categoryDesigns.filter((item) => {
        const searchableText = normalizeSearchText(
          [item.title, item.category, item.shortDescription, item.fullDescription].join(' '),
        )
        return ` ${searchableText} `.includes(` ${normalizedSearchQuery} `)
      })
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
          eyebrow="Collection"
          title="Shop the collection."
          description="Browse every available piece, choose a category, and open any item to order through WhatsApp."
        />
      </main>
      <Footer />
      <DesignerModal design={activeDesign} onClose={() => setActiveDesign(null)} />
    </>
  )
}
