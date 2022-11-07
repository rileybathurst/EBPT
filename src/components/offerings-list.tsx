import React from "react";
import { Link } from "gatsby";

// import { SEO } from "./seo";

const OfferingsList = () => (
  <ul className="catalog" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Aquatic therapy</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Post-surgical rehabilitation</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Injury prevention assessments</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Instrument-assisted soft tissue mobilization</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Myofascial release</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Cupping</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Kinesio taping (Rock Tape)</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Cervical mechanical traction</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">TRX training</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Pilates reformer instruction</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">TENS electrical stimulation</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <Link to="/offerings/pelvic-health"><span itemProp="name">Pelvic Floor Rehabilitation</span></Link>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <Link to="/offerings/orthotics"><span itemProp="name">Orthotics</span></Link>
    </li>
  </ul>
);

export default OfferingsList;

/* // ? this doesnt seem to be able to be part of a component which is kind of fair enough
export const Head = () => (
  <SEO>
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
) */