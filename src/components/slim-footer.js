import React from "react"

import FooterSocial from "./footersocial"

const SlimFooter = () => (

    <footer>

        <section id="hours" className="measured">
          <h3 className="under-less distracted">Hours</h3>
          <h4 className="over-none">
            Monday - Friday 8AM - 6PM<br />
            Saturday - Sunday - Closed
          </h4>
        </section>

        <hr />

        <section id="contact" className="measured">

          <h3 className="distracted">Contact</h3>
          {/* this needs better html structure */}
          <h5 className="boxed">
            <a href="https://goo.gl/maps/893KML9M4KnYykEP7">
              Emerald Bay Physical Therapy<br />
              812 Emerald Bay Road<br />
              South Lake Tahoe CA 96150
            </a>
          </h5>

          <div className="box-div"> {/* additional divs to deal with width issues */}
            <h3 className="boxed">Phone: <a href="tel:5305422662">(530) 542 2662</a></h3>
          </div>

          <div className="box-div">
            <h3 className="boxed">Fax: <span className="maybe-fake-a">(530) 542 2661</span></h3>
          </div>

          <div>
            <h3 className="boxed">Email: <a href="mailto:ebpt.laketahoe@gmail.com">ebpt.laketahoe@gmail.com</a></h3>
          </div>
        </section>

        <FooterSocial />

    </footer>
    )

    export default SlimFooter
