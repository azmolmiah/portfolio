import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import BlogPostStyles from "./blog.module.scss"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulPosts(slug: { eq: $slug }) {
      title
      slug
      body {
        json
      }
      publishedDate(formatString: "Do MMMM, YYYY")
      author {
        author
      }
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <div className={BlogPostStyles.blogpost}>
        <div className="container">
          <div className="col-md-8 col-sm-12">
            <h1 className="font-weight-bold">
              {props.data.contentfulPosts.title}
            </h1>
            <blockquote className="blockquote-footer">
              {`Published on ${props.data.contentfulPosts.publishedDate} by ${props.data.contentfulPosts.author.author}.`}
            </blockquote>

            <div className="lead">
              {documentToReactComponents(props.data.contentfulPosts.body.json)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
