import { ProductCard } from '@/app/(home)/ProductCard/ProductCard'
import { mockProducts } from '@/app/(home)/constatns/products'

export default async function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
