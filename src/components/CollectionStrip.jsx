const collections = [
  { label: 'New Arrivals', href: '/products' },
  { label: 'Womenswear', href: '/products?category=Womenswear' },
  { label: 'Menswear', href: '/products?category=Menswear' },
  { label: 'Design Details', href: '/products?category=Design%20Details' },
  { label: 'Custom Orders', href: '/contact' },
]

export default function CollectionStrip() {
  return (
    <section className="collection-strip" aria-label="Shop collections">
      {collections.map((collection) => (
        <a key={collection.label} href={collection.href}>
          {collection.label}
        </a>
      ))}
    </section>
  )
}
