import * as React from "react";
// import { Link } from "gatsby"
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

        <ul className="catalog">
          <li itemScope itemType="https://schema.org/Service">
            <span itemProp="name">Aquatic therapy</span>
          </li>
          <li itemScope itemType="https://schema.org/Service">
            <span itemProp="name">Post-surgical rehabilitation</span>
          </li>
          <li itemScope itemType="https://schema.org/Service">
            <span itemProp="name">Injury prevention assessments</span>
          </li>
          <li itemScope itemType="https://schema.org/Service">
            <span itemProp="name">Instrument-assisted soft tissue mobilization</span>
          </li>
          <li itemScope itemType="https://schema.org/Service">
            <span itemProp="name">Myofascial release</span>
          </li>
          <li itemScope itemType="https://schema.org/Service">
            <span itemProp="name">Cupping</span>
          </li>
          <li itemScope itemType="https://schema.org/Service">
            <span itemProp="name">Kinesio taping (Rock Tape)</span>
          </li>
          <li itemScope itemType="https://schema.org/Service">
            <span itemProp="name">Cervical mechanical traction</span>
          </li>
          <li itemScope itemType="https://schema.org/Service">
            <span itemProp="name">TRX training</span>
          </li>
          <li itemScope itemType="https://schema.org/Service">
            <span itemProp="name">Pilates reformer instruction</span>
          </li>
          <li itemScope itemType="https://schema.org/Service">
            <span itemProp="name">TENS electrical stimulation</span>
          </li>
        </ul>
      </main>

      <hr />
      <SlimFooter />
    </>
  );
};

export default OfferingsPage;
