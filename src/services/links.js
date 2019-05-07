import { useStaticQuery, graphql } from "gatsby"
import formatData from "../utils/formatData"

export const getSocialLinks = () => {
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
            }
          }
        }
      }
    `
  )
  const formattedData =
    formatData({ data, file: "links", object: "socialLinks" }) || {}
  return formattedData
}
