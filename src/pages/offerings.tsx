import * as React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import Header from "../components/header";
import SlimFooter from "../components/slim-footer";
import Seo from "../components/seo";

function Kiley2() {
  return (
    <StaticImage
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/kiley-2.jpg"
      alt="Kiley"
    />
  );
}

// markup
const OfferingsPage = () => {
  return (
    <>
      <Header />
      <Seo
        title="Offerings"
        description="Our Physical Therapy and Wellness Offerings"
      />
      <main className="measured">
        <h1>Our Physical Therapy and Wellness Offerings</h1>

        <div className="slender-image">
          <Kiley2 />
        </div>

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
        </ul>
      </main>

      <hr />
      <SlimFooter />
    </>
  );
};

export default OfferingsPage;
