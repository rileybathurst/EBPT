import React, { useState, useEffect, useContext, createContext } from "react";

import MenuList from "./menu-list";
import Logo from "./logo";

type ThemeContextValue = {
  menu: string;
  toggleMenu: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeContext is missing");
  }
  return context;
};

type MenuProps = {
  currentPath?: string;
};

function Menu({ currentPath }: MenuProps) {
  const { menu, toggleMenu } = useThemeContext();

  if (menu === 'open') {
    return (
      <nav id="veiled" className="active">
        <ul className="veiled__header">
          <li>
            <a href="/" title="to the front page">
              <Logo />
            </a>
          </li>
        </ul>
        <MenuList currentPath={currentPath} />
        <button onClick={toggleMenu} className="close-button">Close Menu</button>
      </nav>
    );
  }

  return (
    <nav id="veiled" className="inactive">
      <ul className="veiled__header">
        <li>
          <a href="/" title="to the front page">
            <Logo />
          </a>
        </li>
      </ul>
      <MenuList currentPath={currentPath} />
      <button onClick={toggleMenu} className="close-button">Close Menu</button>
    </nav>
  );
}

function MenuChanger() {
  const { menu, toggleMenu } = useThemeContext();

  return (
    <div id="menu__toggle" className={menu}>
      <button
        onClick={toggleMenu}
        className={`veil-button small_menu--opener ${menu}`}
        type="button"
      >Menu</button>
      <div className="small_menu--icon">
        <span className="small_menu--icon-topline" />
        <span className="small_menu--icon-bottomline" />
      </div>
    </div>
  );
}

function DarkHero() {
  return (
    <img
      src="https://ebpt.s3.us-west-1.amazonaws.com/images/levi-bare-jdIb2v4L2Sg-unsplash.jpg"
      alt="emerald bay at night"
      loading="lazy"
      decoding="async"
    />
  );
}

function LightHero() {
  return (
    <img
      src="https://ebpt.s3.us-west-1.amazonaws.com/images/parker-ulry-qxLl7yfxReM-unsplash.jpg"
      alt="emerald bay during the day"
      loading="lazy"
      decoding="async"
    />
  );
}

// light to dark switch
export function useMediaQuery(query: string) {
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
  const isSiteDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <>
      {isSiteDark && <DarkHero />}
      {isSiteDark || <LightHero />}
    </>
  );
}

type HeaderProps = {
  currentPath?: string;
};

function Header({ currentPath }: HeaderProps) {

  const [menu, setmenu] = useState("closed");

  function toggleMenu() {
    setmenu(menu => (menu === "closed" ? "open" : "closed"));
  }

  return (
    <ThemeContext.Provider
      value={{ menu, toggleMenu }}
    >
      <Menu currentPath={currentPath} />

      <header>
        <h1 className="sr-only">Emerald Bay Physical Therapy</h1>
        <div id="hero">
          <div className="image-wrap">
            <HeroImage />
          </div>

          <div id="logo__backer">{/* stay gold */}</div>

          <div id="logo__border">{/* stay gold */}</div>

          <div id="logo">
            <a href="/" title="to the front page">
              <Logo />
            </a>
          </div>
        </div>

        <div id="scrollarea" className="associate">
          <hr className="io-line" />
          <div className="menu-lines">
            <section id="call">
              <div className="buttoned">
                <a href="tel:5305422662">
                  (530) 542-2662
                </a>
              </div> {/* .buttoned */}
            </section>

            <nav id="overt">
              <MenuList currentPath={currentPath} />
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
