import React from "react"
import Helmet from "react-helmet"
import { getMetaData } from "../services/meta"

export default function Meta() {
  const data = getMetaData()
  const { title, description, url, image, twitterUsername, keywords } = data
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="30 days" />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image:url" content={image} />
      <meta property="fb:app_id" content="400959247410317" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:image" content={image} />

      <meta name="msvalidate.01" content="DBB2A0C996A4FC8857E6D5DA3A247985" />
    </Helmet>
  )
}
