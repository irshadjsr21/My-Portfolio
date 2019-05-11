import { useStaticQuery, graphql } from "gatsby"
import formatData from "../utils/formatData"

export const getData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              testimonials {
                title
                anchor
                list {
                  text
                  name
                  image
                }
              }
            }
          }
        }
      }
    `
  )
  const list = formatData({ data, file: "testimonials", object: "list" }) || []
  const anchor =
    formatData({ data, file: "testimonials", object: "anchor" }) || ""
  const title =
    formatData({ data, file: "testimonials", object: "title" }) || ""
  return { list, anchor, title }
}
