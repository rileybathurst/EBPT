import * as React from "react"
import { Link, Script } from "gatsby"
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


const AboutPage = () => {
  return (
    <>
      <Header />

      <div className="single-fold">
        <ol className="breadcrumbs">
          <li>
            <Link to="/offerings/">Offerings</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
          </li>
          <li>Orthotics</li>
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
      title="Orthotics - Emerald Bay Physical Therapy"
      description="Suffer from foot, knee, or hip pain? Custom orthotics might be right for you!"
    >
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Offerings",
              "item": "https://example.com/offerings"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Orthotics",
              "item": "https://example.com/offerings/orthotics"
            }]
          }
        `}
      </Script>
    </SEO>
  );
}
