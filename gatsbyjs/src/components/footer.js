import React from "react"
import { Link } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <section id="footer" className={footerStyles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6" style={{ paddingLeft: 0 }}>
            <h3 className={footerStyles.title}>AZMOL MIAH</h3>
            <p>&copy; 2019 by Azmol</p>
          </div>
          <div className="col-sm-6 mt-1" style={{ paddingRight: 0 }}>
            <div className="social-media" style={{ float: "right" }}>
              {/* <a to=""><i className="fab fa-youtube-square fa-2x"></i></a>  */}
              <Link to="https://www.linkedin.com/in/azmol-miah-bb13b3164/">
                <i className="fab fa-linkedin fa-2x"></i>
              </Link>{" "}
              <Link to="https://github.com/azmolmiah">
                <i className="fab fa-github fa-2x"></i>
              </Link>{" "}
              <Link to="Azmol_Miah_Web_CV_2.pdf" target="_blank">
                <i className="fas fa-file-alt fa-2x"></i>
              </Link>
            </div>

            <div className="clearfix"></div>
            <div className="footer-links mt-4" style={{ float: "right" }}>
              <a href="#header">Home</a>
              <span> | </span>
              <a href="#projects">Projects</a>
              <span> | </span>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
