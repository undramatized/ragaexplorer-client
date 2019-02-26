import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SearchBox from "../components/searchbox"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="header-main">raagahub</h1>
    <p>A repository of Carnatic Raagas</p>
    <SearchBox />
  </Layout>
)

export default IndexPage
