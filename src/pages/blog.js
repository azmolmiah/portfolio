import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BlogPageStyles from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPosts(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className={BlogPageStyles.blogpage}>
        <div className="container">
          <h1 className="font-weight-bold mb-4">Web Development</h1>
          <ul className="list-group list-group-flush">
            <div className="row">
              {data.allContentfulPosts.edges.map((edge, index) => (
                <div className="col-6">
                  <div className="card mb-2 shadow" key={index}>
                    <li className="list-group-item">
                      <h4 className=" mr-2 mb-1 float-left ">
                        {index < 10 ? `0${index}` : index}
                      </h4>
                      <div className="float-left">
                        <h3 className="font-weight-bolder">
                          {edge.node.title}
                        </h3>
                        <p>{edge.node.publishedDate}</p>
                      </div>
                    </li>
                    <Link
                      to={`/blog/${edge.node.slug}`}
                      className="btn my-button"
                    >
                      Read Post
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
