import * as React from "react"
import { Link } from "gatsby"

import "../styles/atoms.scss"
// are we sure this should be in the index.js?

import Header from "../components/header"
import Footer from "../components/footer"
// import TeamHeads from "../components/team-heads"
import FormList from "../components/form-list"

/* import GymImage from "../images/gym-image"
import Headshot from "../images/headshot"
import SnowyBuildingFrontImage from "../images/snowy-building-front-image"
import PoolImage from "../images/pool-image"
import Kiley2 from "../images/kiley-2" */

// markup
const IndexPage = () => {
  return (
    <>
      <Header />

      <main>

      <section className="two-fold">
        <h5 className="sofia">Emerald Bay Physical Therapy is a comprehensive center for orthopedic and manual physical therapy.</h5>
        <p className="justified-40 home-baselined">We specialize in hands-on, one-on-one treatments that are specific to each patient’s goals. At EBPT, we are committed to health and wellness no matter your age, lifestyle, or athletic abilities. Our highly individualized programs are designed to promote complete recovery from injury and continue into healthy work and recreational activities. We stand out by offering aquatic therapy in our heated therapy pool, manual therapy in private treatment rooms and a multidisciplinary wellness approach. Our focus on quality time spent listening to patients, use of critical thinking to find the cause of pain, and effective manual techniques will exceed your expectations. </p>
        
        <div> {/* messy way of dealing with this flex that I would like to tidy up */}
          <h4 className="doublem"><Link to="/team" className="buttoned-above-40">Meet Our Team</Link></h4>

          {/* <TeamHeads /> */}
        </div>
        <div>{/* stay gold */}</div>
      </section>

      <hr />

      <section className="">
        <h2 className="doublem forty-h3"><strong>Our Physical Therapy and Wellness Offerings</strong></h2>

        <div className="two-fold ">
          <ul className="catalog ">
            <li>Aquatic therapy</li>
            <li>Post-surgical rehabilitation</li>
            <li>Injury prevention assessments</li>
            <li>Instrument-assisted soft tissue mobilization</li>
            <li>Myofascial release</li>
            <li>Cupping</li>
          </ul> {/* needed for the 2 col layout */}
          <ul className="catalog ">
            <li>Kinesio taping (Rock Tape)</li>
            <li>Cervical mechanical traction</li>
            <li>TRX training</li>
            <li>Pilates reformer instruction</li>
            <li>TENS electrical stimulation</li>
          </ul>
        </div>
      </section>

      <hr />

      {/* when display mosaic becomes available this will be super useful */}
      <section className="doublem image-stack">
{/*         <GymImage />
        <Headshot />
        <SnowyBuildingFrontImage />
        <PoolImage /> */}
      </section>

      <hr />

      <section className="">
        <h2 className="doublem forty-h3"><strong>Why We Are Different</strong></h2>
          <h4 className="doublem">The unique blend of programs at Emerald Bay Physical Therapy provides you with:</h4>
        <div className="two-fold">
          <ul className="inventory">
            <li>Highly individualized care</li>
            <li>Specific interventions over generalized remedies</li>
            <li>Detailed evaluations and personalized program development</li>
            <li>Personal appointments over high volume</li>

            <li>Definite goals designed to maximize performance and exceed expectations</li>
            <li>Transition from rehabilitation to an exercise-based fitness program</li>
          </ul>
          <ul className="inventory">
            <li>Comprehensive approach to fitness to meet the complex demands of daily life, athletic pursuits and high-level performance</li>
            <li>Aquatic physical therapy</li>
            <li>Our clinic is home to a 4000-gallon indoor therapy pool featuring an adjustable current, a depth of 3-5 feet to accommodate all heights, and is comfortably heated all year round</li>
            <li>Decompress joints while increasing strength, flexibility</li>
            <li>Whole body workout</li>
            <li>Improve balance without risk of falling</li>
          </ul>
        </div>
        <hr />
      </section>

      <div className="two-fold">
        <h3 className=""><Link to="/questions">Therapy Questions</Link></h3>
        <div className="slender-image">
          {/* <Kiley2  /> */}
        </div>
      </div>
      <hr />
      
      <h2 className="doublem">Intake Forms</h2>
      <section id="intake-forms" className="two-fold">
        <FormList />
      </section>
        <hr />
      </main>

    <Footer />
  </>
  )
}

export default IndexPage
