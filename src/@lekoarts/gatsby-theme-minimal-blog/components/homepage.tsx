/** @jsx jsx */
import { jsx } from "theme-ui"
import Blog from "@lekoarts/gatsby-theme-minimal-blog/src/components/blog"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  return <Blog posts={posts} />
}

export default Homepage
