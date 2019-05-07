import { useStaticQuery, graphql } from "gatsby"
import formatData from "../utils/formatData"

export const getTextContents = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              home {
                textContents {
                  headerText1
                  headerText2
                  introText
                }
              }
            }
          }
        }
      }
    `
  )
  const formattedData =
    formatData({ data, file: "home", object: "textContents" }) || []
  return formattedData
}
