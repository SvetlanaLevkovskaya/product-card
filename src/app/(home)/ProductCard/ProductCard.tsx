'use client'

import { memo } from 'react'

import Link from 'next/link'

import { ProductCardImage } from '@/app/(home)/ProductCardImage/ProductCardImage'
import { Product } from '@/types'
import { truncateTitle } from '@/utils'

const ProductCardComponent = ({ id, title, image, category, price, currency, origin }: Product) => {
  if (!id || !title || !category || !price) return null

  const displayedTitle = truncateTitle(title, 50)

  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price)

  return (
    <Link
      href={`/product/${id}`}
      className="flex flex-col justify-between gap-2.5 border p-4 outline outline-1 outline-slate-200"
    >
      <p className="text-sm text-gray-500">{category}</p>
      <h3 className="min-h-10 text-sm font-medium">{displayedTitle}</h3>

      {origin && <p className="text-xs text-gray-400">Made in {origin}</p>}

      <ProductCardImage title={title} image={image} />

      <p className="self-end text-2xl font-black text-gray-900">{formattedPrice}</p>
    </Link>
  )
}

ProductCardComponent.displayName = 'ProductCard'

export const ProductCard = memo(ProductCardComponent)
