import React, { useState, useEffect, useContext, createContext } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import MenuList from "./menu-list";
import Logo from "./logo";

const ThemeContext = createContext(null);

function Menu() {
  const { menu, toggleMenu } = useContext(
    ThemeContext
  );

  if (menu === 'open') {
    return (
      <nav id="veiled" className="active">
        <ul className="veiled__header">
          <li>
            <Link to="/" title="to the front page">
              <Logo />
            </Link>
          </li>
        </ul>
        <MenuList />
        <button onClick={toggleMenu} className="close-button">Close Menu</button>
      </nav>
    );
  } else {
    // return null;
    // were doing more to get a slide
    return (
      <nav id="veiled" className="inactive">
        <ul className="veiled__header">
          <li>
            <Link to="/" title="to the front page">
              <Logo />
            </Link>
          </li>
        </ul>
        <MenuList />
        <button onClick={toggleMenu} className="close-button">Close Menu</button>
      </nav>
    );
  }
}

function MenuChanger() {
  const { menu, toggleMenu } = useContext(ThemeContext);

  return (
    <div id="menu__toggle" className={menu}>
      <button onClick={toggleMenu} className={`veil-button small_menu--opener ${menu}`}>Menu</button>
      <div className="small_menu--icon">
        <span className="small_menu--icon-topline"></span>
        <span className="small_menu--icon-bottomline"></span>
      </div>
    </div>
  );
}

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

function Header() {

  const [menu, setmenu] = useState("closed");

  function toggleMenu() {
    setmenu(menu => (menu === "closed" ? "open" : "closed"));
  }

  return (
    <ThemeContext.Provider
      value={{ menu, toggleMenu }}
    >
      <Menu />

      <header>
        <h1 className="sr-only">Emerald Bay Physical Therapy</h1>
        <div id="hero">
          <HeroImage />

          <div id="logo__backer">{/* stay gold */}</div>

          <div id="logo__border">{/* stay gold */}</div>

          <div id="logo">
            <Link to="/" title="to the front page">
              <Logo />
            </Link>
          </div>

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

            <nav id="overt">
              <MenuList />
            </nav>
            <MenuChanger />
          </div>
          <hr />
        </div>
      </header>
    </ThemeContext.Provider>
  );
}

export default Header;
