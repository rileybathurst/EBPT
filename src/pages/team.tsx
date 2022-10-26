import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Header from "../components/header";
import SlimFooter from "../components/slim-footer";
// import Seo from "../components/seo";

function JessicaImage() {
  return (
    <StaticImage
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/headshot.jpg"
      alt="Jessica"
      className="jessica"
    />
  );
}
function KileyImage() {
  return (
    <StaticImage
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/kiley.jpg"
      alt="Kiley"
      className="team-page__square"
    />
  );
}
function TinaImage() {
  return (
    <StaticImage
      src="https://ebpt.s3.us-west-1.amazonaws.com/images/tina-profile.JPG"
      alt="tina"
      className="team-page__square"
    />
  );
}

// markup
const TeamPage = () => {
  return (
    <>
      <Header />
      {/*       <Seo
        title="Meet our team"
        description="We specialize in hands-on, one-on-one treatments that are specific to each patient’s goals."
      /> */}

      {/* // TODO: this has a lot of lines, probably too many */}

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
              <span itemProp="name">Team</span>
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        <hr />
      </div>

      <main className="team-page">
        <h1 className="two-fold">Team</h1>
        <hr />

        <article
          id="jessica"
          className="two-fold"
          itemScope itemType="https://schema.org/Person"
        >
          <div itemProp="image"><JessicaImage /></div>
          <div className="content">
            <h2>
              <span itemProp="name">Jessica</span>,
              <span itemProp="jobTitle">PT.</span>
            </h2>
            {/*this doesnt seem to be a problem with line breaks on prettier */}
            <p className="justified-40">
              I first became interested in physical therapy after observing my
              dad’s treatments following knee surgery. I was intrigued by physical
              therapy’s use of exercise to help improve overall function. I began
              working as a physical therapy aide and later received my Master’s
              degree in Physical Therapy from Northern Illinois University in
              2011.
            </p>

            <p className="justified-40">
              After working as a PT in Illinois for a little over a year, I began
              my search for places that could support my active lifestyle (water
              skiing, wake boarding, and snowboarding). Photos of Tahoe in
              snowboard magazines always seemed to catch my eye! I moved to Tahoe
              in 2013 and began working at Emerald Bay Physical Therapy.
            </p>

            <p className="justified-40">
              In January 2021, I purchased ownership of EBPT to further lay roots
              in Tahoe and provide the community with expert care in a private
              setting. I believe the key factors that lead to successful physical
              therapy are quality time, active listening, and hands-on treatments.
              Every treatment plan's foundational components are listening to each
              patient's complaints and goals, using critical thinking to find the
              causes, and utilizing manual techniques. Using these fundamental
              building blocks ensures progress with every patient.
            </p>

            <p className="justified-40">
              I strive to provide the best possible care by attending various
              continuing education courses. I have advanced my knowledge in the
              recent past by taking classes regarding cervical and scapular
              dysfunction treatment, myofascial release, and RockTape
              Kinesio-taping. I have attended lectures about extremity
              mobilization, shoulder biomechanics, and even earned my Pilates
              Level 1 Mat Instruction certificate.
            </p>

            <p className="justified-40">
              I look forward to deepening my South Shore roots while providing
              individualized, specialized, and reliable care to my friends and
              neighbors. At Emerald Bay Physical Therapy, we are committed to
              health and wellness no matter your age, lifestyle, or athletic
              abilities. I look forward to meeting you!
            </p>
          </div>
        </article>

        <hr />

        <article id="kiley" className="two-fold">
          <KileyImage />
          <div className="content">
            <h2>Kiley</h2>

            <p className="justified-40">
              I have had the pleasure of working as a Physical Therapy Aide at
              EBPT for just over 5 years. I grew up in a small town in Iowa with a
              love for dance and a fascination with how our bodies move. I came to
              Tahoe in 2008 after attending school in Southern California. Like so
              many others, I ended up staying and making Tahoe my home. I enjoy
              all of the beauty and outdoor activities Tahoe has to offer, and I
              share your love for this special place we call home. I always knew I
              wanted to work in healthcare, and my job at EBPT has been more
              fulfilling than I could have ever imagined. I hope to provide our
              patients with a welcoming environment where they feel at ease and
              maybe even a little excited about coming to PT! I look forward to
              helping our patients, from any age and activity level, get stronger
              and move better so they can get back to doing what they love.
            </p>
          </div>
        </article>

        <hr />

        <article id="tina" className="two-fold">
          <TinaImage />
          <div className="content">
            <h2>Tina</h2>

            <p className="justified-40">
              South shore local since 2005, I have had the great pleasure of joining the EBPT team. In 2007, I was on the South Tahoe high tennis team, when I tore my meniscus during a match. I was terrified about surgery and didn’t know I had any other options, until I was introduced to physical therapy. Learning what I could do to heal my body through exercises and stretching was life changing. Physical therapy was a success and prevented me from having to undergo knee surgery. After that I became fascinated learning about all the things the human body is capable of. I received my education in nutrition and personal training at LTCC, and I enjoy helping people in the community through local gyms and private consultations for nutrition. I am a bodybuilding enthusiast and have competed in a few regional competitions since 2019. I love teaching others how to move the body and teaching them what’s possible. Healing can be a difficult process which is best overcome by education, encouragement, communication and engagement. EBPT is the perfect place to regain lost mobility and function because we care about getting you back to what you love; no matter the age, lifestyle, or activity level.
            </p>
          </div>
        </article>
      </main>

      <hr />

      <SlimFooter />
    </>
  );
};

export default TeamPage;
