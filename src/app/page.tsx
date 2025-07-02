import { ProductCard } from '@/app/(home)/ProductCard/ProductCard'
import { mockProducts } from '@/app/(home)/constants/products'

export default async function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
