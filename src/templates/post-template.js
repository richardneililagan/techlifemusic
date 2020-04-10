// @flow strict
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Post from '../components/Post'
import { useSiteMetadata } from '../hooks'
import type { MarkdownRemark } from '../types'

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
}

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()
  const { frontmatter } = data.mdx
  const {
    title: postTitle,
    description: postDescription,
    socialImage
  } = frontmatter
  const metaDescription =
    postDescription !== null ? postDescription : siteSubtitle

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImage}
    >
      <Post post={data.mdx} />
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        subtitle
        socialImage
      }
    }
  }
`

export default PostTemplate
