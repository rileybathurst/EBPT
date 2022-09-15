// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
// https://github.com/gatsbyjs/gatsby/issues/4718#issuecomment-411077499

// const React = require("react") // this is importing as CommonJS which is not what I normally use
import React from "react"
// import { SEO } from "./src/components/seo";

import En from "./src/components/en";

const HtmlAttributes = {
  // lang: 'en-us',
  lang: En,
}

export const onRenderBody = (
  {
    setHtmlAttributes,
  }, pluginOptions
) => {
  setHtmlAttributes(HtmlAttributes)
}
