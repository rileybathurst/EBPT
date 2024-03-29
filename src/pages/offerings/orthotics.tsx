import * as React from "react"
import { Link, Script } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../../components/seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import Header from "../../components/header"
import SlimFooter from "../../components/slim-footer"

function OrthoticsImage() {
  return <StaticImage
    src="https://ebpt.s3.us-west-1.amazonaws.com/images/orthotics-1.jpg"
    alt="working on orthotics at emerald bay physical therapy"
    objectFit="scale-down"
    objectPosition="top"
    itemProp="image"
  />
}


const OrthoticsPage = () => {
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

      {/* // TODO: move the itemscope to the head */}
      <main itemScope itemType="https://schema.org/Article">
        <div className="two-fold">
          <OrthoticsImage />
          <div className="two-fold-content">
            <StaticImage
              src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+orthotics+over+a+flat+emerald+green+circle+with+texture+on+a+white.jpg"
              alt="icon symbolizing aquatic therapy"
              className="offering-icon"
            />
            <hgroup>
              {/* // TODO needs flex organization */}
              {/* <h4>Offerings</h4> */}
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

export default OrthoticsPage

export const Head = ({ location }) => {
  return (
    <SEO
      title={`Orthotics | ${useSiteMetadata().title}`}
      description="Suffer from foot, knee, or hip pain? Custom orthotics might be right for you!"
      url={location.pathname}
    >
      {/* // TODO: add variables in here */}
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement":
            [
              {
                "@type": "ListItem",
                "position": 1,
                "item":
                {
                  "name": "Offerings",
                  "@id": "https://emeraldbay.physio/offerings"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item":
                {
                  "name": "Orthotics",
                  "@id": "https://emeraldbay.physio/offerings/orthotics"
                }
              }
            ]
          }
        `}
      </Script>
    </SEO >
  );
}
