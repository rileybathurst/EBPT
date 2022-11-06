import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          defaultTitle
          name
          siteUrl
          description
          image
          ogImage
          twitterImage
          openingHours
          telephone
          faxNumber
          logo
          logoSVG
          areaServed
          author
          paymentAccepted
          location {
            address {
              streetAddress
              addressLocality
              addressRegion
              postalCode
            }
          }
          geo {
            latitude
            longitude
            geoRadius
          }
          slogan
          gsv
        }
      }
    }
  `)

  return data.site.siteMetadata
}

// ? do i need itemType and itemScope