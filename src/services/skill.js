import { useStaticQuery, graphql } from "gatsby"
import formatData from "../utils/formatData"

export const getSkillsList = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              skill {
                skills {
                  name
                  percentage
                }
              }
            }
          }
        }
      }
    `
  )
  const formattedData =
    formatData({ data, file: "skill", object: "skills" }) || []
  return formattedData
}
