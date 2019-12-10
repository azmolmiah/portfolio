import React from "react"
import headerStyles from "./header.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulHeader {
        edges {
          node {
            jobTitle
            description
            icons {
              name
            }
            cv {
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
    <section id="header" className={headerStyles.header}>
      <div className="container text-center">
        <div className={`${headerStyles.skills} mt-5`}>
          {data.allContentfulHeader.edges[0].node.icons.name.map(icon => (
            <i className={`fab ${icon} fa-4x mx-1`} key={icon}></i>
          ))}
        </div>
        <h1 className={headerStyles.title}>
          {data.allContentfulHeader.edges[0].node.jobTitle}
        </h1>

        <p className="lead mb-5">
          {data.allContentfulHeader.edges[0].node.description}
        </p>
        <a href="#projects">
          <button type="button" className="btn my-button shadow">
            Projects
          </button>
        </a>
        <a
          href={data.allContentfulHeader.edges[0].node.cv.file.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <button type="button" className="btn my-button shadow">
            CV File
          </button>
        </a>
      </div>
    </section>
  )
}

export default Header
