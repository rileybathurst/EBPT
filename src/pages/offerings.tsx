import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";

import Header from "../components/header";
import SlimFooter from "../components/slim-footer";
import OfferingsList from "../components/offerings-list";

function Kiley2() {
  return (
    <StaticImage
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/kiley-2.jpg"
      alt="Kiley"
    />
  );
}


const OfferingsPage = () => {
  return (
    <>
      <Header />

      <main className="measured">
        <h1>Our Physical Therapy and Wellness Offerings</h1>

        <div className="slender-image">
          <Kiley2 />
        </div>

        <OfferingsList />
      </main>

      <hr />
      <SlimFooter />
    </>
  );
};

export default OfferingsPage;

export const Head = () => {
  return (
    <SEO
      title="Offerings | Emerald Bay Physical Therapy"
      description="Our Physical Therapy and Wellness Offerings."
    >
      <script type="application/ld+json">
        {`
        "@context": "https://schema.org/",
        "@type": "Service",
        "serviceType": "Physical Therapy",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Emerald Bay Physical Therapy"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Physical Therapy",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Aquatic therapy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Post-surgical rehabilitation"
              }
            },
          ]
        }
      `}
      </script>
    </SEO>
  )
};