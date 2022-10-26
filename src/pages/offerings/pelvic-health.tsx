import * as React from "react"
import { Link, HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { SEO } from "../../components/seo";
import Header from "../../components/header"
import SlimFooter from "../../components/slim-footer"
import Title from "../../components/title"
import Scope from "../../components/scope"

// import Us from "../../components/us"; // testing
// import En from "../../components/en"; // testing

function PelvicTherapyImage() {
  return <StaticImage
    src="https://ebpt.s3.us-west-1.amazonaws.com/images/annie-spratt-Nt5eeIKH-512.webp"
    alt="Jessica"
    objectFit="scale-down"
    objectPosition="top"
    itemProp="image"
  />
}

const PelvicHealthPage = () => {
  return (
    <>

      {/* testing */}
      {/* <En /> */}

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
            <Link itemProp="item" to="/offerings/">
              <span itemProp="name">Offerings</span>
            </Link>&nbsp;&nbsp;/&nbsp;&nbsp;
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Pelvic Floor Rehabilitation</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </div>

      <hr />

      <main itemScope itemType="https://schema.org/Article">
        <div className="two-fold">
          <PelvicTherapyImage />
          <div className="two-fold-content">
            <hgroup>
              {/* // TODO needs flex organization */}
              <h4>Offerings</h4>
              <h1 className="h1__clamped" itemProp="name">Outpatient: Pelvic Floor Rehabilitation</h1>
            </hgroup>
            <section itemProp="description">
              <h2 className="h4">Do you have pain in the pelvis, low back or hips that is associated with sitting, walking, urination, or intercourse?</h2>
              <p>Do you suffer from pelvic pain or incontinence?</p>
              <p>Have you experienced leaking of urine or feces when coughing, sneezing, or laughing?</p>
              <p>These are conditions that are common with pelvic floor muscle dysfunction.</p>
              <hr className="inline__hr" />
            </section>

            <section>
              <h2 className="h4">Physical Therapy and Pelvic Floor Dysfunction:</h2>
              <h3 className="h5">Treatment may include:</h3>
              <ul>
                <li>Pelvic alignment along with soft tissue work to relax pelvic floor muscles.</li>
                <li>Treatments to relieve pain and re-educate weakened pelvic floor muscles.</li>
                <li>A home exercise plan that includes stretching and strengthening to improve posture, reduce pain, and promote healing of the pelvic floor.</li>
              </ul>
              <hr className="inline__hr" />
            </section>

            <section>
              <h2 className="h4">What is Pelvic Floor Physical Therapy?</h2>
              <p>The purpose of pelvic floor physical therapy is to relieve the symptoms of pelvic floor dysfunction and help the muscles work the way they should.</p>
              <p>The goal of pelvic floor physical therapy is to achieve the best possible functioning and management of the bladder, bowel, and reproductive organs.</p>
              <p>Pelvic health plays an important role in complete physical, mental, and social well-being.</p>
              <hr className="inline__hr" />
            </section>

            <section>
              <h2 className="h4">How do you know if Pelvic Floor Physical Therapy might be for you?</h2>
              <ul>
                <li>Lower abdominal pain</li>
                <li>Erectile dysfunction</li>
                <li>Urine leakage when coughing, sneezing, or laughing</li>
                <li>Painful bowel movements and/or constipation</li>
                <li>Chronic pelvic pain syndrome</li>
                <li>Lower back pain</li>
                <li>And more!</li>
              </ul>
              <hr className="inline__hr" />
            </section>

            <section>
              <h2 className="h4">If the pelvic floor isn’t functioning optimally, the result may be urinary/fecal incontinence, pelvic prolapse, or pain.</h2>
              <p><i>52% of female athletes experience incontinence.</i></p>
              <p><i>49% of chronic low back pain patients have urinary incontinence.</i></p>
              <p><i>43% of women and 31% of men experience sexual dysfunction or pain with intercourse.</i></p>
              <p><i>Kegels aren’t always the best choice!</i></p>
            </section>
          </div>
        </div>

      </main>

      <hr />

      <SlimFooter />
    </>
  )
}

export default PelvicHealthPage

export const Head = () => {
  return (
    <SEO
      title="Pelvic Health - Emerald Bay Physical Therapy"
      description="Do you have pain in the pelvis, low back or hips that is associated with sitting, walking, urination, or intercourse?"
      itemScope='true'
      pathname=''
      lang='en-US'
    >
      {/* // <meta name="description" content="" /> */}
      {/* // <meta name="image" itemProp="image" content="https://ebpt.s3.us-west-1.amazonaws.com/images/annie-spratt--l-eemJU0vE-og_image.webp" /> */}
      {/* // <meta property="og:image" itemProp="image" content="https://ebpt.s3.us-west-1.amazonaws.com/images/annie-spratt--l-eemJU0vE-og_image.webp" /> */}
      <script type="application/ld+json">{JSON.stringify({})}</script>
    </SEO>
  ); // TODO: Make this everywhere // it possibly needs variables etc
  // TODO add the rest of this
}
/* 
had a rough idea to build a secondary export but that doesnt really seem the way to go
export const Scope = () => {
  return (
    <Scope scope='true' />
  )
} */