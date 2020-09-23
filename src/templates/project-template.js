import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Card, CardMedia, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Image from "gatsby-image"

const useStyles = makeStyles((theme) => ({
  cover: {
    width: "100%",
  },
}))

const ProjectTemplate = ({ data }) => {
  const classes = useStyles()
  const { project } = data

  return (
    <Layout>
      <Grid item container spacing={2} md={6} sm={8} xs={12}>
        {project.images.map((i) => {
          return (
            <Grid item key={i.fluid.base64} xs={12}>
              <Card>
                <Image fluid={i.fluid} className={classes.cover} />
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query GetProject($Slug: String) {
    project: contentfulDesignProject(Slug: { eq: $Slug }) {
      id
      contentfulid
      title
      Slug
      cover {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      images {
        fluid {
          aspectRatio
          ...GatsbyContentfulFluid
        }
      }
      link
      intro {
        intro
      }
      categroy
      detail {
        detail
      }
    }
  }
`

export default ProjectTemplate
