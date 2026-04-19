export default function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="category-filter" aria-label="Filter designs by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelectCategory(category)}
          className={activeCategory === category ? 'chip chip-active' : 'chip'}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
