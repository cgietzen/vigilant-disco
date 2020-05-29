import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import GraphQlErrorList from "../components/GraphqlErrorList"
import ServiceComponent from "../components/ServiceComponent"
import SEO from "../components/seo"
import Layout from "../containers/layout"

export const query = graphql`
  query ServiceTemplateQuery($id: String!) {
    service: sanityService(id: { eq: $id }) {
      id
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      headlineOne
      headlineTwo
      shortDescription
    }
  }
`

const ServiceTemplate = props => {
  const { data, errors } = props
  const service = data && data.service
  return (
    <Layout>
      {errors && <SEO title="Graphql Error" />}
      {service && <SEO title={service.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQlErrorList errors={errors} />
        </Container>
      )}

      {service && <ServiceComponent {...service} />}
    </Layout>
  )
}

export default ServiceTemplate
