import { StaticImageData } from 'next/image'

export type Product = {
  id?: number
  title?: string
  image?: string | StaticImageData
  category?: string
  price?: number
  currency?: 'RUB' | 'USD' | 'EUR'
  origin?: string
}

export type Params = {
  params: {
    id: number
  }
}
