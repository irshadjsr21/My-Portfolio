import React from "react"
import Layout from "../components/layout"
import Home from "../sections/home"
import Skills from "../sections/skills"
import Contact from "../sections/contact"
import Meta from "../components/meta"

export default () => (
  <Layout>
    <Meta />
    <Home />
    <Skills />
    <Contact />
  </Layout>
)
