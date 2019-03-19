import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SearchBox from "../components/searchbox"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="header-main">raagahub</h1>
    <p>A repository of Carnatic Raagas</p>
    <SearchBox ragas={data.ragaapi.ragas} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SearchBoxQuery {
  	ragaapi {
      ragas {
        name
        format_name
        id
      }
    }
  }
`
