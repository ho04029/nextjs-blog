import Head from "next/head"
import Image from "next/image"
import Nav from "./Nav"
import metadata from "../data/metadata"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  customMeta: {
    title: string
    description: string
    date: string
  }
}

const Container = (props: Props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  }
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author} />
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <div className={`relative h-10 w-10`}>
            <Image
              src={`/favicon.ico`}
              alt="로고"
              fill
              sizes="100vh 100vw"
              className={`rounded-full`}
            />
          </div>

          <span className={`mx-2 font-extralight text-lg`}>
            {metadata.title}
          </span>
        </div>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl`}>{props.children}</main>
    </div>
  )
}

export default Container
