import { COLOR_SCHEMES, colorSchemeClasses } from '@/constants/theme';
import { FC } from 'react';

type Props = {
  title: string
  imageUrl: string
  webpImageUrl: string
  colorScheme?: keyof typeof COLOR_SCHEMES
}

const PageHero: FC<Props> = ({
  title,
  imageUrl,
  webpImageUrl,
  colorScheme,
}) => {
  return (
    <div className={`relative ${colorSchemeClasses[colorScheme].background}`}>
      <div className="absolute top-0 left-0 w-full h-full">
        {imageUrl && (
          <picture className="flex w-full h-full">
            {webpImageUrl && <source type="image/webp" srcSet={webpImageUrl} />}
            <source type="image/jpeg" srcSet={imageUrl} />
            <img
              className="flex-grow object-cover"
              src={imageUrl}
              alt={title}
              loading="lazy"
            />
          </picture>
        )}
      </div>
      {imageUrl && (
        <div className="absolute top-0 left-0 w-full h-full bg-white/60" />
      )}
      <div className="relative px-10 py-[240px] md:py-[278px]">
        <h1
          className={`
              ${
                imageUrl
                  ? 'text-dersu-black'
                  : colorSchemeClasses[colorScheme].color
              }
               text-dersu-lg  md:text-dersu-4xl text-center
               max-w-5xl mx-auto
              `}
        >
          {title}
        </h1>
      </div>
    </div>
  )
}

PageHero.defaultProps = {
  colorScheme: COLOR_SCHEMES.BROWN_INVERTED,
}

export default PageHero
