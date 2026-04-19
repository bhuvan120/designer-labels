import CategoryFilter from './CategoryFilter.jsx'
import DesignCard from './DesignCard.jsx'

export default function Showcase({
  designs,
  activeCategory,
  categories,
  onSelectCategory,
  onSelectDesign,
  showAllProducts,
  totalCount,
  onShowAllProducts,
  eyebrow,
  title,
  description,
  hideCategoryFilter = false,
  sectionClassName = '',
}) {
  return (
    <section id="explore" className={`section showcase-section ${sectionClassName}`.trim()}>
      <div className="section-header split-header">
        <div>
          <p className="eyebrow">
            {eyebrow ?? (showAllProducts ? 'Full collection' : 'New arrivals')}
          </p>
          <h2>{title ?? (showAllProducts ? 'All Niharika label pieces.' : "Featured pieces from Niharika's label.")}</h2>
          <p>
            {description ??
              (showAllProducts
                ? 'Browse every available product, concept, and design reference.'
                : 'A small edit of selected products. Open all products for the complete collection.')}
          </p>
        </div>
        {!hideCategoryFilter && (
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={onSelectCategory}
          />
        )}
      </div>

      <div className="design-grid">
        {designs.map((design) => (
          <DesignCard key={design.id} design={design} onSelect={onSelectDesign} />
        ))}
      </div>

      {!showAllProducts && totalCount > designs.length && (
        <div className="showcase-footer">
          <button type="button" className="button button-secondary" onClick={onShowAllProducts}>
            View All Products
          </button>
        </div>
      )}
    </section>
  )
}
