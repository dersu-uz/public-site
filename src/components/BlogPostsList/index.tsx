import { FC } from 'react'
import { BlogPost } from '@/types/common'
import { COLOR_SCHEMES } from '@/constants/theme'

import ModuleFeaturedPost from '@/components/ModuleFeaturedPost'

type Props = {
  posts: Array<BlogPost>
}

const BlogPostsList: FC<Props> = ({ posts }) => {
  return (
    <div className="BlogPostsList">
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
    </div>
  )
}

export default BlogPostsList
