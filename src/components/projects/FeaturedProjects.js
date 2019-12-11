import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import featuredProjectsStyles from "./featuredProjects.module.scss"
import ProjectsModal from "./ProjectsModal"

const FeaturedProjects = () => {
  const [show, setShow] = useState(false)
  const [modalId, setModalId] = useState(null)
  const handleClose = () => setShow(false)
  const handleShow = e => {
    setShow(true)
    setModalId(e.target.id)
  }

  const data = useStaticQuery(graphql`
    {
      allContentfulFeatureProjects(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            id
            title
            excerpt
            liveLink
            githubLink
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div id="projects" className={featuredProjectsStyles.projects}>
      <div className="container text-center">
        <h3
          className={`mb-5 ${featuredProjectsStyles.title}`}
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="300"
          data-sal-easing="ease"
        >
          Take a look at my projects
        </h3>
        <div className="row">
          {data.allContentfulFeatureProjects.edges.map((edge, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4"
              key={edge.node.id}
              data-sal="fade"
              data-sal-delay={`${index + 1}00`}
              data-sal-duration={`${index + 1}${index + 1 * 20}0`}
              data-sal-easing="ease"
            >
              <div className="card shadow">
                <div className="card-body">
                  <div className="shadow">
                    <img
                      className="card-img-top mb-3"
                      src={edge.node.image.file.url}
                      alt="Card cap"
                    />
                  </div>

                  <h5 className="mt-3">{edge.node.title}</h5>
                  <p className="card-text">{edge.node.excerpt}</p>
                  <div className="row no-gutters">
                    <div className="col">
                      <a href={edge.node.liveLink}>
                        <div
                          className={`btn my-button shadow ${featuredProjectsStyles.button}`}
                        >
                          Live
                        </div>
                      </a>
                    </div>
                    <div className="col">
                      <a href={edge.node.githubLink}>
                        <div
                          className={`btn my-button shadow ${featuredProjectsStyles.button}`}
                        >
                          Github
                        </div>
                      </a>
                    </div>
                    <div className="col">
                      <div
                        className={`btn my-button shadow ${featuredProjectsStyles.button}`}
                        id={edge.node.id}
                        onClick={handleShow}
                      >
                        Process
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProjectsModal
                show={show}
                handleClose={handleClose}
                id={modalId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects
