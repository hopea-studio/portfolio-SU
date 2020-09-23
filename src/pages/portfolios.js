import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Card, CardMedia, Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Link from "../components/Link"
import Image from "gatsby-image"

const useStyles = makeStyles((theme) => ({
  cover: {
    width: 280,
    height: 280,
  },
}))

const Portfolios = ({ data }) => {
  const classes = useStyles()

  const {
    projects: { nodes: projects },
  } = data

  return (
    <Layout>
      <Grid item container direction="column" spacing={2} md={10}>
        {projects.map((i) => {
          return (
            <Grid item key={i.id}>
              <Paper>
                <Card>
                  <Grid container>
                    <Grid item>
                      <Image fluid={i.cover.fluid} width="100%" />
                    </Grid>
                    <Grid item>
                      <Typography>{i.title}</Typography>
                      <Link to={`/portfolios/${i.Slug}`}>
                        Check the full gallary
                      </Link>
                    </Grid>
                  </Grid>
                </Card>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allContentfulDesignProject(
      sort: { order: ASC, fields: contentfulid }
    ) {
      nodes {
        id
        contentfulid
        title
        skills
        link
        categroy
        Slug
        intro {
          internal {
            content
          }
        }
        detail {
          internal {
            content
          }
        }
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        cover {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      totalCount
    }
  }
`

export default Portfolios
