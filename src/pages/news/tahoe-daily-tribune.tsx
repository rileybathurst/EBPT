import * as React from "react";
import { Link, Script } from 'gatsby'
import { SEO } from "../../components/seo";

import TribuneImage from "../../images/tribune";
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import Header from "../../components/header";
import Footer from "../../components/footer";

let title = "Tahoe Daily Tribune Article";

const TahoeDailyTribunePage = () => {
  return (
    <>
      <Header />
      <div className="single-fold">
        <ol className="breadcrumbs">
          <li itemProp="itemListElement">
            <Link to="/news/">News</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
          </li>
          <li>{title}</li>
        </ol>
      </div>

      <hr />

      <main className="two-fold">
        <div className="two-fold-content">
          <a
            href="https://www.tahoedailytribune.com/news/emerald-bay-physical-therapy-a-center-for-health-wellness-in-south-lake-tahoe/"
            target="_blank"
            rel="noopener noreferrer"
            title={title}
          >
            <TribuneImage />
          </a>
        </div>
        <div className="two-fold-content">

          <h1>{title}</h1>
          <p className="h5"><time dateTime="2023-08-11">Aug 11, 2023</time></p>
          <p>
            <a
              href="https://www.tahoedailytribune.com/news/emerald-bay-physical-therapy-a-center-for-health-wellness-in-south-lake-tahoe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out our business feature in the Tribune
            </a>
          </p>
        </div>
      </main>
      <hr />
      <Footer />
    </>
  );
};

export default TahoeDailyTribunePage;

export const Head = ({ location }) => {
  return (
    <SEO
      title={`${title} | ${useSiteMetadata().title}`}
      description="Happenings from around the clinic."
      image="https://ebpt.s3.us-west-1.amazonaws.com/images/news/ebpt-tahoe_daily_tribune-og_image-fs8.png"
      url={location.pathname}
    // TODO: article
    >
      <Script type="application/ld+json">
        {`
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
                "name": ${title},
                "item": "${useSiteMetadata().siteUrl}}/news/tahoe-daily-tribune/"
              }
            ]
          },
        `}
      </Script>

      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "url": "${useSiteMetadata().siteUrl}/news/tahoe-daily-tribune/",
            "headline": ${title},
            "image": "https://ebpt.s3.us-west-1.amazonaws.com/images/news/ebpt-tahoe_daily_tribune-og_image-fs8.png",
            "articleBody": "Check out our business feature in the Tribune",
            "datePublished": "2023-08-11T08:00:00+08:00"
          }
      `}
      </Script>

    </SEO>
  )
};
