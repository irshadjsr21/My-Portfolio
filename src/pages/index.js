import React from "react"
import Layout from "../components/layout"
import Home from "../sections/home"
import Skills from "../sections/skills"
import Projects from "../sections/projects"
import Testimonials from "../sections/testimonials"
import Contact from "../sections/contact"
import Meta from "../components/meta"

export default () => (
  <Layout>
    <Meta />
    <Home />
    <Skills />
    <Projects />
    <Testimonials />
    <Contact />
  </Layout>
)
