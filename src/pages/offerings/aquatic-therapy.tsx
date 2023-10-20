import * as React from "react"
import { Link, Script } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../../components/seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import Header from "../../components/header"
import SlimFooter from "../../components/slim-footer"

const AquaticTherapyPage = () => {
  return (
    <>
      <Header />

      <div className="single-fold">
        <ol className="breadcrumbs">
          <li>
            <Link to="/offerings/">Offerings</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
          </li>
          <li>Aquatic Therapy</li>
        </ol>
      </div>

      <hr />

      {/* // TODO: move the itemscope to the head */}
      <main itemScope itemType="https://schema.org/Article">
        <div className="two-fold">
          <StaticImage
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+Kinesio+taping+over+a+flat+emerald+green+circle+with+texture+on+a+.jpg"
            alt="an icon symbolizing aquatic therapy"
            className="offering-image"
          />
          <div className="two-fold-content">
            <h1 className="h1__clamped" itemProp="name">Aquatic Therapy</h1>
            <section itemProp="description">
              <p>Aquatic therapy is conducted in a swimming pool that is temperature controlled. It can allow a person to perform movements at an earlier stage of rehabilitation due to reduced weight-bearing from the buoyancy of the water. There is resistance in every direction from moving through the water, while the warmth and compression encourage circulation and increase the comfort level for movement.</p>
              <hr className="inline__hr" />
              <p>Activities can include cardiovascular, conditioning, and strengthening exercises using the current, paddles, or other available tools to increase resistance.</p>
            </section>
          </div>
        </div>
      </main>

      <hr />

      <SlimFooter />
    </>
  )
}

export default AquaticTherapyPage

export const Head = () => {
  return (
    <SEO
      title={`Aquatic Therapy | ${useSiteMetadata().title}`}
      description="Aquatic therapy is conducted in a swimming pool that is temperature controlled. It can allow a person to perform movements at an earlier stage of rehabilitation due to reduced weight-bearing from the buoyancy of the water"
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
                  "name": "Aquatic Therapy",
                  "@id": "https://emeraldbay.physio/offerings/aquatic-therapy"
                }
              }
            ]
          }
        `}
      </Script>
    </SEO >
  );
}
