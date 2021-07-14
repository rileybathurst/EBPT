// import React from "react";import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// import HeroImageDepricated from "../images/hero-image-depricated"
import Veiled from "./veiled";
import MenuList from "./menu-list";
import MenuClose from "./menu-close";
import Logo from "./logo";

function DarkHero() {
  return <StaticImage
    src="https://ebpt.s3.us-west-1.amazonaws.com/images/levi-bare-jdIb2v4L2Sg-unsplash.jpg"
    alt="emerald bay at night"
  />;
}

function LightHero() {
  return <StaticImage
    src="https://ebpt.s3.us-west-1.amazonaws.com/images/parker-ulry-qxLl7yfxReM-unsplash.jpg"
    alt="emerald bay during the day"
  />;
}

// light to dark switch
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
  }, [matches, query]);

  return matches;
}

function HeroImage() {
  let isSiteDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <>
      {isSiteDark && <DarkHero />}
      {isSiteDark || <LightHero />}
    </>
  );
}

const Header = () => (
  <>

    <nav id="veiled" className="inactive">
      <ul className="veiled__header">
        <li>
          <Link to="/" title="to the front page">
            <Logo />
          </Link>
        </li>
      </ul>
      <MenuList />
      <MenuClose />
    </nav>

    <header>
      <h1 className="sr-only">Emerald Bay Physical Therapy</h1>
      <div id="hero">
        <HeroImage />

        {/* I could also do these with SVG so which is maybe more or less problematic */}
        <div id="logo__backer">
          {/* I think I should have an svg here even if its less neccesary it will make it more readable */}
          {/* circle */}
        </div>

        <div id="logo__border">
          {/* I think I should have an svg here even if its less neccesary it will make it more readable */}
          {/* circle */}
        </div>

        <div id="logo">
          <Link to="/" title="to the front page">
            <Logo />
          </Link>
        </div>
        {/* logo */}

        {/* I think this is needed for the site map but testing that */}
        <title>Emerald Bay Physical Therapy</title>
        <link rel="canonical" href="https://emeraldbay.physio" />
      </div>
      {/* #hero */}

      <div id="scrollarea" className="associate">
        <hr className="io-line" />
        <div className="menu-lines">
          <section id="call">
            <div className="buttoned">
              <a href="tel:530542-2662" className="">
                (530) 542-2662
              </a>
            </div> {/* .buttoned */}
          </section>
          <Veiled />
          <nav id="overt">
            <MenuList />
          </nav>
        </div>
        <hr />
      </div>
    </header>
  </>
);

export default Header;
