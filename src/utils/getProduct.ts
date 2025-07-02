import { mockProducts } from '@/app/(home)/constants/products'

export async function getProduct(id: number) {
  return mockProducts.find((p) => p.id === id)
}
