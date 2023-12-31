import Link from "next/link"
import { BlogPost } from "../data/type"

const RecentPosts = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
      <div className={`flex flex-col`}>
        {posts.slice(0, 5).map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            passHref
            className={`mt-5`}
          >
            <div className={`font-medium text-xl`}>{post.title}</div>
            <div className={`font-light`}>{post.description}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RecentPosts
