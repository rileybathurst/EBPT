import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// TODO move this back to the old version
import { SEO } from "../components/seo";

import Header from "../components/header"
import SlimFooter from "../components/slim-footer"
import TeamHeads from "../components/team-heads"

function SnowyBuildingFrontImage() {
  return <StaticImage src="https://ebpt.s3-us-west-1.amazonaws.com/images/snowy-building-front.jpg"
    alt="Winter at the Emerald Bay Physical Therapy Offices in South Lake Tahoe, California" />
}

// markup
const AboutPage = () => {
  return (
    <>
      <Header />

      <div className="single-fold">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span>
            </Link>&nbsp;&nbsp;/&nbsp;&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="item">
              <span itemProp="name">About Us</span>
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main>
        <div className="two-fold">
          <SnowyBuildingFrontImage />
          <div className="two-fold-content">
            <h1>About Us</h1>
            <section>
              {/* // todo: h5 isnt heirachcical */}
              <h5>Emerald Bay Physical Therapy is a comprehensive center for orthopedic and manual physical therapy.</h5>
              <p className="justified-40">We specialize in hands-on, one-on-one treatments that are specific to each patient’s goals. At EBPT, we are committed to health and wellness no matter your age, lifestyle, or athletic abilities. Our highly individualized programs are designed to promote complete recovery from injury and continue into healthy work and recreational activities. We stand out by offering aquatic therapy in our heated therapy pool, manual therapy in private treatment rooms and a multidisciplinary wellness approach. Our focus on quality time spent listening to patients, use of critical thinking to find the cause of pain, and effective manual techniques will exceed your expectations. </p>
            </section>
            <h4 className=""><Link to="/team">Meet Our Team</Link></h4>
            <TeamHeads />
          </div>
        </div>


      </main>

      <hr />

      <SlimFooter />
    </>
  )
}

export default AboutPage

export const Head = () => {
  return (
    <SEO
      title="About Us | Emerald Bay Physical Therapy"
    >
    </SEO>
  );
}