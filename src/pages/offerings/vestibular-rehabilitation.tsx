import * as React from "react"
import { Link, Script } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../../components/seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import Header from "../../components/header"
import SlimFooter from "../../components/slim-footer"


const VestibularRehabilitationPage = () => {
  return (
    <>
      <Header />

      <div className="single-fold">
        <ol className="breadcrumbs">
          <li>
            <Link to="/offerings/">Offerings</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
          </li>
          <li>Vestibular Rehabilitation</li>
        </ol>
      </div>

      <hr />

      <main itemScope itemType="https://schema.org/Article">
        <div className="two-fold">
          <StaticImage
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+Vestibular+Rehabilitation+over+a+flat+emerald+green+circle+with+te.jpg"
            alt="an icon symbolizing Kinessio Therapy"
            className="offering-image"
          />
          <div className="two-fold-content">
            <h1 className="h1__clamped" itemProp="name">Vestibular Rehabilitation</h1>
            <section itemProp="description">
              <p>If you suffer from dizziness or balance problems, vestibular rehabilitation may offer the help you need. In addition, dizziness and balance issues can lead to headaches and / or muscle fatigue.</p>

              <p>The most common type of dizziness is Benign Paroxysmal Positional Vertigo (BPPV), triggered by movement and recognized by short bouts (one minute or less) where it seems like the world is spinning. It involves the inner ear, and can usually be resolved within 1-3 visits of PT.</p>

              <p>There are more involved conditions where spinning dizziness lasts for longer than a minute or the dizziness does not feel like spinning – many of these conditions can also be treated with Vestibular PT.</p>

              <p>Vestibular Rehabilitation can also treat balance disorders, stroke, traumatic brain injury, Meniere’s disease, and other conditions by addressing posture, strength, stability, and gait. Training the brain to coordinate with surroundings is also a useful treatment strategy. </p>
            </section>
          </div>
        </div>
      </main>

      <hr />

      <SlimFooter />
    </>
  )
}

export default VestibularRehabilitationPage

export const Head = ({ location }) => {
  return (
    <SEO
      title={`Vestibular Rehabilitation | ${useSiteMetadata().title}`}
      description="If you suffer from dizziness or balance problems, vestibular rehabilitation may offer the help you need. In addition, dizziness and balance issues can lead to headaches and / or muscle fatigue"
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
                  "name": "Vestibular Rehabilitation",
                  "@id": "https://emeraldbay.physio/offerings/Vestibular Rehabilitation"
                }
              }
            ]
          }
        `}
      </Script>
    </SEO >
  );
}
