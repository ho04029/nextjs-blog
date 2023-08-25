import Image from "next/image"

import metadata from "../data/metadata"
import Container from "../components/Container"
import RecentPosts from "../components/RecentPosts"
import { getSortedPostsData } from "../data/posts"

import { BlogPost } from "../data/type"

const Home = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative h-72`}>
          <Image
            src={`/home.jpg`}
            alt="대표 이미지"
            fill
            className={`rounded-3xl relative `}
          />
          <span
            className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
          >
            {metadata.title}
          </span>
        </div>
        <RecentPosts posts={posts} />
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

export default Home
