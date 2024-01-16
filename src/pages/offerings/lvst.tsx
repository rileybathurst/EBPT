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
          <li>LSVT BIG Treatment for Parkinson’s Disease</li>
        </ol>
      </div>

      <hr />

      {/* // TODO: move the itemscope to the head */}
      <main itemScope itemType="https://schema.org/Article">
        <div className="two-fold">
          <StaticImage
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+Parkinson's+Disease+over+a+flat+emerald+green+circle+with+texture+.jpg"
            alt="an icon symbolizing Kinessio Therapy"
            className="offering-image"
          />
          <div className="two-fold-content">
            <h1 className="h1__clamped" itemProp="name">LSVT BIG Treatment for Parkinson’s Disease</h1>
            <section itemProp="description">
              <p>LSVT BIG trains people with Parkinson’s to move their bodies normally. As the disease progresses, movements get smaller and slower, yet feel normal to the involved person. This causes problems with dressing and other tasks for self-care, usual household chores, and walking. The program focuses on recalibrating the brain to understand what normal movement is.</p>

              <p>The treatment involves 4 consecutive weeks of attending PT 4 days a week to develop a habit of performing a series of exercises with the aim of improving a person’s ability to move in and out of bed, stand up and sit down, get in and out of cars and buildings, and walk, as well as improving fine motor skills such as tying shoelaces or buttoning a shirt.</p>

              <p>Studies have shown the LSVT BIG system consistently drives improvement for people at all stages of Parkinson’s Disease. Quality of life is improved by allowing people to function more independently. Come see us and find out if this treatment is appropriate for you!</p>
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
      title={`LSVT BIG Treatment for Parkinson’s Disease | ${useSiteMetadata().title}`}
      description="LSVT BIG trains people with Parkinson’s to move their bodies normally. As the disease progresses, movements get smaller and slower, yet feel normal to the involved person"
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
                  "name": "LSVT BIG Treatment for Parkinson’s Disease",
                  "@id": "https://emeraldbay.physio/offerings/LSVT BIG Treatment for Parkinson’s Disease"
                }
              }
            ]
          }
        `}
      </Script>
    </SEO >
  );
}
