import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const TopNav = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulNav {
        edges {
          node {
            navbarBrand
            cv {
              file {
                url
              }
            }
            icons {
              link
              icon
            }
          }
        }
      }
    }
  `)

  console.log(data.allContentfulNav.edges[0].node.icons)

  return (
    <nav className="desktop-nav navbar navbar-expand-md fixed-top navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {data.allContentfulNav.edges[0].node.navbarBrand}
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/#header" activeClassName="active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#projects" activeClassName="active">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#contact" activeClassName="active">
              Contact
            </Link>
          </li>
          {data.allContentfulNav.edges[0].node.icons.map((icon, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={icon.link}>
                <i className={icon.icon}></i>
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a
              className="nav-link"
              href={data.allContentfulNav.edges[0].node.cv.file.url}
            >
              <i className="fas fa-file-alt"></i>
            </a>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/azmol-miah-bb13b3164/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/azmolmiah">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-file-alt"></i>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default TopNav
