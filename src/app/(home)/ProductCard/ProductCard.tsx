'use client'

import { memo } from 'react'

import Link from 'next/link'

import { ProductCardImage } from '@/app/(home)/ProductCardImage/ProductCardImage'
import { Product } from '@/types'
import { truncateTitle } from '@/utils'

const ProductCardComponent = ({
  id,
  title,
  image,
  category,
  price,
  currency = 'USD',
  origin,
}: Product) => {
  if (!id || !title || !category || price == null) return null

  const displayedTitle = truncateTitle(title, 50)

  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price)

  return (
    <Link
      href={`/product/${id}`}
      className="relative flex flex-col justify-between p-4 gap-2.5 outline outline-1 outline-slate-200 border"
    >
      <p className="text-sm text-gray-500">{category}</p>
      <h3 className="text-sm font-medium  min-h-10">{displayedTitle}</h3>

      {origin && <p className="text-xs text-gray-400">Made in {origin}</p>}

      <ProductCardImage title={title} image={image} />

      <p className="text-2xl font-black text-gray-900 text-right">{formattedPrice}</p>
    </Link>
  )
}

ProductCardComponent.displayName = 'ProductCard'

export const ProductCard = memo(ProductCardComponent)
