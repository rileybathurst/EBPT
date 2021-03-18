import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import SlimFooter from "../components/slim-footer"

function GymImage() {
  return <StaticImage src="https://ebpt.s3-us-west-1.amazonaws.com/images/gym.jpg" alt="gym" />
}
function PoolImage() {
  return <StaticImage src="https://ebpt.s3-us-west-1.amazonaws.com/images/pool.jpg" alt="pool" />
}

const ServicesPage = () => {
  return (
    <>
    <Header />
    <main>
      <h1 className="measured">Services</h1>
      <title>Services</title>

    <section className="measured">

        <GymImage />

        <h2>Physical Therapy</h2>
        <p>This service is a form of rehabilitation for those who have medical problems or other health-related conditions that may limit their ability to move and function in their daily lives. The goal is to help improve mobility and flexibility, reduce pain, restore function, and improve quality of life. With a thorough assessment by a Physical Therapist your treatment plan will be designed to prevent disability or treat ailments that prohibit functionality in everyday life.</p>

        <p>Your program will typically include hands-on manual therapy, exercise, and modalities. Exercises can include stretching, strengthening, core stabilization, and postural re-education. Your exercise program will be individually tailored to address your functional limitations and goals. Modalities may include ultrasound, electrical stimulation, iontophoresis, moist heat, ice, paraffin bath, and traction. If you are scheduled for aquatic therapy, you will perform a series of stretching and strengthening exercises in the pool, possibly using the current, handheld paddles, water weights, or other tools.</p>

        <p>A <b>Physical Therapist</b> (PT) is a licensed health care professional who evaluates a patient’s physical status, establishes a plan of care and goals, then administers treatments to promote optimal health. Physical Therapists seek to relieve pain, improve the body’s movement and function, maintain cardiopulmonary function, and limit disabilities resulting from injury or disease.</p>

        <p>A <b>Physical Therapist Assistant</b> (PTA) is licensed and provides physical therapy care under the supervision of a Physical Therapist.</p>

        <p>A <b>Physical Therapy Tech</b> or <b>Aide</b> is an unlicensed person who assists a Physical Therapist and is under the direct and immediate supervision of a Physical Therapist. The Physical Therapy Tech (or Aide) can only provide direct care to the patient if the supervising Physical Therapist is within audible reach.</p>

        <p>From <a href="https://www.ptbc.ca.gov/consumers/consumer_info_faq.shtml" target="_blank" rel="noreferrer">Physical Therapy Board of California</a>.</p>

        <p>For more information, click on any of the following websites:</p>
        <ul>
            <li><a href="https://www.ptbc.ca.gov/" target="_blank" rel="noreferrer">Physical Therapy Board of California</a></li>
            <li><a href="https://www.apta.org/" target="_blank" rel="noreferrer">American Physical Therapy Association</a></li>
            <li><a href="https://www.ccapta.org/default.aspx" target="_blank" rel="noreferrer">California Physical Therapy Association</a></li>
        </ul>
        </section>
      <hr />

      <section className="measured">

        <PoolImage />

          <h2>Aquatic Therapy</h2>
        <p>We have a wonderful indoor therapy pool with a large 4000-gallon capacity. The depth of the pool ranges from 3-5 feet to accommodate all heights. Having the therapy pool inside our facility allows us to easily incorporate aquatic exercise into your therapy program. For advanced clients the pool is large enough to comfortably allow swimming against the endless current.</p>

        <ul>
            <li>91 degree water relieves pain and stiffness</li>
            <li>Buoyancy alleviates pressure from injured joints allowing pain-free exercise</li>
            <li>Adjustable current provides resistance for higher level activity</li>
        </ul>

        <h3>Abbreviated Definition of Aquatic Physical Therapy:</h3>
        <p>Aquatic Physical Therapy is the scientific practice of physical therapy in an aquatic environment by physical therapists and physical therapists assistants. Aquatic Physical Therapy includes but is not limited to treatment, rehabilitation, prevention, health, wellness and fitness of patient/client populations in an aquatic environment. The unique properties of the aquatic environment enhance treatments for patients/clients across the age span with musculoskeletal, neuromuscular, cardiovascular/pulmonary, and integumentary (skin) diseases, disorders, or conditions.</p>

        <h3>Things to Know About Our Pool</h3>
        <ul>
            <li>Please bring your own bathing suit and towel (should you forget your towel, we have a couple extra, just ask).</li>

            <li>We ask you to rinse off with soap and warm water in our shower prior to getting in the water. Removing the day’s accumulation of lotions, skin oils, etc. helps to keep our pool clean.</li>

            <li>When walking to the changing room, please walk around on the window side of the pool to avoid an accidental fall into the pool.</li>

            <li>Before getting into the pool, please wait until a staff member is in the pool room and has let you know it’s okay to get in.</li>

            <li>Please limit your time in the changing room to 10 minutes. We often have other patients who need to use the room as well. Should you need more than 10 minutes, please let us know – we can accommodate by having you come a little earlier or scheduling you at a less busy time.</li>
        </ul>
      </section>

      <hr />

      <section className="measured">
        <h2>Water Exercise</h2>

        <p>Water based exercise programs are an excellent way to build strength, improve flexibility, enhance cardiovascular health, and increase core stability. Buoyancy reduces pressure and strain on joints by supporting a significant portion of the body weight. The pressure from the water helps to improve circulation. Water provides 12 times the resistance of air, allowing simple movements to become strength training exercises!</p>

        <p>Warm water loosens stiff joints, helps sore muscles relax, and relieves pain. Our pool is heated to 90 degrees, allowing exercise at a very comfortable temperature.</p>

        <p>Pool exercise programs are offered in our indoor pool for a maximum of 3 adults in each session. The therapy pool has a 4000-gallon capacity, ranges in depth from 3-5 feet, and is equipped with jets and resistance current.</p>

        <p>Aquatic Exercise is especially good for:</p>
        <ul>
            <li>Arthritis</li>
            <li>Maternity Exercise</li>
            <li>Fibromyalgia</li>
            <li>Balance Problems</li>
        </ul>

        <h3>For more information or to schedule swim lessons / aquatic exercise, please contact Liz Terzian at 530-721-5481 or <a href="mailto:iswim@gmail.com?cc=ebpt.laketahoe@gmail.com?subject=Swim Inquiry from Emerald Bay Physio Therapy">iswim@gmail.com</a></h3>

      </section>

      <hr />

    <section className="measured">
        <h2>Kid’s Swim Lessons</h2>
        <p>Emerald Bay Physical Therapy is the place to be when introducing your child to the water. The 90 degree pool makes your child’s swimming experience a warm and welcoming one. Swim lessons are by appointment only and open to children from 6 months to 12 years. Spaces do fill up fast so make sure to call ahead when scheduling your child’s swim lessons.</p>

        <ul>
            <li>Individual private lessons and semi-private lessons.</li>
            <li>Each lesson is 30 minutes long</li>
            <li>6 months – 12 years old</li>
            <li>Classes are by appointment only – no drop-ins</li>
        </ul>

        <h3>For more information or to schedule swim lessons / aquatic exercise, please contact Liz Terzian at 530-721-5481 or <a href="mailto:iswim@gmail.com?cc=ebpt.laketahoe@gmail.com?subject=Swim Inquiry from Emerald Bay Physio Therapy">iswim@gmail.com</a></h3>
    </section>

    <hr />

    </main>

    <SlimFooter />
    </>
  )
}

export default ServicesPage
