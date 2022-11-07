// https://www.gatsbyjs.com/docs/add-seo-component/

// https://github.com/gatsbyjs/gatsby/blob/master/examples/using-gatsby-head/src/components/seo.tsx

import React from "react";
import { Script } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata"

// this is in the github example, but I don't understand it
// https://spin.atomicobject.com/2022/01/04/think-twice-react-fc/
// React.FC provides an implicit definition of children.
// export const SEO: React.FC<React.PropsWithChildren<SEOProps>> = (
// { title, description, pathname, children }
// ) => {

// https://developers.google.com/search/docs/crawling-indexing/special-tags

// these are what change
export const SEO = ({
  title,
  description,
  pathname,
  children
}) => {

  // these are what I grab from the siteMetadata
  // remeber to pull them through the hook /hooks/use-site-metadata.jsx
  const {
    title: defaultTitle,
    description: defaultDescription,
    name,
    url,
    siteUrl,
    image,
    ogImage,
    twitterImage,
    openingHours,
    telephone,
    faxNumber,
    logo,
    logoSVG,
    author,
    paymentAccepted,
    location,
    geo,
    slogan,
    gsv,
    bing

  } = useSiteMetadata()

  // these are how they are used
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    twitterImage: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  // console.log('location', location);
  // console.log('logoSVG', logoSVG);

  // this is whats given back
  return (
    <>

      {/* // TODO make this json-ld */}

      {/* variables */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.twitterImage} />


      {/* static */}
      {/* // ? i guess this is because they dont want name="name" */}

      {/* //https://developers.google.com/search/docs/appearance/structured-data/local-business */}
      {/* <meta name="author" content={author} /> */}

      {/* this shows up in <body> <script data-strategy... at the end of the file */}
      {/* the type is the best I can do with schema but also working with google rich with Physiotherapy */}
      {/* there may be more ways to include how this works in the other versions of how Physiotherapy is in https://schema.org/Physiotherapy but all have :: which google doesnt seem to except */}

      {/* you cant have comma where they are before a closing bracket */}

      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": ["LocalBusiness", "MedicalBusiness", "MedicalBusiness :: Physiotherapy"],
            "name": "${name}",
            "url": "${url}",
            "telephone": "${telephone}",
            "faxNumber": "${faxNumber}",
            "openingHours": "${openingHours}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "${location.address.streetAddress}",
              "addressLocality": "${location.address.addressLocality}",
              "addressRegion": "${location.address.addressRegion}",
              "postalCode": "${location.address.postalCode}"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "${geo.latitude}",
              "longitude": "${geo.longitude}"
            },
            
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "${geo.latitude}",
                "longitude": "${geo.longitude}"
              },
              "geoRadius": "${geo.geoRadius}"
            },
      
            "paymentAccepted": "${paymentAccepted}",
            "slogan": "${slogan}",
            "image": "${image}",
            "logo": "${siteUrl}${logo}"
          }
        `}
      </Script>

      {/* putting has offer catalog here broke things in google */}

      <meta name="google-site-verification" content={gsv} />
      <meta name="msvalidate.01" content={bing} />

      {/* // ? is this in this file not in gatsby-config.ts it never changes but its also a weird complex syntax so maybe its fine here? */}
      {/* to fill with a hex code use %23 its the escaped # */}
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
	viewBox='0 0 160 160' style='enable-background:new 0 0 160 160;' xml:space='preserve'>
    <title>Emerald Bay Physical Therapy logo</title>
    <style>
    path {
      fill: %23499e8f;
    }
  </style>
  <style media='screen and (prefers-color-scheme: dark)'>
  path {
    fill: %23f8f8f8;
  }
  </style>
<g>
	<g>
		<path d='M36.89,42c-0.34-0.34-0.92-0.27-1.16,0.15L0.13,94.37c-0.1,0.15-0.15,0.33-0.12,0.51c0.03,0.21,0.06,0.43,0.07,0.54
			l0,0.02c0.12,0.91,0.11,1.39,0.49,1l44.91-44.86c0.32-0.32,0.28-0.84-0.07-1.11l-0.37-0.33L36.89,42z'/>
	</g>
	<g>
		<path d='M78.45,25L1.49,101.95c-0.14,0.14-0.2,0.34-0.15,0.53l0,0.01c0.08,0.35,0.45,0.54,0.77,0.4L112.42,57.2
			c0.49-0.2,0.61-0.84,0.24-1.21L81.6,25C80.73,24.13,79.32,24.13,78.45,25z'/>
	</g>
	<g>
		<path d='M159.88,94.71l-26.5-40.77c-0.19-0.3-0.58-0.42-0.91-0.28l-10.13,4.14c-0.49,0.2-0.61,0.84-0.24,1.21l36.65,36.65
			c0.43,0.43,1.16,0.18,1.24-0.42l0-0.02C160.02,95.03,159.98,94.85,159.88,94.71z'/>
	</g>
	<path d='M79.95,86.2c0.57,0,1.14,0.22,1.58,0.66l40.44,40.65c0.88,0.89,1.01,1.77-0.02,2.49c-4.86,3.35-13.11,5.66-21.83,5.66
		c-6.35,0-12.95-1.23-18.66-4.17c-7.35-3.8-15.23-6.66-23.88-6.66c-5.69,0-11.71,1.24-18.14,4.26c-0.69,0.33-1.25,0.48-1.64,0.48
		c-0.95,0-0.96-0.9,0.27-2.4l40.31-40.31C78.81,86.41,79.38,86.2,79.95,86.2'/>
	<path d='M106.22,106.77l-5.7-18.6c-0.17-0.56-0.67-0.88-1.19-0.88c-0.31,0-0.62,0.11-0.87,0.36l-5.66,5.63L106.22,106.77z'/>
	<g>
		<path d='M158.07,101.39c-10.84-10.84-37.64-37.64-40.95-40.95c-0.21-0.21-0.53-0.28-0.81-0.16L5.33,106.25
			c-2.77,1.15-2.58,5.14,0.29,6.01c8.16,2.47,23.16,4.48,44.92-2.47l25.4-25.4c1.07-1.07,2.5-1.66,4.01-1.66
			c1.52,0,2.96,0.6,4.03,1.68l6.38,6.42l5.66-5.63c0.89-0.88,2.06-1.37,3.31-1.37c2.09,0,3.9,1.34,4.5,3.33l3.02,9.85
			c19.87,0.85,39.82,5.27,49.54,7.46C158.16,104.86,159.36,102.69,158.07,101.39z'/>
	</g>
</g>
</svg>
" />
      {children}
    </>
  )
}