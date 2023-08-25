import Container from "../../components/Container"
import { getPostData, getSortedPostsData } from "../../data/posts"
import { PostContent } from "../../data/type"

type Props = {
  params: {
    postId: string
  }
}

const Post = ({ post }: { post: PostContent }) => {
  const { title, contentHtml, description, date } = post
  const customMeta = {
    title,
    description,
    date: new Date(post.date).toISOString(),
  }

  return (
    <Container customMeta={customMeta}>
      <div className={`mt-10`}>
        <h1 className="font-extrabold text-2xl mt-2">{title}</h1>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </div>
    </Container>
  )
}

export const getStaticPaths = async () => {
  const allPosts = getSortedPostsData()
  return {
    paths: allPosts.map((p) => ({ params: { postId: p.id } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: Props) => {
  const post = await getPostData(params.postId)
  return {
    props: {
      post,
    },
  }
}

export default Post
