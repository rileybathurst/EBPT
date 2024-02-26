import * as React from "react";
import { Link, Script } from 'gatsby'
import { SEO } from "../../components/seo";

import FlyerImage from "../../images/flyer";
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import Header from "../../components/header";
import Footer from "../../components/footer";

let title = "Pelvic Health Dysfunction";

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
            <FlyerImage />
          </a>
        </div>
        <div className="two-fold-content">

          <h1>{title}</h1>
          <h2>Brief lecture and exercise instruction</h2>
          <p className="h5">
            {/* // ? handwritten for now maybe I should do something */}
            <time dateTime="2024-03-25T16:30">March 25, 2024 - 4:30pm</time> -  <time dateTime="2024-03-25T17:30">5:30pm</time>
          </p>

          <p>
            Hosted by Raven Osika SPT from USC
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
      image="https://ebpt.s3.us-west-1.amazonaws.com/images/news/ebpt-flyer.jpg"
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
                "name": "${title}",
                "item": "${useSiteMetadata().siteUrl}}/news/pelvic-health-dysfunction-lecture/"
              }
            ]
          },
        `}
      </Script>

      <Script type="application/ld+json">
        {`
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "${title}",
          "startDate": "2024-03-25T16:30",
          "endDate": "2024-03-25T17:30",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "${useSiteMetadata().name}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "${useSiteMetadata().location.address.streetAddress}",
              "addressLocality": "${useSiteMetadata().location.address.addressLocality}",
              "addressRegion": "${useSiteMetadata().location.address.addressRegion}",
              "postalCode": "${useSiteMetadata().location.address.postalCode}"
            },
          },
          "image": "https://ebpt.s3.us-west-1.amazonaws.com/images/news/ebpt-flyer.jpg",
          "description": "Brief lecture and exercise instruction.",
          "performer": {
            "@type": "Person",
            "name": "Raven Osika SPT"
          },
          "organizer": {
            "@type": "Organization",
            "name": "${useSiteMetadata().name}",
            "url": "${useSiteMetadata().url}"
          }
        `}
      </Script>


    </SEO>
  )
};
