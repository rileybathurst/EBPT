import React from "react";

type MenuListProps = {
  currentPath?: string;
};

const MenuList = ({ currentPath }: MenuListProps) => {
  const normalizedPath = currentPath?.replace(/\/$/, "");
  const linkClass = (href: string) => {
    if (!normalizedPath) {
      return undefined;
    }

    const normalizedHref = href.replace(/\/$/, "");
    return normalizedPath === normalizedHref ? "active" : undefined;
  };

  return (
    <ul>
      <li><a href="/about" className={linkClass("/about")}>About Us</a></li>
      <li><a href="/team" className={linkClass("/team")}>Team</a></li>
      <li><a href="/services" className={linkClass("/services")}>Services</a></li>
      <li>
        <a href="/offerings" className={linkClass("/offerings")}>Offerings</a>
        {/* // TODO these need to be here for small but need to adjust on large */}
        <ul className="menu-list">
          <li><a href="/offerings/pelvic-health">Pelvic Floor Rehabilitation</a></li>
          <li><a href="/offerings/orthotics">Orthotics</a></li>
        </ul>
      </li>
      <li><a href="/questions" className={linkClass("/questions")}>Therapy Questions</a></li>
      <li><a href="/forms" className={linkClass("/forms")}>Intake Forms</a></li>
      <li><a href="/#contact" className={linkClass("/#contact")}>Contact</a></li>
      <li>
        <a href="tel:530542-2662" className="veiled__call">
          (530) 542-2662
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
