import * as React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import Header from "../components/header";
import SlimFooter from "../components/slim-footer";
import Offerings from "../components/offerings";
// import Seo from "../components/seo";

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
      <main className="measured">
        <h1>Our Physical Therapy and Wellness Offerings</h1>

        <div className="slender-image">
          <Kiley2 />
        </div>

        <Offerings />
      </main>

      <hr />
      <SlimFooter />
    </>
  );
};

export default OfferingsPage;
