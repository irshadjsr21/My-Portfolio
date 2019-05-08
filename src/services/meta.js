import { useStaticQuery, graphql } from "gatsby"

export const getMetaData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
            twitterUsername
          }
        }
      }
    `
  )
  const formattedData = data.site.siteMetadata || {}
  return formattedData
}
