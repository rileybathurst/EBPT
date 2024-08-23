import React from "react"
import { Link } from "gatsby"

const MenuList = () => (
  <ul>
    <li><Link to="/about" activeClassName="active">About Us</Link></li>
    <li><Link to="/team" activeClassName="active">Team</Link></li>
    <li><Link to="/services" activeClassName="active">Services</Link></li>
    <li><Link to="/offerings" activeClassName="active">Offerings</Link>
      {/* // TODO these need to be here for small but need to adjust on large */}
      <ul className="menu-list">
        <li><Link to="/offerings/pelvic-health">Pelvic Floor Rehabilitation</Link></li>
        <li><Link to="/offerings/orthotics">Orthotics</Link></li>
      </ul>
    </li>
    <li><Link to="/questions" activeClassName="active">Therapy Questions</Link></li>
    <li><Link to="/forms" activeClassName="active">Intake Forms</Link></li>
    <li><Link to="/#contact" activeClassName="active">Contact</Link></li>
    <li>
      <a href="tel:530542-2662" className="veiled__call">
        (530) 542-2662
      </a>
    </li>
  </ul>
)

export default MenuList
