import CategoryFilter from './CategoryFilter.jsx'
import DesignCard from './DesignCard.jsx'

export default function Showcase({ designs, activeCategory, categories, onSelectCategory, onSelectDesign }) {
  return (
    <section id="explore" className="section showcase-section">
      <div className="section-header split-header">
        <div>
          <p className="eyebrow">New arrivals</p>
          <h2>Shop Niharika's label pieces.</h2>
          <p>
            Browse each product, open details, or place an order on WhatsApp with the design name
            already included.
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
