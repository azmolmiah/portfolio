import React, { useState, Fragment } from "react"
import sideNavStyles from "./sideNav.module.scss"
import { Link } from "gatsby"

const SideNav = () => {
  const [sideNav, setSideNav] = useState(false)
  const [width, setWidth] = useState("0")
  const [padding, setPadding] = useState("0")
  const [lineOne, setLineOne] = useState(sideNavStyles.btnLine)
  const [lineTwo, setLineTwo] = useState(sideNavStyles.btnLine)
  const [lineThree, setLineThree] = useState(sideNavStyles.btnLine)
  const openSideMenu = e => {
    if (!sideNav) {
      setSideNav(true)
      setWidth("15rem")
      setPadding("3rem")
      setLineOne(sideNavStyles.lineOne)
      setLineTwo(sideNavStyles.lineTwo)
      setLineThree(sideNavStyles.lineThree)
      e.preventDefault()
    } else {
      setSideNav(false)
      setWidth("0")
      setPadding("0")
      setLineOne(sideNavStyles.btnLine)
      setLineTwo(sideNavStyles.btnLine)
      setLineThree(sideNavStyles.btnLine)
      e.preventDefault()
    }
  }
  return (
    <Fragment>
      <div className={sideNavStyles.burgerMenuBtn} onClick={openSideMenu}>
        <div className={lineOne}></div>
        <div className={lineTwo}></div>
        <div className={lineThree}></div>
      </div>
      <div
        className={sideNavStyles.sideNav}
        style={{ width: width, paddingLeft: padding }}
      >
        <li className="mb-1">
          <Link to="/#header">Home</Link>
        </li>
        <li className="mb-1">
          <Link to="/#projects">Projects</Link>
        </li>
        {/* <li><a href="#">Blog</a></li>  */}
        <li className="mb-2">
          <Link to="/#contact">Contact</Link>
        </li>
        <div className="social-media">
          {/* <a href=""><i className="fab fa-youtube-square fa-2x"></i></a>  */}
          <a href="https://www.linkedin.com/in/azmol-miah-bb13b3164/">
            <i className="fab fa-linkedin fa-2x mr-2"></i>
          </a>
          <a href="https://github.com/azmolmiah">
            <i className="fab fa-github fa-2x mr-2"></i>
          </a>
          <a href="Azmol_Miah_Web_CV_2.pdf" target="_blank">
            <i className="fas fa-file-alt fa-2x"></i>
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default SideNav