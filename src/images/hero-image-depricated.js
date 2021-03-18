import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function Hero() {
  return <StaticImage
    src="./ebpt-header-first.jpg"
    alt="Tahoe"
    placeholder="blurred"
  />
}

const HeroImageDepricated = () => (
  <Hero />
)
export default HeroImageDepricated