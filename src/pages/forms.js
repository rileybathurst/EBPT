import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Header from "../components/header";
import SlimFooter from "../components/slim-footer";
import FormList from "../components/form-list";
import Seo from "../components/seo";

// import Kiley2 from "../images/kiley-2"
function Kiley2() {
  return (
    <StaticImage
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/kiley-2.jpg"
      alt="Kiley"
    />
  );
}

// markup
const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Seo title="Patient Intake Forms" />
      <main className="measured">
        <h2 className="">Intake Forms</h2>

        <div className="slender-image">
          <Kiley2 />
        </div>

        <section id="intake-forms" className="measured">
          <FormList />
        </section>
      </main>

      <hr />

      <SlimFooter />
    </>
  );
};

export default NotFoundPage;
