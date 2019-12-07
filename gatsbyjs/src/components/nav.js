import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav className="desktop-nav navbar navbar-expand-md fixed-top navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="index.html">
          AZMOL MIAH
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="#header" activeClassName="active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#projects" activeClassName="active">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#contact" activeClassName="active">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="https://www.linkedin.com/in/azmol-miah-bb13b3164/"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="https://github.com/azmolmiah">
              <i className="fab fa-github"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
