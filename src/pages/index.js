import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Resume from "../components/Resume"
import Contact from "../components/Contact"

export default function Index() {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </Layout>
  )
}
