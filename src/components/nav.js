import React, { Fragment, useState, useEffect } from "react"
import TopNav from "./nav/topNav"
import SideNav from "./nav/sideNav"

const Nav = () => {
  const [nav, setNav] = useState(null)

  // When the component loads on each page
  useEffect(() => {
    if (window.innerWidth < 770) {
      setNav(<SideNav />)
    } else {
      setNav(<TopNav />)
    }
    //eslint-disable-next-line
  }, [])

  // When the window is resize check if less than mobile / tablet size
  window.onresize = () => {
    if (window.innerWidth < 770) {
      setNav(<SideNav />)
    } else {
      setNav(<TopNav />)
    }
  }

  return <Fragment>{nav}</Fragment>
}

export default Nav
