import { ImageWithFallback } from '@/components'
import { Product } from '@/types'

export const ProductCardImage = ({ image, title }: Product) => {
  return (
    <div className="flex h-[224px] w-[156px] items-center justify-center self-center">
      <ImageWithFallback
        src={image}
        alt={title ?? 'Image'}
        width={100}
        height={100}
        className="mx-auto h-auto w-auto object-cover"
        priority
      />
    </div>
  )
}
