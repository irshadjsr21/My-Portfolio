import { useStaticQuery, graphql } from "gatsby"
import formatData from "../utils/formatData"

export const getData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              skill {
                title
                anchor
                skills {
                  name
                  list {
                    name
                    percentage
                  }
                }
                levels {
                  max
                  min
                  name
                }
              }
            }
          }
        }
      }
    `
  )
  const skills = formatData({ data, file: "skill", object: "skills" }) || []
  const levels = formatData({ data, file: "skill", object: "levels" }) || []
  const title = formatData({ data, file: "skill", object: "title" }) || ""
  const anchor = formatData({ data, file: "skill", object: "anchor" }) || ""
  return { skills, title, anchor, levels }
}
