// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/

// using this with the newer Gatsby Head API seo component
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/#editing-html-and-body

//  v2: Local gatsby-ssr.js is not run anymore on a static build. #4718 
// https://github.com/gatsbyjs/gatsby/issues/4718#issuecomment-411077499

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: "en",
    itemType: "https://schema.org/LocalBusiness",
    itemScope: true,
  })
}