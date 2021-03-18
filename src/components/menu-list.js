import React from "react"
import { Link } from "gatsby"

const MenuList = () => (
    <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/offerings">Offerings</Link></li>
        <li><Link to="/questions">Therapy Questions</Link></li>
        <li><Link to="/forms">Intake Forms</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
    </ul>
)

export default MenuList
