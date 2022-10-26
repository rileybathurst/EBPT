import * as React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

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

// markup
const OfferingsPage = () => {
  return (
    <>
      <Header />
      {/*       <Seo
        title="Offerings"
        description="Our Physical Therapy and Wellness Offerings"
      /> */}

      <div className="single-fold">
        <ol className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link itemProp="item" to="/">
              <span itemProp="name">Home</span>
            </Link>&nbsp;&nbsp;/&nbsp;&nbsp;
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="item">
              <span itemProp="name">Offerings</span>
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

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
