import React from "react"
import featuredProjectsStyles from "./featuredProjects.module.scss"

const featuredProjects = () => {
  return (
    <div id="projects" className={featuredProjectsStyles.projects}>
      <div className="container text-center">
        <h3 className={`mb-5 ${featuredProjectsStyles.title}`}>
          Take a look at my projects
        </h3>
        <div className="row">
          <div className="col-sm-4 mb-4">
            <div className="card-shadow">
              <div className="card-body">
                <img
                  className="card-img-top mb-3"
                  src="img/project-one.png"
                  alt="Card image cap"
                />
                <h5>Arabic Alphabet Vanilla Version</h5>
                <p className="card-text">
                  This is the first version, my first project that I started to
                  understand more about programming in web development.
                </p>
                <div className="project-links">
                  <div className="row no-gutters">
                    <div className="col">
                      <a href="https://frosty-jennings-76acdd.netlify.com/">
                        <div
                          className={`btn my-button ${featuredProjectsStyles.button}`}
                        >
                          Live
                        </div>
                      </a>
                    </div>
                    <div className="col">
                      <a href="https://github.com/azmolmiah/arabic-alphabet-v1">
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
        </div>
      </div>
    </div>
  )
}

export default featuredProjects
