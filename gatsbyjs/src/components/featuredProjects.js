import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import featuredProjectsStyles from "./featuredProjects.module.scss"

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFeatureProjects {
        edges {
          node {
            id
            title
            excerpt
            liveLink
            githubLink
          }
        }
      }
    }
  `)
  return (
    <div id="projects" className={featuredProjectsStyles.projects}>
      <div className="container text-center">
        <h3 className={`mb-5 ${featuredProjectsStyles.title}`}>
          Take a look at my projects
        </h3>
        <div className="row">
          {data.allContentfulFeatureProjects.edges.map(edge => (
            <div className="col-sm-4 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <img
                    className="card-img-top mb-3"
                    src="img/project-one.png"
                    alt="Card cap"
                  />
                  <h5>{edge.node.title}</h5>
                  <p className="card-text">{edge.node.excerpt}</p>
                  <div className="project-links">
                    <div className="row no-gutters">
                      <div className="col">
                        <a href={edge.node.liveLink}>
                          <div
                            className={`btn my-button ${featuredProjectsStyles.button}`}
                          >
                            Live
                          </div>
                        </a>
                      </div>
                      <div className="col">
                        <a href={edge.node.githubLink}>
                          <div
                            className={`btn my-button ${featuredProjectsStyles.button}`}
                          >
                            Github
                          </div>
                        </a>
                      </div>
                      <div className="col">
                        <div
                          className="btn my-button"
                          data-toggle="modal"
                          data-target="#projectOne"
                        >
                          Process
                        </div>
                      </div>
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
