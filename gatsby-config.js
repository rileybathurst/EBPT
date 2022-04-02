// require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Emerald Bay Physical Therapy",
    siteUrl: "https://emeraldbay.physio",
    url: "https://emeraldbay.physio", // No trailing slash allowed!
    description:
      "Emerald Bay Physical Therapy is a comprehensive center for orthopedic and manual physical therapy.",
    image: 'https://ebpt.s3-us-west-1.amazonaws.com/images/emerald-bay-pt-og_image.jpg', // Path to your image you placed in the 'static' folder
    ogImage: 'https://ebpt.s3-us-west-1.amazonaws.com/images/emerald_bay_physical_therapy-og_image.jpg',
    twitterImage: 'https://ebpt.s3-us-west-1.amazonaws.com/images/emerald_bay_physical_therapy-twitter_image.jpg',
    openingHours: 'Mo, Tu, We, Th, Fr 08:00-18:00',
    telephone: '(530)542-2662',
    faxNumber: '(530)542-2661',
    logo: '/images/icon.png',
    areaServed: 'South Lake Tahoe, California',
    author: 'Emerald Bay Physical Therapy',
    paymentAccepted: 'Cash, deductibles, co-pays, co-insurance',
    location: {
      '@type': 'Place',
      'address': {
        "@type": "PostalAddress",
        "streetAddress": "812 Emerald Bay Road",
        "addressLocality": "South Lake Tahoe",
        "addressRegion": "CA",
        "postalCode": "96150",
      }
    },
    slogan: 'Private, safe, and effective one-on-one treatments to help you live your best life!',
    gsv: 't-GHhCwvq1SjOG3qV4JFNZpOo_6c5og1i1UlH_WvIOw',
    itemType: 'LocalBusiness',
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Emerald Bay Physical Therapy`,
        short_name: `EBPT`,
        start_url: `/`,
        icon: "src/images/logo.svg",
        // icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // TODO getting a C- on mozilla scroes so this needs work
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
        }
      }
    },
    // helps with the CSP in a substatial way
    "gatsby-plugin-netlify"
  ],
};
