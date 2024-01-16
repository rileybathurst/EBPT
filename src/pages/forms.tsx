import * as React from "react";
import { Link, Script } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Header from "../components/header";
import SlimFooter from "../components/slim-footer";
import FormList from "../components/form-list";

// import Kiley2 from "../images/kiley-2" // ? can i use this?
function Kiley2() {
  return (
    <StaticImage
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/kiley-2.jpg"
      alt="Kiley"
    />
  );
}

const FormsPage = () => {
  return (
    <>
      <Header />

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

export default FormsPage;

export const Head = ({ location }) => {
  return (
    <SEO
      title={`Patient Intake Forms | ${useSiteMetadata().title}`}
      description="Fill in forms online"
      url={location.pathname}
    />
  );
}