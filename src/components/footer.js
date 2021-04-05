import React from "react"

import FooterSocial from "./footer-social"

const Footer = () => (

<footer>
  <div className="two-fold">

    <section id="hours">
      <h3 className="under-less measured">Hours</h3>
      <h4 className="over-none measured">
        Monday - Friday 8AM - 6PM<br />
        Saturday - Sunday - Closed
      </h4>

      <hr className="hide-above-40" /> {/* section it so the .two-fold doesnt get messy */}
    </section>

    <section id="contact">

      <h3>Contact</h3>
        {/* this needs better html structure */}
        {/* sequentially-descending order */}
        <h4>
          <a href="https://goo.gl/maps/893KML9M4KnYykEP7">
            Emerald Bay Physical Therapy<br />
            812 Emerald Bay Road<br />
            South Lake Tahoe CA 96150
          </a>
        </h4>

        <h4>Phone: <a href="tel:5305422662">(530) 542 2662</a></h4>
        <h4>Fax: (530) 542 2661</h4>
        <h4>Email: <a href="mailto:ebpt.laketahoe@gmail.com">ebpt.laketahoe@gmail.com</a></h4>
      </section>{/* #contact */}
  </div>{/* .two-fold */}

  <FooterSocial />

  </footer>
)

export default Footer
