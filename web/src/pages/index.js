/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import { mapEdgesToNodes } from "../lib/helpers"
import GraphQLErrorList from "../components/GraphqlErrorList"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IndexHero from "../components/IndexHero"
import ProjectGrid from "../components/ProjectGrid"
import ServiceList from "../components/ServiceList"
import { BsArrowDownRight } from "react-icons/bs"

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
      <IndexHero />
      <Heading
        as="h2"
        sx={{
          position: "relative",
          width: "8.65ch",
          fontSize: [4],
          fontWeight: "body",
          pl: "4",
          mb: [7],
        }}
      >
        Featured
        <br /> Work
        <BsArrowDownRight
          sx={{
            position: "absolute",
            bottom: "2px",
            right: "0",
            fontSize: "1em",
          }}
        />
      </Heading>
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
