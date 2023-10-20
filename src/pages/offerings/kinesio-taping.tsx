import * as React from "react"
import { Link, Script } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../../components/seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import Header from "../../components/header"
import SlimFooter from "../../components/slim-footer"

const KinessioTherapyPage = () => {
  return (
    <>
      <Header />

      <div className="single-fold">
        <ol className="breadcrumbs">
          <li>
            <Link to="/offerings/">Offerings</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
          </li>
          <li>Kinessio Therapy</li>
        </ol>
      </div>

      <hr />

      {/* // TODO: move the itemscope to the head */}
      <main itemScope itemType="https://schema.org/Article">
        <div className="two-fold">
          <StaticImage
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+aquatic+therapy+over+a+flat+emerald+green+circle+with+texture+on+a.jpg"
            alt="an icon symbolizing Kinessio Therapy"
            className="offering-image"
          />
          <div className="two-fold-content">
            <h1 className="h1__clamped" itemProp="name">Kinessio Therapy</h1>
            <section itemProp="description">
              <p>Kinesiology Tape is made from a stretchy fabric with adhesive applied in a wavelike pattern on the back. When applied, the tape decompresses by gently lifting the skin underneath it, creating more space between the layers of skin and fascia and allowing for increased circulation. The tension from the tape increases the brain’s awareness of the area that is taped due to heightened sensitivity.</p>

              <p>Taping can be placed with the purpose of reducing swelling, inhibiting muscles that are overused, stimulating muscles that are not being used, encouraging a change in posture, reducing pain, or assisting in support of a joint that is injured.</p>

              <p>Our PTs are certified in the use of RockTape kinesiology tape and would be happy to work with you to find out if taping works for you, which method works best, and how to apply it yourself if it is helpful.</p>
            </section>
          </div>
        </div>
      </main>

      <hr />

      <SlimFooter />
    </>
  )
}

export default KinessioTherapyPage

export const Head = () => {
  return (
    <SEO
      title={`Kinessio Therapy | ${useSiteMetadata().title}`}
      description="Kinesiology Tape is made from a stretchy fabric with adhesive applied in a wavelike pattern on the back"
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
                  "name": "Kinessio Therapy",
                  "@id": "https://emeraldbay.physio/offerings/kinessio-therapy"
                }
              }
            ]
          }
        `}
      </Script>
    </SEO >
  );
}
