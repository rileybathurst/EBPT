import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const KileyProfile = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "kiley-profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default KileyProfile
