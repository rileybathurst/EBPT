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
          <li>Remote Therapeutic Monitoring</li>
        </ol>
      </div>

      <hr />

      {/* // TODO: move the itemscope to the head */}
      <main itemScope itemType="https://schema.org/Article">
        <div className="two-fold">
          <StaticImage
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/Firefly+corporate+illustration+of+very+stylized+monitoring+therapy+over+a+flat+emerald+green+circle+.webp"
            alt="an icon symbolizing Remote Therapeutic Monitoring"
            className="offering-image"
            // I think this has something to do with no padding on the image file vs the other images
            style={{ height: '100%' }}
          />
          <div className="two-fold-content">
            <h1 className="h1__clamped" itemProp="name">Remote Therapeutic Monitoring</h1>
            <section itemProp="description">
              Remote Therapeutic Monitoring (RTM) is a service to provide patient treatment and monitoring by remote means.
              Once enrolled, patients will be emailed a link from Exercise Pro Live to download the &apos;Exercise Now&apos; app or continue in the web based portal. The system will provide access to a detailed home exercise program where the patient can enter their sets, repetitions, and weight. The patient can also comment on pain levels, difficulty of the exercise, as well as directly message their therapist.
              Benefits of RTM:
              <ul>
                <li key='engagement'>Increased patient engagement and adherence to treatment</li>
                <li key='reduced'>Reduced number of trips to the clinic</li>
                <li key='response'>Therapist can better understand the patient&apos;s response to treatment and adjust accordingly</li>
                <li key='communication'>Easy communication between the therapist and patient</li>
                <li key='approved'>Medicare approved</li>
              </ul>

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

export const Head = ({ location }) => {
  return (
    <SEO
      title={`Remote Therapeutic Monitoring | ${useSiteMetadata().title}`}
      description=" Remote Therapeutic Monitoring (RTM) is a service to provide patient treatment and monitoring by remote means."
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
                  "name": "Remote Therapeutic Monitoring",
                  "@id": "https://emeraldbay.physio/offerings/remote-therapeutic-monitoring"
                }
              }
            ]
          }
        `}
      </Script>
    </SEO >
  );
}
