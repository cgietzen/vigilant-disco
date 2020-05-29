import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import GraphQlErrorList from "../components/GraphqlErrorList"
import Project from "../components/project"
import SEO from "../components/seo"
import Layout from "../containers/layout"

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
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
      slug {
        current
      }
      _rawBody
    }
  }
`

const ProjectTemplate = props => {
  const { data, errors } = props
  const project = data && data.project
  return (
    <Layout>
      {errors && <SEO title="Graphql Error" />}
      {project && <SEO title={project.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQlErrorList errors={errors} />
        </Container>
      )}

      {project && <Project {...project} />}
    </Layout>
  )
}

export default ProjectTemplate
