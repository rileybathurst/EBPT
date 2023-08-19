import * as React from "react";
import { Link, Script } from 'gatsby'
import { SEO } from "../../components/seo";

import TribuneImage from "../../images/tribune";
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import Header from "../../components/header";
import Footer from "../../components/footer";

const TahoeDailyTribunePage = () => {
  return (
    <>
      <Header />
      {/* // TODO: this should be designed like the about page */}

      <div className="single-fold">
        <ol className="breadcrumbs">
          <li itemProp="itemListElement">
            <Link to="/news/">News</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
          </li>
          <li>Tahoe Daily Tribune Article</li>
        </ol>
      </div>

      <hr />

      <main className="measured">
        <a
          href="https://www.tahoedailytribune.com/news/emerald-bay-physical-therapy-a-center-for-health-wellness-in-south-lake-tahoe/"
          target="_blank"
          rel="noopener noreferrer"
          title="Tahoe Daily Tribune Article"
        >
          <TribuneImage />
        </a>
        <h1>Tahoe Daily Tribune Article</h1>
        <p className="h5">Aug 11, 2023</p>
        <p>
          <a
            href="https://www.tahoedailytribune.com/news/emerald-bay-physical-therapy-a-center-for-health-wellness-in-south-lake-tahoe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out our business feature in the Tribune
          </a>
        </p>
      </main>
      <hr />
      <Footer />
    </>
  );
};

export default TahoeDailyTribunePage;

export const Head = () => {
  return (
    <SEO
      // TODO: bring in the name as a prop
      title={`Tahoe Daily Tribune Article | ${useSiteMetadata().title}`}
      description="Happenings from around the clinic."
      image="https://ebpt.s3.us-west-1.amazonaws.com/images/news/ebpt-tahoe_daily_tribune-og_image-fs8.png"

    // TODO: article
    >
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "url": "${useSiteMetadata().siteUrl}/news/tahoe-daily-tribune/",
            "headline": "Tahoe Daily Tribune Article",
            "image": "https://ebpt.s3.us-west-1.amazonaws.com/images/news/ebpt-tahoe_daily_tribune-og_image-fs8.png",
            "articleBody": "Check out our business feature in the Tribune",
            "datePublished": "2023-08-11T08:00:00+08:00"
          }
      `}
      </Script>

    </SEO>
  )
};

/* 
TODO: removed for testing
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "news",
      "item": "${useSiteMetadata().siteUrl}/news/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Tahoe Daily Tribune Article",
      "item": "${useSiteMetadata().siteUrl}}/news/tahoe-daily-tribune/"
    }
  ]
}, */