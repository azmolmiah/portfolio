import React from "react"
import Head from "./head"
import Nav from "./nav"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Head />
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
