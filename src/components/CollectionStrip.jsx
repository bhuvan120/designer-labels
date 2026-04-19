const collections = [
  'New Arrivals',
  'Womenswear',
  'Menswear',
  'Design Details',
  'Custom Orders',
]

export default function CollectionStrip() {
  return (
    <section className="collection-strip" aria-label="Shop collections">
      {collections.map((collection) => (
        <a key={collection} href={collection === 'Custom Orders' ? '#join' : '#explore'}>
          {collection}
        </a>
      ))}
    </section>
  )
}
