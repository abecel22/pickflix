import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>PickFlix</h1>
    <p>Discover new movies to watch</p>
  </Layout>
)

export default IndexPage
