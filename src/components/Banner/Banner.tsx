import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import BannerImg from '../../assets/banner/banner.png'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">{BannerImg}</div>
        <div className="embla__slide">{BannerImg}</div>
        <div className="embla__slide">{BannerImg}</div>
      </div>
    </div>
  )
}
export default EmblaCarousel