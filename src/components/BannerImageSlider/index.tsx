import type { VariantProps } from "class-variance-authority";
import { cva, cx } from "class-variance-authority";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { Link } from "vtex.render-runtime";
import { DotButton, useDotButton } from "./BannerImageSliderDotButton";

const bannerImageSliderStyles = cva(["flex flex-col max-w-[90%] lg:max-w-full mx-auto my-0 lg:w-[518px] gap-10"], {
  variants: {},
});

interface BannerImageSliderProps
  extends React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof bannerImageSliderStyles> {
  enableComponent: boolean;
  slides: any[];
}

const OPTIONS: EmblaOptionsType = { align: 'center', containScroll: false, loop: true }

const BannerImageSlider: StorefrontFunctionComponent<
  BannerImageSliderProps
> = (props) => {
  const { slides, enableComponent, } = props

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  if (!enableComponent || slides.length === 0) return null
  return (
    <div className={cx(bannerImageSliderStyles())}>
      <div className="embla__viewport overflow-hidden max-w-full rounded-3xl" ref={emblaRef}>
        <div className="embla__container flex  lg:max-w-[520px] h-[450px]">
          {slides.map(({ image, link, alt }: any, index) => (
            <div className="embla__slide flex-shrink-0" key={index}>
              <Link to={link}>
                <img className="embla__slide__number object-contain" src={image} alt={alt} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls flex justify-center">

        <div className="embla__dots flex gap-3 items-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot w-2.5 h-2.5  rounded-full bg-gray-200'.concat(
                index === selectedIndex ? ' embla__dot--selected w-4 h-4 bg-orange-500' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerImageSlider;

BannerImageSlider.defaultProps = {
  enableComponent: true,
  slides: [{
    image: 'https://picsum.photos/520/450?random=1',
    alt: 'Image 1',
    link: "/"
  },
  {
    image: 'https://picsum.photos/520/450?random=2',
    alt: 'Image 2',
    link: "/"
  },
  {
    image: 'https://picsum.photos/520/450?random=3',
    alt: 'Image 3',
    link: "/"
  },
  {
    image: 'https://picsum.photos/520/450?random=4',
    alt: 'Image 4',
    link: "/"
  },
  {
    image: 'https://picsum.photos/520/450?random=5',
    alt: 'Image 5',
    link: "/"
  },
  {
    image: 'https://picsum.photos/520/450?random=6',
    alt: 'Image 6',
    link: "/"
  },
  {
    image: 'https://picsum.photos/520/450?random=7',
    alt: 'Image 7',
    link: "/"
  },
  {
    image: 'https://picsum.photos/520/450?random=8',
    alt: 'Image 8',
    link: "/"
  },
  {
    image: 'https://picsum.photos/520/450?random=9',
    alt: 'Image 9',
    link: "/"
  }]
};

BannerImageSlider.schema = {
  title: 'Slide de imagens dos banners',
  description: 'Componente de slider de imagens dos banners',
  type: 'object',
  properties: {
    enableComponent: {
      title: 'Ativar/Desativar componente',
      type: 'boolean',
      default: true
    },
    slides: {
      title: 'Imagens',
      type: 'array',
      items: {
        title: 'Imagem',
        type: 'array',
        properties: {
          __editorItemTitle: {
            title: 'Titulo na lista',
            type: 'string'
          },
          image: {
            title: 'Imagem Desktop',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader'
            },
          },
          imageMobile: {
            title: 'Imagem Mobile',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader'
            },

          },
          alt: {
            title: 'Alt',
            type: 'string'
          },
          link: {
            title: 'Link',
            type: 'string'
          }
        }
      }
    }
  }
}