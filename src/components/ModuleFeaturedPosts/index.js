import PropTypes from 'prop-types'
import Link from 'next/link'
import { useContext } from 'react'

import TranslationsContext from '@/contexts/TranslationsContext'

import Wrapper from '@/components/Wrapper'
import BlogPostsList from '@/components/BlogPostsList'

import IconArrowRight from '../../styles/assets/icon-arrow-right.svg'

const ModuleFeaturedPosts = ({ posts }) => {
  const { t, currentLocale } = useContext(TranslationsContext)
  return (
    <>
      {posts.length > 0 && (
        <div className="ModuleFeaturedPosts">
          <Wrapper>
            <div className="flex items-end justify-between">
              <h2 className="text-dersu-lg md:text-dersu-3xl lg:text-dersu-4xl mt-16">
                {t.common.articles}
              </h2>
              <p className="font-sans text-dersu-2xs md:text-dersu-md font-bold pb-1">
                <Link href={`/${currentLocale}/blog`}>
                  <a>
                    {t.common.checkOutAll}{' '}
                    <IconArrowRight
                      width="16px"
                      className="inline-block ml-2"
                    />
                  </a>
                </Link>
              </p>
            </div>
            <BlogPostsList posts={posts} />
          </Wrapper>
        </div>
      )}
    </>
  )
}

ModuleFeaturedPosts.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default ModuleFeaturedPosts
