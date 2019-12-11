import React from "react"
import { Link } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <section id="footer" className={footerStyles.footer}>
      <div className="container text-center">
        <h3 className={footerStyles.title}>AZMOL MIAH</h3>
        {/* <a to=""><i className="fab fa-youtube-square fa-2x"></i></a>  */}
        <div className="mb-4">
          <a href="https://www.linkedin.com/in/azmol-miah-bb13b3164/">
            <i className={`fab fa-linkedin fa-2x ${footerStyles.link}`}></i>
          </a>{" "}
          <a href="https://github.com/azmolmiah">
            <i className={`fab fa-github fa-2x ${footerStyles.link}`}></i>
          </a>{" "}
          <a href="Azmol_Miah_Web_CV_2.pdf" target="_blank">
            <i className={`fas fa-file-alt fa-2x ${footerStyles.link}`}></i>
          </a>
        </div>
        <div className="my-2">
          <Link to="/#header" className={footerStyles.link}>
            Home
          </Link>
          <span> | </span>
          <Link to="/#projects" className={footerStyles.link}>
            Projects
          </Link>
          <span> | </span>
          <Link to="/#contact" className={footerStyles.link}>
            Contact
          </Link>
        </div>
        <p>&copy; 2019 by Azmol with Gatsbyjs &amp; Contentful</p>
      </div>
    </section>
  )
}

export default Footer
