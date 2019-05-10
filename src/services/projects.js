import { useStaticQuery, graphql } from "gatsby"
import formatData from "../utils/formatData"

export const getData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              projects {
                title
                anchor
                list {
                  name
                  description
                  image
                  github
                  points {
                    title
                    text
                  }
                  live {
                    text
                    link
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const title = formatData({ data, file: "projects", object: "title" }) || ""
  const list = formatData({ data, file: "projects", object: "list" }) || []
  const anchor = formatData({ data, file: "projects", object: "anchor" }) || ""
  return { title, anchor, list }
}
