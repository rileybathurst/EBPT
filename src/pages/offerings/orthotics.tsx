import * as React from "react"
import { Link, HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { SEO } from "../../components/seo";
import Header from "../../components/header"
import SlimFooter from "../../components/slim-footer"
import Title from "../../components/title"
import Scope from "../../components/scope"

function OrthoticsImage() {
  return <StaticImage
    src="https://ebpt.s3.us-west-1.amazonaws.com/images/orthotics-1.jpg"
    alt="working on orthotics at emerald bay physical therapy"
    objectFit="scale-down"
    objectPosition="top"
    itemProp="image"
  />
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
            <Link itemProp="item" to="/offerings/">
              <span itemProp="name">Offerings</span>
            </Link>&nbsp;&nbsp;/&nbsp;&nbsp;
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Orthotics</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </div>

      <hr />

      <main itemScope itemType="https://schema.org/Article">
        <div className="two-fold">
          <OrthoticsImage />
          <div className="two-fold-content">
            <hgroup>
              {/* // TODO needs flex organization */}
              <h4>Offerings</h4>
              <h1 className="h1__clamped" itemProp="name">Orthotics</h1>
            </hgroup>
            <section itemProp="description">
              <h2 className="h4">Suffer from foot, knee, or hip pain? Custom orthotics might be right for you!</h2>

              <p>Custom orthotics work by supporting our foundation - the feet.
                Custom orthotics will specifically help to correct any misalignments and provide support throughout the entire surface of your foot.
                Research supports using custom orthotics in the treatment of patellofemoral pain (knee pain), plantar fasciitis, and medial tibial stress syndrome (shin splints).
                Custom orthotics are also effective at increasing postural control and balance.</p>
              <hr className="inline__hr" />
              <h2 className="h4">The orthotics can be made to work with various shoe types, and even ski boots!</h2>
            </section>
          </div>
        </div>

        {/* // TODO there are 2 more images in aws to add here but I also need to design */}

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
      // can I add the end of the title as a variable from somewhere else
      title="Orthotics - Emerald Bay Physical Therapy"
      description="Do you have pain in the pelvis, low back or hips that is associated with sitting, walking, urination, or intercourse?"
      itemScope='true'
      pathname=''
    >
      {/* // <meta name="description" content="" /> */}
      {/* // <meta name="image" itemProp="image" content="https://ebpt.s3.us-west-1.amazonaws.com/images/annie-spratt--l-eemJU0vE-og_image.webp" /> */}
      {/* // <meta property="og:image" itemProp="image" content="https://ebpt.s3.us-west-1.amazonaws.com/images/annie-spratt--l-eemJU0vE-og_image.webp" /> */}
      <script type="application/ld+json">{JSON.stringify({})}</script>
    </SEO>
  ); // TODO: Make this everywhere // it possibly needs variables etc
  // TODO add the rest of this
}
/* 
had a rough idea to build a secondary export but that doesnt really seem the way to go
export const Scope = () => {
  return (
    <Scope scope='true' />
  )
} */