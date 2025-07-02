import Image from '@/public/next.svg'

import { Product } from '@/types'

export const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Apple iPhone 16 Pro Max',
    image: Image,
    category: 'Smartphones',
    price: 59999.99,
    currency: 'RUB',
    origin: 'China',
  },
  {
    id: 2,
    title: 'Samsung Galaxy S24 Ultra',
    image: Image,
    category: 'Smartphones',
    price: 1199.0,
    currency: 'USD',
    origin: 'South Korea',
  },
  {
    id: 3,
    title: 'Xiaomi Mi 14',
    image: Image,
    category: 'Smartphones',
    price: 890.0,
    currency: 'EUR',
    origin: 'China',
  },
  {
    id: 4,
    title: 'Xiaomi Mi 15',
    image: Image,
    category: 'Smartphones',
    price: 989.99,
    currency: 'EUR',
    origin: 'China',
  },
]
