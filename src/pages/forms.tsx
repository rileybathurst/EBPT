import * as React from "react";
import { Link, Script } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";

import Header from "../components/header";
import SlimFooter from "../components/slim-footer";
import FormList from "../components/form-list";
// import Seo from "../components/seo";

// import Kiley2 from "../images/kiley-2"
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
              <span itemProp="name">Intake Forms</span>
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

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

export const Head = () => {
  return (
    <SEO
      title="Patient Intake Forms | Emerald Bay Physical Therapy"
      description="Fill in forms online"
    >
      {/* this needs more understanding */}
      <Script type="application/ld+json">
        {JSON.stringify({})}

      </Script>
    </SEO>
  );
}