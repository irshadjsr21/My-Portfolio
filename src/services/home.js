import { useStaticQuery, graphql } from "gatsby"
import formatData from "../utils/formatData"

export const getData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              home {
                anchor
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
  const textContents =
    formatData({ data, file: "home", object: "textContents" }) || []
  const anchor = formatData({ data, file: "home", object: "anchor" }) || []
  return { textContents, anchor }
}
