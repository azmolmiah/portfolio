import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Modal from "react-bootstrap/Modal"

const ProjectsModal = ({ show, handleClose, id }) => {
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
  return (
    <div>
      {data.allContentfulFeatureProjects.edges
        .filter(edge => edge.node.id === id)
        .map((edge, index) => (
          <Modal
            show={show}
            onHide={handleClose}
            key={index}
            style={{ overflowY: "scroll" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>{edge.node.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {documentToReactComponents(edge.node.body.json)}
            </Modal.Body>

            <div onClick={handleClose} className="btn my-button shadow">
              Close
            </div>
          </Modal>
        ))}
    </div>
  )
}

export default ProjectsModal
