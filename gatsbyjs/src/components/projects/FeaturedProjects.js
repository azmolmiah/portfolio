import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import featuredProjectsStyles from "./featuredProjects.module.scss"
import FeatureProjectsModal from "./FeatureProjectsModal"

const FeaturedProjects = () => {
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
    <div id="projects" className={featuredProjectsStyles.projects}>
      <div className="container text-center">
        <h3 className={`mb-5 ${featuredProjectsStyles.title}`}>
          Take a look at my projects
        </h3>
        <div className="row">
          {data.allContentfulFeatureProjects.edges.map(edge => (
            <div className="col-sm-4 mb-4" key={edge.node.id}>
              <div className="card shadow">
                <div className="card-body">
                  <img
                    className="card-img-top mb-3"
                    src={edge.node.image.file.url}
                    alt="Card cap"
                  />
                  <h5>{edge.node.title}</h5>
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
                        data-toggle="modal"
                        data-target={`#${edge.node.id}`}
                      >
                        Process
                      </div>
                      <FeatureProjectsModal />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects
