/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { FC } from 'react'

type Props = {
  title: string
  tag: string
  postDate: string
  imageUrl: string
  webpImageUrl: string
  href: string
}

const FeaturedPost: FC<Props> = ({
  title,
  tag,
  postDate,
  imageUrl,
  webpImageUrl,
  href,
}) => {
  return (
    <div className="FeaturedPost">
      <div className="relative h-[100vw] md:h-auto md:pt-[100%] overflow-hidden">
        <Link href={href} passHref>
          <a>
            <div className="absolute top-0 left-0 w-full h-full">
              {imageUrl && (
                <picture className="flex w-full h-full">
                  {webpImageUrl && (
                    <source type="image/webp" srcSet={webpImageUrl} />
                  )}
                  <source type="image/jpeg" srcSet={imageUrl} />
                  <img
                    className="flex-grow object-cover"
                    src={imageUrl}
                    alt={title}
                  />
                </picture>
              )}
            </div>
            {imageUrl && (
              <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
            )}
            <div
              className={`
                absolute top-0 left-0 w-full h-full p-5 md:p-10 flex flex-col justify-between
                md:absolute md:top-0 md:left-0 pointer-events-none
            `}
            >
              <h3 className="text-dersu-white text-dersu-md sm:text-dersu-lg xl:text-dersu-2xl 2xl:text-dersu-3xl">
                {title}
              </h3>
              <div className="flex justify-between">
                <p
                  className={`font-sans font-bold text-dersu-xs text-dersu-white uppercase`}
                >
                  {tag}
                </p>
                <p className={`font-sans text-dersu-xs text-dersu-white`}>
                  {postDate}
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedPost
