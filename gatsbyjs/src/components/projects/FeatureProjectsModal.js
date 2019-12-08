import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const FeatureProjectsModal = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFeatureProjects(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            id
            title
            body {
              json
            }
          }
        }
      }
    }
  `)
  console.log(data.allContentfulFeatureProjects.edges[0].node.id)
  return (
    <div>
      {data.allContentfulFeatureProjects.edges.map(edge => (
        <div
          className="modal fade"
          id={edge.node.id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
          key={edge.node.id}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {edge.node.title}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-left">
                {documentToReactComponents(edge.node.body.json)}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureProjectsModal
