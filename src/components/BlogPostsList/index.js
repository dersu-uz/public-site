import { COLOR_SCHEMES } from '@/constants/theme'
import PropTypes from 'prop-types'

import ModuleFeaturedPost from '@/components/ModuleFeaturedPost'

const BlogPostsList = ({ posts }) => {
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

BlogPostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default BlogPostsList
