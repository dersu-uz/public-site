import PropTypes from 'prop-types'
import Link from 'next/link'
import { useContext } from 'react'

import Wrapper from '@/components/Wrapper'
import BlogPostsList from '@/components/BlogPostsList'

import IconArrowRight from '../../styles/assets/icon-arrow-right.svg'
import TranslationsContext from '@/contexts/TranslationsContext'

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
        <BlogPostsList posts={posts} />
      </Wrapper>
    </div>
  )
}

ModuleFeaturedPosts.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default ModuleFeaturedPosts
