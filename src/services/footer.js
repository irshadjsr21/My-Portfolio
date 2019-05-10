import { useStaticQuery, graphql } from "gatsby"
import formatData from "../utils/formatData"

export const getData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              footer {
                copyRightText
              }
            }
          }
        }
      }
    `
  )
  const copyRightText =
    formatData({ data, file: "footer", object: "copyRightText" }) || {}
  return { copyRightText }
}
