import PropTypes from 'prop-types'
import Link from 'next/link'

import ModuleFeaturedPost from '@/components/ModuleFeaturedPost'
import Wrapper from '@/components/Wrapper'

import { COLOR_SCHEMES } from '@/constants/theme'

import IconArrowRight from '../../styles/assets/icon-arrow-right.svg'
import TranslationsContext from '@/contexts/TranslationsContext'
import { useContext } from 'react'

const ModuleFeaturedPosts = ({ posts }) => {
  const { currentLocale } = useContext(TranslationsContext)
  return (
    <div className="ModuleFeaturedPosts">
      <Wrapper>
        <div className="flex items-end justify-between">
          <h2 className="text-dersu-lg md:text-dersu-3xl lg:text-dersu-4xl mt-16">
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
          {posts.map((post, i) => (
            <ModuleFeaturedPost
              key={i}
              title={post.title}
              tag={post.tag}
              postDate={post.dateFormatted}
              href={post.url}
              imageUrl={post.coverImageUrl}
              webpImageUrl={post.webpCoverImageUrl}
              colorScheme={COLOR_SCHEMES[post.colorScheme]}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

ModuleFeaturedPosts.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default ModuleFeaturedPosts
