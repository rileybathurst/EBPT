import * as React from "react"
// import { Link } from "gatsby"

import Header from "../components/header"
import SlimFooter from "../components/slim-footer"

// import Kiley2 from "../images/kiley-2"

// markup
const OfferingsPage = () => {
  return (
    <>
      <Header />
        <main className="measured">
          <title>Offerings</title>
          <h1>Our Physical Therapy and Wellness Offerings</h1>

          <div className="slender-image">
            {/* <Kiley2  /> */}
          </div>
          
          <ul className="catalog">
            <li>Aquatic therapy</li>
            <li>Post-surgical rehabilitation</li>
            <li>Injury prevention assessments</li>
            <li>Instrument-assisted soft tissue mobilization</li>
            <li>Myofascial release</li>
            <li>Cupping</li>
            <li>Kinesio taping (Rock Tape)</li>
            <li>Cervical mechanical traction</li>
            <li>TRX training</li>
            <li>Pilates reformer instruction</li>
            <li>TENS electrical stimulation</li>
          </ul>
        </main>

        <hr />
      <SlimFooter />
    </>
  )
}

export default OfferingsPage
