import React, { Fragment } from "react"

import Nav from "../components/nav"
import Header from "../components/header"
import FeatureProjects from "../components/featuredProjects"
import Contact from "../components/contact"
import Footer from "../components/footer"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"

export default () => (
  <Fragment>
    <Nav />
    <Header />
    <FeatureProjects />
    <Contact />
    <Footer />
  </Fragment>
)
