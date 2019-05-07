import { useStaticQuery, graphql } from "gatsby"
import formatData from "../utils/formatData"

export const getContactText = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              contact {
                contactText
              }
            }
          }
        }
      }
    `
  )
  const formattedData =
    formatData({ data, file: "contact", object: "contactText" }) || ""
  return formattedData
}
