import React, { Fragment } from "react"

import Nav from "../components/nav"
import Header from "../components/header/header"
import FeaturedProjects from "../components/projects/FeaturedProjects"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import Head from "../components/head"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"

export default () => (
  <Fragment>
    <Head />
    <Nav />
    <Header />
    <FeaturedProjects />
    <Contact />
    <Footer />
  </Fragment>
)
