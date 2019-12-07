import React from "react"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <section id="header" className={headerStyles.header}>
      <div className="container text-center">
        <div className={`${headerStyles.skills} mt-5`}>
          <i className="fab fa-html5 fa-4x"></i>
          <i className="fab fa-css3-alt fa-4x"></i>
          <i className="fab fa-js fa-4x"></i>
          <i className="fab fa-react fa-4x"></i>
          <i className="fab fa-node-js fa-4x"></i>
        </div>
        <h1 className={headerStyles.title}>Front End Developer</h1>

        <p className="lead mb-5">
          Front End developer, based in Manchester and experienced in using
          HTML, CSS, Javascript, React, Node.js.
        </p>
        <a href="#projects">
          <button type="button" className="btn my-button shadow">
            Projects
          </button>
        </a>
        <a href="Azmol_Miah_Web_CV_2.pdf" target="_blank">
          <button type="button" className="btn my-button shadow">
            CV File
          </button>
        </a>
      </div>
    </section>
  )
}

export default Header
