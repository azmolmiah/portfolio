import React from "react"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <div className="container">
      <h1>Page not found</h1>
      <p>
        <Link to="/">Return Home</Link>
      </p>
    </div>
  )
}

export default NotFound
