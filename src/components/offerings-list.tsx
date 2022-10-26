import React from "react";
import { Link } from "gatsby";


const OfferingsList = () => (
  <ul className="catalog" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Aquatic therapy</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Post-surgical rehabilitation</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Injury prevention assessments</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Instrument-assisted soft tissue mobilization</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Myofascial release</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Cupping</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Kinesio taping (Rock Tape)</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Cervical mechanical traction</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">TRX training</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">Pilates reformer instruction</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <span itemProp="name">TENS electrical stimulation</span>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <Link to="/offerings/pelvic-health"><span itemProp="name">Pelvic Floor Rehabilitation</span></Link>
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalog">
      <Link to="/offerings/orthotics"><span itemProp="name">Orthotics</span></Link>
    </li>
  </ul>
);

export default OfferingsList;