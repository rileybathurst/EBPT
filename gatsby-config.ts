import type { GatsbyConfig } from "gatsby";
require("dotenv").config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Emerald Bay Physical Therapy",
    defaultTitle: "Emerald Bay Physical Therapy",
    name: "Emerald Bay Physical Therapy",
    siteUrl: "https://emeraldbay.physio/",
    url: "https://emeraldbay.physio", // No trailing slash allowed!
    description:
      "Emerald Bay Physical Therapy is a comprehensive center for orthopedic and manual physical therapy.",
    image: "emerald-bay-pt-og_image.jpg",
    ogImage: "emerald_bay_physical_therapy-og_image.jpg",
    twitterImage: "emerald_bay_physical_therapy-twitter_image.jpg",
    openingHours: "Mo, Tu, We, Th, Fr 08:00-18:00",
    telephone: "(530)542-2662",
    faxNumber: "(530)542-2661",
    logo: "/ebpt-logo.png",
    logoSVG:
      "<link rel='icon' href='data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 160 160' style='enable-background:new 0 0 160 160;' xml:space='preserve'><title>Emerald Bay Physical Therapy logo</title><style>path {fill: %23499e8f;}</style><style media='screen and (prefers-color-scheme: dark)'>path {fill: %23f8f8f8;}</style><g><g><path d='M36.89,42c-0.34-0.34-0.92-0.27-1.16,0.15L0.13,94.37c-0.1,0.15-0.15,0.33-0.12,0.51c0.03,0.21,0.06,0.43,0.07,0.54 l0,0.02c0.12,0.91,0.11,1.39,0.49,1l44.91-44.86c0.32-0.32,0.28-0.84-0.07-1.11l-0.37-0.33L36.89,42z'/></g><g><path d='M78.45,25L1.49,101.95c-0.14,0.14-0.2,0.34-0.15,0.53l0,0.01c0.08,0.35,0.45,0.54,0.77,0.4L112.42,57.2 c0.49-0.2,0.61-0.84,0.24-1.21L81.6,25C80.73,24.13,79.32,24.13,78.45,25z'/></g><g><path d='M159.88,94.71l-26.5-40.77c-0.19-0.3-0.58-0.42-0.91-0.28l-10.13,4.14c-0.49,0.2-0.61,0.84-0.24,1.21l36.65,36.65 c0.43,0.43,1.16,0.18,1.24-0.42l0-0.02C160.02,95.03,159.98,94.85,159.88,94.71z'/></g><path d='M79.95,86.2c0.57,0,1.14,0.22,1.58,0.66l40.44,40.65c0.88,0.89,1.01,1.77-0.02,2.49c-4.86,3.35-13.11,5.66-21.83,5.66 c-6.35,0-12.95-1.23-18.66-4.17c-7.35-3.8-15.23-6.66-23.88-6.66c-5.69,0-11.71,1.24-18.14,4.26c-0.69,0.33-1.25,0.48-1.64,0.48 c-0.95,0-0.96-0.9,0.27-2.4l40.31-40.31C78.81,86.41,79.38,86.2,79.95,86.2'/><path d='M106.22,106.77l-5.7-18.6c-0.17-0.56-0.67-0.88-1.19-0.88c-0.31,0-0.62,0.11-0.87,0.36l-5.66,5.63L106.22,106.77z'/><g><path d='M158.07,101.39c-10.84-10.84-37.64-37.64-40.95-40.95c-0.21-0.21-0.53-0.28-0.81-0.16L5.33,106.25 c-2.77,1.15-2.58,5.14,0.29,6.01c8.16,2.47,23.16,4.48,44.92-2.47l25.4-25.4c1.07-1.07,2.5-1.66,4.01-1.66 c1.52,0,2.96,0.6,4.03,1.68l6.38,6.42l5.66-5.63c0.89-0.88,2.06-1.37,3.31-1.37c2.09,0,3.9,1.34,4.5,3.33l3.02,9.85 c19.87,0.85,39.82,5.27,49.54,7.46C158.16,104.86,159.36,102.69,158.07,101.39z'/></g></g></svg> />",
    areaServed: "South Lake Tahoe, California",
    author: "Emerald Bay Physical Therapy",
    paymentAccepted: "Cash, deductibles, co-pays, co-insurance",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "812 Emerald Bay Road",
        addressLocality: "South Lake Tahoe",
        addressRegion: "CA",
        postalCode: "96150",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.91744984104439",
      longitude: "-120.01076773004415",
      geoRadius: "80470",
    },
    slogan:
      "Private, safe, and effective one-on-one treatments to help you live your best life!",
    employees: {
      "@type": "Person",
      name1: "Jessica Jones",
      image1: "https://ebpt.s3-us-west-1.amazonaws.com/images/headshot.jpg",
    },

    gsv: "t-GHhCwvq1SjOG3qV4JFNZpOo_6c5og1i1UlH_WvIOw",
    bing: "E5A782AB43609C82DDB8A36BA607AB08",
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`),
          require("autoprefixer"),
          require("postcss-nested"),
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Emerald Bay Physical Therapy`,
        short_name: `EBPT`,
        start_url: `/`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // currently everything is an offering but this may have to be broken up later
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeScriptHashes: false,
        directives: {
          "style-src": "'self' 'unsafe-inline' use.typekit.net p.typekit.net",
          "script-src": "'self' 'unsafe-inline' use.typekit.net",
          // the unsafe-inline on script-src is a problem for https://observatory.mozilla.org but without it the images break
          "font-src": "'self' use.typekit.net",
          "img-src": "'self' 'unsafe-inline' data: https://p.typekit.net",
        },
      },
    },
    // helps with the CSP in a substatial way
    // netlify asked to turn it off check the observatory score
    // "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
};

export default config;
