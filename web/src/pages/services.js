import React from "react"
import { graphql } from "gatsby"
import { mapEdgesToNodes } from "../lib/helpers"
import GraphQLErrorList from "../components/GraphqlErrorList"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import ServiceGrid from "../components/ServiceGrid"

export const query = graphql`
  query ServicePageQuery {
    services: allSanityService(
      limit: 8
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          mainImage {
            _key
            _type
            alt
          }
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          excerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const Services = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const serviceNodes = data && data.services && mapEdgesToNodes(data.services)
  console.log(serviceNodes)

  return (
    <Layout>
      <SEO title={"Services"} />
      <Container>
        <h1>Services</h1>
        {serviceNodes && serviceNodes.length > 0 && (
          <ServiceGrid nodes={serviceNodes} />
        )}
      </Container>
    </Layout>
  )
}

export default Services
