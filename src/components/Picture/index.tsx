import { FC } from 'react'

const MIME_TYPES = {
  png: 'image/png',
  jpg: 'image/jpeg',
  webp: 'image/webp',
}

type PictureSourceProps = {
  path: string
  imageName: string
  imageType: keyof typeof MIME_TYPES
  densities: Array<number>
}

const PictureSource: FC<PictureSourceProps> = ({
  path,
  imageName,
  imageType,
  densities,
}) => {
  return (
    <source
      type={MIME_TYPES[imageType]}
      srcSet={densities
        .map(
          density =>
            `${path}/${imageName}${
              density !== 1 ? `@${density}x` : ''
            }.webp ${density}x`
        )
        .join(', ')}
    />
  )
}

type PictureProps = {
  alt: string
  path: string
  imageName: string
  imageType: 'jpg' | 'png'
  webpEnabled?: boolean
  densities?: Array<number>
}

const Picture: FC<PictureProps> = ({
  alt,
  path,
  imageName,
  imageType,
  webpEnabled,
  densities,
}) => {
  return (
    <picture>
      {webpEnabled && (
        <PictureSource
          path={path}
          imageName={imageName}
          imageType={'webp'}
          densities={densities}
        />
      )}
      <PictureSource
        path={path}
        imageName={imageName}
        imageType={imageType}
        densities={densities}
      />
      <img src={`${path}/${imageName}.${imageType}`} alt={alt} />
    </picture>
  )
}

Picture.defaultProps = {
  webpEnabled: false,
  densities: [1],
}

export default Picture
