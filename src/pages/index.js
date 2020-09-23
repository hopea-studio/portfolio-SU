import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import { graphql } from "gatsby"

export default function Index({data}) {
  return (
    <Layout>
      <Hero />
      <About data={data}  />
      <Portfolio data={data} />
      <Resume />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    about: allContentfulAboutHan(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        contentfulid
        title
        icon {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        points
        backgroundColor
      }
    }
    recent: allContentfulDesignProject(
      limit: 3
      sort: { order: ASC, fields: contentfulid }
    ) {
      nodes {
        id
        contentfulid
        title
        skills
        Slug
        intro {
          internal {
            content
          }
        }
        cover {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`