import { FC } from 'react';
import PostsListItem from '../PostsListItem';

type Props = {
  posts: Array<BlogPost>
}

const PostsList: FC<Props> = ({ posts }) => {
  return (
    posts.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {posts.map((post, i) => (
          <PostsListItem
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
    )
  )
}

export default PostsList
