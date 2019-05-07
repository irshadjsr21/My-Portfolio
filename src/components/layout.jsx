import React from "react"
import Header from "./header"
import Footer from "./footer"

export default props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
)
