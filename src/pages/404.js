import React from "react"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <div className="container">
      <h1>This page is not found or does not exist</h1>
      <p>
        <Link to="/">Return to the home page...</Link>
      </p>
    </div>
  )
}

export default NotFound
