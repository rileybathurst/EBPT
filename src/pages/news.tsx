// TODO: Figure out how to query for the image
// TODO: variable array of news items

import * as React from "react";
import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "gatsby";
import TribuneImage from "../images/tribune";
import FlyerImage from "../images/flyer";

const NewsPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="two-fold">News</h1>
        <hr />

        <ul className="deck">

          <li key="pelvic-health-dysfunction-lecture" className="card">
            <Link to="/news/pelvic-health-dysfunction-lecture">
              <FlyerImage />
              <h2 className="h4">Pelvic Health Dysfunction Brief lecture and exercise instruction</h2>
            </Link>
          </li>

          <li key="tahoe-daily-tribune" className="card">
            <Link to="/news/tahoe-daily-tribune">
              <TribuneImage />
              <h2 className="h4">Tahoe Daily Tribune Article</h2>
              <p>Read The Article</p>
            </Link>
          </li>

        </ul>

        <hr />
      </main>
      <Footer />
    </>
  );
};

export default NewsPage;

export const Head = ({ location }) => {
  return (
    <SEO
      title={`News | ${useSiteMetadata().title}`}
      description="Happenings from around the clinic"
      url={location.pathname}
    />
  )
};