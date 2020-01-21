/** @jsx jsx */
import { jsx } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import { Link } from "gatsby"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"

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
  const { basePath, blogPath } = useSiteMetadata()

  return (
    <Layout>
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Listing posts={posts} />
    </Layout>
  )
}

export default Homepage
