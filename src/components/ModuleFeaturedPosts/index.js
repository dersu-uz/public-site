import Link from 'next/link'

import ModuleFeaturedPost from '@/components/ModuleFeaturedPost'
import Wrapper from '@/components/Wrapper'

import { COLOR_SCHEMES } from '@/constants/theme'

import IconArrowRight from '../../styles/assets/icon-arrow-right.svg'
import TranslationsContext from '@/contexts/TranslationsContext'
import { useContext } from 'react'

const ModuleFeaturedPosts = () => {
  const { currentLocale } = useContext(TranslationsContext)
  return (
    <div className="ModuleFeaturedPosts">
      <Wrapper>
        <div className="flex items-end justify-between">
          <h2 className="text-dersu-lg md:text-dersu-2xl lg:text-dersu-3xl mt-16">
            Historias
          </h2>
          <p className="font-sans text-dersu-2xs md:text-dersu-md font-bold pb-1">
            <Link href={`/${currentLocale}/blog`}>
              <a>
                Ver todas{' '}
                <IconArrowRight width="16px" className="inline-block ml-2" />
              </a>
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <ModuleFeaturedPost
            title="Montañista, el punto de partida"
            tag="#montaña"
            postDate="29 Sep 2021"
            href="/es/blog/montanista-punto-de-partida"
            colorScheme={COLOR_SCHEMES.YELLOW_INVERTED}
          />
          <ModuleFeaturedPost
            title="Dersu: Un punto de enlace entre las personas y las montañas"
            tag="#aprender"
            postDate="28 Sep 2021"
            href="/es/blog/un-punto-de-enlace"
            imageUrl="/images/posts/01.jpg"
            webpImageUrl="/images/posts/01.webp"
            colorScheme={COLOR_SCHEMES.BROWN}
          />
        </div>
      </Wrapper>
    </div>
  )
}

ModuleFeaturedPosts.propTypes = {}

export default ModuleFeaturedPosts
