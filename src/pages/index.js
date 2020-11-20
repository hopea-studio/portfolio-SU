import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"
import Resume from "../components/Resume"

import './index.css'

export default function Index({ data }) {
  return (
    <Layout>
      <Hero data={data} />
      <Portfolio data={data} />
      <Resume data={data} />
      
    </Layout>
  )
}

export const query = graphql`
  {
    about: allContentfulAboutSu(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        contentfulid
        title
        icon {
          file {
            url
          }
        }
        points
        backgroundColor
      }
    }
    recent: allContentfulDevProject(
      limit: 3
      sort: { order: ASC, fields: contentfulid }
    ) {
      nodes {
        id
        contentfulid
        link
        git
        year
        title
        skills
        Slug
        info
        intro {
          internal {
            content
          }
        }
        cover {
          file {
            url
            contentType
          }
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    education: allContentfulEduSu(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        contentfulid
        date
        school
        location
        degree
      }
    }
    work: allContentfulWorkSu(sort: { order: ASC, fields: contentfulid }) {
      nodes {
        contentfulid
        date
        location
        company
        position
        info
      }
    }
  }
`
