import React from "react"
import { graphql } from "gatsby"
import { mapEdgesToNodes } from "../lib/helpers"
import GraphQLErrorList from "../components/graphql-error-list"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import ProjectGrid from "../components/project-grid"

export const query = graphql`
  query ProjectPageQuery {
    projects: allSanityProject(
      limit: 8
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
  }
`

const Projects = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const projectNodes = data && data.projects && mapEdgesToNodes(data.projects)
  console.log(projectNodes)

  return (
    <Layout>
      <SEO title={"Work"} />
      <Container>
        <h1>Work</h1>
        {projectNodes && projectNodes.length > 0 && (
          <ProjectGrid nodes={projectNodes} />
        )}
      </Container>
    </Layout>
  )
}

export default Projects
