import Link from 'next/link'

import ModuleFeaturedPost from '@/components/ModuleFeaturedPost'
import Wrapper from '@/components/Wrapper'

import { COLOR_SCHEMES } from '@/constants/theme'

import IconArrowRight from '../../styles/assets/icon-arrow-right.svg'

const ModuleFeaturedPosts = () => {
  return (
    <div className="ModuleFeaturedPosts">
      <Wrapper>
        <div className="flex items-end justify-between">
          <h2 className="text-dersu-lg md:text-dersu-2xl lg:text-dersu-3xl mt-16">
            Historias
          </h2>
          <p className="font-sans text-dersu-2xs md:text-dersu-md font-bold pb-1">
            <Link href="/">
              <a>
                Ver todas{' '}
                <IconArrowRight width="16px" className="inline-block ml-2" />
              </a>
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <ModuleFeaturedPost
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut mauris, elementum ultrices amet, integer eget a id."
            tag="tag del post"
            postDate="12 Sep 2021"
            href="/"
            colorScheme={COLOR_SCHEMES.BROWN}
          />
          <ModuleFeaturedPost
            title="Lorem ipsum dolor sit amet. Ut ut mauris, elementum ultrices amet, integer eget a id."
            tag="tag del post"
            postDate="10 Sep 2021"
            imageUrl="/images/posts/01.jpg"
            href="/"
            colorScheme={COLOR_SCHEMES.YELLOW_INVERTED}
          />
        </div>
      </Wrapper>
    </div>
  )
}

ModuleFeaturedPosts.propTypes = {}

export default ModuleFeaturedPosts
