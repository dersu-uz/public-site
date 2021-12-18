import { FC } from 'react'

import FeaturedPost from '@/components/FeaturedPost'

type Props = {
  posts: Array<BlogPost>
}

const BlogPostsList: FC<Props> = ({ posts }) => {
  return (
    <div className="BlogPostsList">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {posts.map((post, i) => (
          <FeaturedPost
            key={i}
            title={post.title}
            tag={post.tag}
            postDate={post.dateFormatted}
            href={post.url}
            imageUrl={post.coverImageUrl}
            webpImageUrl={post.webpCoverImageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogPostsList
