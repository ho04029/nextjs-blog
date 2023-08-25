import Container from "../../components/Container"
import { getSortedPostsData } from "../../data/posts"
import PostListItem from "../../components/PostListItem"
import { BlogPost } from "../../data/type"

const Blog = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const posts = getSortedPostsData()
  return {
    props: {
      posts,
    },
  }
}

export default Blog
