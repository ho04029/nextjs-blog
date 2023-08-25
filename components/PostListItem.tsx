import Link from "next/link"
import { BlogPost } from "../data/type"

const PostListItem = ({ post }: { post: BlogPost }) => {
  const { id, date, title, description } = post
  return (
    <Link
      href={`/blog/${id}`}
      passHref
      className={`w-full my-7 hover:-translate-x-1.5`}
    >
      <div className={`font-medium text-xs text-gray-400`}>{date}</div>
      <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
      <div className={`font-medium text-gray-600 text-xl mt-1`}>
        {description}
      </div>
    </Link>
  )
}

export default PostListItem
