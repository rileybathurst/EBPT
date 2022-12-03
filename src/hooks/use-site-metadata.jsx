import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          defaultTitle
          name
          url
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
          employees {
            name1
            image1
          }
          gsv
          bing
        }
      }
    }
  `)

  return data.site.siteMetadata
}

// ? do i need itemType and itemScope