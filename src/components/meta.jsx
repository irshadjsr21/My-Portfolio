import React from "react"
import Helmet from "react-helmet"
import { getMetaData } from "../services/meta"

export default function Meta() {
  const data = getMetaData()
  const { title, description, url, image, twitterUsername } = data
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="web developer, irshad, ansari, irshad ansari"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="30 days" />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="Web developer portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  )
}
