import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/atoms.scss";
// are we sure this should be in the index.js?

import Header from "../components/header";
import Footer from "../components/footer";
import TeamHeads from "../components/team-heads";
import FormList from "../components/form-list";
import Seo from "../components/seo";

import Kiley2 from "../components/kiley2io";
import GymImage from "../components/gymImageVanilla";
import Treating from "../components/treating-io";
import SnowyBuildingFrontImage from "../components/snowyImage-io";
import PoolImage from "../components/poolImage-io";

function GymIm() {
  return (
    <StaticImage
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/gym.jpg"
      alt="gym"
    />
  );
}

const IndexPage = () => {
  return (
    <>
      <Seo title="Emerald Bay Physical Therapy" />

      <Header />

      <main>
        <section id="intro">
          <div className="two-fold">
            <div>
              <h2 className="h5">
                {/* skipping levels this needs to be done with class */}
                Emerald Bay Physical Therapy is a comprehensive center for
                orthopedic and manual physical therapy.
              </h2>
              <p>
                We specialize in hands-on, one-on-one treatments that are
                specific to each patient’s goals. At EBPT, we are committed to
                health and wellness no matter your age, lifestyle, or athletic
                abilities. Our highly individualized programs are designed to
                promote complete recovery from injury and continue into healthy
                work and recreational activities.</p>
              <p>We stand out by offering
                aquatic therapy in our heated therapy pool, manual therapy in
                private treatment rooms and a multidisciplinary wellness
                approach. Our focus on quality time spent listening to patients,
                use of critical thinking to find the cause of pain, and
                effective manual techniques will exceed your expectations.
              </p>

              <h3 className="h5">
                <Link to="/team" className="buttoned-above-40">
                  Meet Our Team
                </Link>
              </h3>
              <TeamHeads />
            </div>
            <div>
              <GymImage />
            </div>
          </div>
          {/* .two-fold */}
        </section>
        {/* #intro */}

        <hr />

        <section id="offerings">
          <div className="single-fold"> {/* seperation of vertical and horizontal spacing */}
            <h2 className="forty-h3">
              <strong>Our Physical Therapy and Wellness Offerings</strong>
            </h2>
          </div>

          <div className="two-fold">
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
          </div>
        </section>
        {/* #offerings */}

        <hr />

        {/* when display mosaic becomes available this will be super useful */}
        <section id="gallery" className="single-fold image-stack">
          <GymIm />
          <Treating />
          <SnowyBuildingFrontImage />
          <PoolImage />
        </section>

        <hr />

        <section id="differences">
          <div className="single-fold">
            <h2 className="forty-h3">
              <strong>Why We Are Different</strong>
            </h2>
            {/* sequentially-descending order */}
            <h3 className="h4">
              The unique blend of programs at Emerald Bay Physical Therapy
              provides you with:
            </h3>
          </div>

          <div className="two-fold">
            <ul className="plaque">
              <li>
                <h4>Highly individualized care</h4>
                <ul>
                  <li>Specific interventions over generalized remedies</li>
                </ul>
              </li>

              <li>
                <h4>Detailed evaluations and personalized program development</h4>
                <ul>
                  <li>
                    Definite goals designed to maximize performance and exceed
                    expectations
                  </li>
                </ul>
              </li>

              <li>
                <h4>Comprehensive approach to fitness to meet the complex demands of
                  daily life, athletic pursuits and high-level performance</h4>
                <ul>
                  <li>
                    Transition from rehabilitation to an exercise-based fitness
                    program
                  </li>
                </ul>
              </li>

              <li>
                <h4>Our clinic is home to a 4000-gallon indoor therapy pool
                  featuring an adjustable current, a depth of 3-5 feet to
                  accommodate all heights, and is comfortably heated all year
                  round</h4>
                <ul>
                  <li>
                    Decompress joints while increasing strength, flexibility
                  </li>
                  <li>Improve balance without risk of falling</li>
                  <li>Whole body workout</li>
                </ul>
              </li>

              {/* <li>Personal appointments over high volume</li>
              <li>Aquatic physical therapy</li> */}
            </ul>
          </div>
        </section>

        <hr />

        <section id="questions">
          <div className="two-fold">
            <h3>
              <Link to="/questions">Therapy Questions</Link>
            </h3>
            <div className="slender-image">
              <Kiley2 />
            </div>
          </div>
        </section>

        <hr />

        <section id="intake-forms">
          <div className="single-fold">
            <h2>Intake Forms</h2>
          </div>

          <div className="two-fold">
            <FormList />
          </div>
        </section>
        {/* #intake-forms */}

        <hr />
      </main>

      <Footer />
    </>
  );
};

export default IndexPage;
