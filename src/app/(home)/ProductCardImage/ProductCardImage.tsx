import { ImageWithFallback } from '@/components'
import { Product } from '@/types'

export const ProductCardImage = ({ image, title }: Product) => {
  return (
    <div className="flex items-center justify-center w-[156px] h-[224px] self-center">
      <ImageWithFallback
        src={image}
        alt={title ?? 'Image'}
        width={100}
        height={100}
        className="object-cover mx-auto w-auto h-auto"
        priority
      />
    </div>
  )
}
