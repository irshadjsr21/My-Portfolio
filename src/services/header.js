import { useStaticQuery, graphql } from "gatsby"
import formatData from "../utils/formatData"

export const getData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              links {
                socialLinks {
                  linkedIn
                  twitter
                  github
                  email
                }
              }
              navBar {
                links {
                  name
                  anchor
                }
              }
            }
          }
        }
      }
    `
  )
  const socialLinks =
    formatData({ data, file: "links", object: "socialLinks" }) || {}
  const navLinks = formatData({ data, file: "navBar", object: "links" }) || []
  return { socialLinks, navLinks }
}
