import CategoryFilter from './CategoryFilter.jsx'
import DesignCard from './DesignCard.jsx'

export default function Showcase({ designs, activeCategory, categories, onSelectCategory, onSelectDesign }) {
  return (
    <section id="explore" className="section showcase-section">
      <div className="section-header split-header">
        <div>
          <p className="eyebrow">Niharika showcase</p>
          <h2>Featured products and design pieces by Niharika.</h2>
          <p>
            Explore Niharika's finished pieces, label products, and design ideas. Every piece can
            begin a purchase inquiry, custom order, or design conversation.
          </p>
        </div>
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={onSelectCategory}
        />
      </div>

      <div className="design-grid">
        {designs.map((design) => (
          <DesignCard key={design.id} design={design} onSelect={onSelectDesign} />
        ))}
      </div>
    </section>
  )
}
