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
              contact {
                title
                contactText
                anchor
              }
            }
          }
        }
      }
    `
  )
  const links = formatData({ data, file: "links", object: "socialLinks" }) || {}
  const title = formatData({ data, file: "contact", object: "title" }) || ""
  const anchor = formatData({ data, file: "contact", object: "anchor" }) || ""
  const contactText =
    formatData({
      data,
      file: "contact",
      object: "contactText",
    }) || ""
  return { links, title, contactText, anchor }
}
