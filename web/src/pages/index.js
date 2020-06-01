import React from "react"
import { graphql } from "gatsby"
import { mapEdgesToNodes } from "../lib/helpers"
import GraphQLErrorList from "../components/GraphqlErrorList"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectGrid from "../components/ProjectGrid"
import ServiceList from "../components/ServiceList"

export const query = graphql`
  query ProjectsForIndexQuery {
    projects: allSanityProject(
      limit: 4
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
    services: allSanityService(
      limit: 8
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const serviceNodes = data && data.services && mapEdgesToNodes(data.services)
  const projectNodes = data && data.projects && mapEdgesToNodes(data.projects)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {projectNodes && projectNodes.length > 0 && (
        <ProjectGrid nodes={projectNodes} />
      )}
      {serviceNodes && serviceNodes.length > 0 && (
        <ServiceList nodes={serviceNodes} />
      )}
    </Layout>
  )
}

export default IndexPage
