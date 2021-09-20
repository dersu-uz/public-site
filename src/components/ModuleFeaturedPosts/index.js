import Link from 'next/link'

import Container from '@/components/Container'
import ModuleFeaturedPost from '@/components/ModuleFeaturedPost'

import IconArrowRight from '../../styles/assets/icon-arrow-right.svg'
import Wrapper from '../Wrapper'

const ModuleFeaturedPosts = () => {
  return (
    <div className="ModuleFeaturedPosts">
      <Container>
        <Wrapper>
          <div className="flex items-end justify-between">
            <h2 className="text-dersu-lg md:text-dersu-2xl mt-16">Historias</h2>
            <p className="font-sans text-dersu-2xs md:text-dersu-md font-bold pb-1">
              <Link href="/">
                <a>
                  Ver todas{' '}
                  <IconArrowRight width="16px" className="inline-block ml-2" />
                </a>
              </Link>
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-10">
            <ModuleFeaturedPost
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut mauris, elementum ultrices amet, integer eget a id."
              tag="tag del post"
              postDate="12 Sep 2021"
              href="/"
            />
            <ModuleFeaturedPost
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut mauris, elementum ultrices amet, integer eget a id."
              tag="tag del post"
              date="12 Sep 2021"
              imageUrl="/images/posts/01.jpg"
              href="/"
            />
          </div>
        </Wrapper>
      </Container>
    </div>
  )
}

ModuleFeaturedPosts.propTypes = {}

export default ModuleFeaturedPosts
