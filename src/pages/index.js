import React from "react"

import Layout from "../components/layout"
import Header from "../components/header/header"
import FeaturedProjects from "../components/projects/FeaturedProjects"
import Contact from "../components/contact/contact"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"

export default () => (
  <Layout>
    <Header />
    <FeaturedProjects />
    <Contact />
  </Layout>
)
