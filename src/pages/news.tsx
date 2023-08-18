import * as React from "react";
import { SEO } from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "gatsby";
import TribuneImage from "../images/tribune";

const NewsPage = () => {
  return (
    <>
      <Header />
      {/* // TODO: this should be designed like the about page */}
      <main>
        <h1 className="two-fold">News</h1>
        <hr />
        {/* <News /> */}

        {/* // TODO: this would be cool to be cards here */}
        <ul className="deck">
          <li className="card">
            <Link to="/news/tahoe-daily-tribune">
              <TribuneImage />
              <h2 className="h4">Tahoe Daily Tribune Article</h2>
              {/* <p className="h5">Aug 11, 2023</p> */}
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

export const Head = () => {
  return (
    <SEO
      title={`News | ${useSiteMetadata().title}`}
      description="Happenings from around the clinic"
    />
  )
};