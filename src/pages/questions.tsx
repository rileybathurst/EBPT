import * as React from "react";
import { Link, Script } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";

// import SeoOld from "../components/seo-old"; // this syntax changes on the new one
import Header from "../components/header";
import SlimFooter from "../components/slim-footer";

// TODO I think this is other places as well?
function Kiley2() {
  return (
    <StaticImage
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/kiley-2.jpg"
      alt="Kiley"
    />
  );
}

const QuestionsPage = () => {
  return (
    <>
      <Header />

      <main>
        <h1 className="measured">Questions</h1>
        {/* <hr /> */}
        <div className="measured slender-image">
          <Kiley2 />
        </div>
        <h2 className="measured">Therapy Questions</h2>
        <section
          id="therapy-questions"
          className="measured"
        >
          <article>
            <h3>
              How do I begin physical therapy treatment? Do you require a referral
              and/or a prescription?
            </h3>
            <div>
              <ul>
                <li>
                  California law allows licensed physical therapists to treat you
                  without obtaining a referral from your doctor.
                </li>
                <li>
                  Please keep in mind – after 12 visits or 45 days (whichever comes
                  first), a doctor must sign off on any further treatment.
                </li>
                <li>
                  <b>NOTE:</b> While we can see you without a prescription or
                  referral, your insurance network may still require a referral to
                  cover the costs of your visits. Please contact your insurance
                  provider prior to your first visit to determine whether your
                  health plan requires a referral to ensure coverage.
                </li>
                <li>
                  Contact our clinic to make an appointment for an evaluation.
                </li>
                <li>Fill out our new patient intake forms.</li>
                <li>
                  A referral is <b>NOT</b> required for independent exercise
                  programs.
                </li>
              </ul>
            </div>
          </article>

          <article>
            <h3>What if my referral is to a different therapist/ clinic?</h3>
            <div>
              <p>
                We can accept any prescription for physical therapy. We recommend
                communicating with your doctor regarding your preference for Emerald
                Bay Physical Therapy.
              </p>
            </div>
          </article>

          <article>
            <h3>What do I wear?</h3>
            <div>
              <ul>
                <li>
                  We suggest that you wear loose fitting clothing like something you
                  might wear to the gym and something that makes the area we are
                  treating easily accessible.
                </li>
                <li>
                  Comfortable shoes are suggested, like jogging or walking shoes.
                  High heels, slip-ons, and boots are not recommended.
                </li>
                <li>
                  Pool patients should bring a swimsuit or a t-shirt and shorts to
                  change into before beginning aquatic therapy.
                </li>
                <li>Changing area available.</li>
              </ul>
            </div>
          </article>

          <article>
            <h3>What should I bring to my first visit?</h3>
            <div>
              <p>Please bring the following to your 1st appointment:</p>
              <ul>
                <li>
                  Original prescription/referral from your physician (if required)
                </li>
                <li>Insurance card or other insurance information</li>
                <li>Office co-pay (if applicable)</li>
              </ul>
            </div>
          </article>

          <article>
            <h3>What should I expect during my first visit?</h3>
            <div>
              <p>
                During your first appointment you will meet your physical therapist
                and speak with them regarding your symptoms, functional limitations,
                and your goals. Your physical therapist will perform tests and
                measures including range of motion and muscle strength in order to
                set up your treatment. You can also expect to receive treatment
                during your first appointment which will typically include manual
                therapy and instruction on exercise.
              </p>
            </div>
          </article>

          <article>
            <h3>What might my treatment involve?</h3>
            <div>
              <p>
                Your treatment will typically involve hands-on manual therapy,
                exercise, and modalities. Exercises can include stretching,
                strengthening, core stabilization, and postural reeducation. Your
                exercise program will be individually tailored to address your
                functional limitations and goals. Modalities may include electrical
                stimulation, moist heat, ice, and traction. If you are scheduled for
                aquatic therapy, you will perform a series of stretching and
                strengthening exercises in the pool, possibly using the current,
                handheld paddles, water weights, or other tools.
              </p>
            </div>
          </article>

          <article>
            <h3>
              What can I do to speed up my recovery time? Will I be given a home
              exercise program?
            </h3>
            <div>
              <p>
                Patients are typically given a home exercise program on one of their
                first visits. It is important to follow your program on the days
                that you do not come to therapy unless otherwise instructed by the
                therapist.
              </p>
            </div>
          </article>

          <article>
            <h3>
              How frequently will I be going? How long will my appointments take?
            </h3>
            <div>
              <p>
                Your doctor and your therapist determine the frequency of your
                therapy. It is common for patients to come 2 or 3 times per week for
                4 to 6 weeks to start out with.
              </p>
              <p>
                A typical appointment will last approximately 1 hour. This varies
                per patient and per injury.
              </p>
            </div>
          </article>
        </section>
        {/* #therapy-questions */}
        <hr />
        <section id="insurance-questions" className="measured">
          <h2>Insurance Questions</h2>

          <article>
            <h3>Is my insurance accepted?</h3>
            <div>
              <p>
                We accept most PPO insurance plans, Medicare, and most Medicare
                Secondary Insurance plans. We <b>DO NOT</b> accept Medi-Cal or most
                HMO insurance plans. Please contact your insurance provider directly
                to confirm your coverage for physical therapy treatment.
              </p>
            </div>
          </article>

          <article>
            <h3>What will my insurance cover?</h3>
            <div>
              <p>
                This will vary per insurance plan. Three common terms you will hear
                in relation to your insurance coverage are&nbsp;
                <b>deductibles, co-pays</b>, and <b>co-insurance</b>. A&nbsp;
                <b>deductible</b> is a sum which the insurance company requires you
                to pay out of pocket before they will begin coverage. A&nbsp;
                <b>co-pay</b> is a set amount you pay for each visit. A&nbsp;
                <b>co-insurance</b> payment is a percentage of the charges for which
                you are responsible after the insurance company has paid their
                portion. One or two of these terms will probably apply to your
                insurance. Insurance will not cover independent programs offered at
                EBPT such as the water exercise programs, swim lessons, personal
                training, and non-prescribed massage therapy.
              </p>
            </div>
          </article>

          <article>
            <h3>How do I use my work compensation insurance?</h3>
            <div>
              <p>
                Your adjuster and/ or nurse case manager will coordinate with us and
                with you to determine your physical therapy treatment. We will
                contact the insurance company for authorization to begin and
                continue your therapy.
              </p>
            </div>
          </article>

          <article>
            <h3>
              How do I make payments? Will you accept payment plans? Is a payment
              required at each visit?
            </h3>
            <div>
              <p>
                This depends on your insurance coverage. If you have a deductible
                that has not yet been satisfied, we will request you to pay up to
                the amount of the deductible as the charges are accrued. For
                co-insurance payments, you will receive a bill after your insurance
                has paid its portion. These can be paid through the mail, over the
                phone, or by coming in to the office. If your insurance plan
                requires a co-pay, we ask that you pay those on each visit.
              </p>
            </div>
          </article>

        </section>
        {/* #insurance-questions */}
        <hr />
        <section id="cash-pricing" className="measured">
          <h2>Cash Pricing</h2>
          <p>For those without or not wanting to use insurance.</p>
          <ul>
            <li>Evaluation (first appointment) $125</li>
            <li>follow up appointments $100</li>
          </ul>
        </section>
        {/* #cash-pricing */}
        <hr />
        <section id="other-questions" className="measured">
          <h2>Other Questions</h2>

          <article>
            <h3>Do you offer other services?</h3>
            <div>
              <p>
                Yes! For more information, please click on any of the following
                links:
              </p>
              <ul>
                <li><Link to="/services#water">Water Exercise Classes</Link></li>
                <li><Link to="/services#kids-swim">Swim Lessons</Link></li>
              </ul>
            </div>
          </article>
        </section>
        {/* #other-questions */}
        <hr />
      </main>

      <SlimFooter />
    </>
  );
};

export default QuestionsPage;

export const Head = () => {
  return (
    <SEO
      title="Questions | Emerald Bay Physical Therapy"
    >
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I begin physical therapy treatment? Do you require a referral and/or a prescription?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<ul><li>California law allows licensed physical therapists to treat you without obtaining a referral from your doctor.</li><li>Please keep in mind – after 12 visits or 45 days (whichever comes first), a doctor must sign off on any further treatment.</li><li><b>NOTE:</b> While we can see you without a prescription orreferral, your insurance network may still require a referral to cover the costs of your visits. Please contact your insurance provider prior to your first visit to determine whether your health plan requires a referral to ensure coverage.</li><li>Contact our clinic to make an appointment for an evaluation.</li><li>Fill out our new patient intake forms.</li><li>A referral is <b>NOT</b> required for independent exerciseprograms.</li></ul>"
                }
              },
              {
                "@type": "Question",
                "name": "What if my referral is to a different therapist/ clinic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>We can accept any prescription for physical therapy. We recommend communicating with your doctor regarding your preference for Emerald Bay Physical Therapy.</p>"
                }
              },
              {
                "@type": "Question",
                "name": "What do I wear?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<ul><li>We suggest that you wear loose fitting clothing like something you might wear to the gym and something that makes the area we aretreating easily accessible.</li><li>Comfortable shoes are suggested, like jogging or walking shoes. High heels, slip-ons, and boots are not recommended.</li><li>Pool patients should bring a swimsuit or a t-shirt and shorts to change into before beginning aquatic therapy.</li><li>Changing area available.</li></ul>"
                }
              },
              {
                "@type": "Question",
                "name": "What should I bring to my first visit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>Please bring the following to your 1st appointment:</p><ul><li>Original prescription/referral from your physician (if required)</li><li>Insurance card or other insurance information</li><li>Office co-pay (if applicable)</li></ul>"
                }
              },
              {
                "@type": "Question",
                "name": "What should I expect during my first visit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>During your first appointment you will meet your physical therapist and speak with them regarding your symptoms, functional limitations, and your goals. Your physical therapist will perform tests and measures including range of motion and muscle strength in order to set up your treatment. You can also expect to receive treatment during your first appointment which will typically include manual therapy and instruction on exercise.</p>"
                }
              },
              {
                "@type": "Question",
                "name": "What might my treatment involve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>Your treatment will typically involve hands-on manual therapy, exercise, and modalities. Exercises can include stretching, strengthening, core stabilization, and postural reeducation. Your exercise program will be individually tailored to address your functional limitations and goals. Modalities may include electrical stimulation, moist heat, ice, and traction. If you are scheduled for aquatic therapy, you will perform a series of stretching and strengthening exercises in the pool, possibly using the current, handheld paddles, water weights, or other tools.</p>"
                }
              },
              {
                "@type": "Question",
                "name": "What can I do to speed up my recovery time? Will I be given a home exercise program?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>Patients are typically given a home exercise program on one of their first visits. It is important to follow your program on the days that you do not come to therapy unless otherwise instructed by the therapist.</p>"
                }
              },
              {
                "@type": "Question",
                "name": "How frequently will I be going? How long will my appointments take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>Your doctor and your therapist determine the frequency of your therapy. It is common for patients to come 2 or 3 times per week for 4 to 6 weeks to start out with. </p><p>A typical appointment will last approximately 1 hour. This varies per patient and per injury.</p>"
                }
              },
              {
                "@type": "Question",
                "name": "Is my insurance accepted?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>We accept most PPO insurance plans, Medicare, and most Medicare Secondary Insurance plans. We <b>DO NOT</b> accept Medi-Cal or most HMO insurance plans. Please contact your insurance provider directly to confirm your coverage for physical therapy treatment.</p>"
                }
              },
              {
                "@type": "Question",
                "name": "What will my insurance cover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>This will vary per insurance plan. Three common terms you will hear in relation to your insurance coverage are&nbsp; <b>deductibles, co-pays</b>, and <b>co-insurance</b>. A&nbsp; <b>deductible</b> is a sum which the insurance company requires you to pay out of pocket before they will begin coverage. A&nbsp; <b>co-pay</b> is a set amount you pay for each visit. A&nbsp; <b>co-insurance</b> payment is a percentage of the charges for which you are responsible after the insurance company has paid their portion. One or two of these terms will probably apply to your insurance. Insurance will not cover independent programs offered at EBPT such as the water exercise programs, swim lessons, personal training, and non-prescribed massage therapy.</p>"
                }
              },
              {
                "@type": "Question",
                "name": "How do I use my work compensation insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>Your adjuster and/ or nurse case manager will coordinate with us and with you to determine your physical therapy treatment. We will contact the insurance company for authorization to begin and continue your therapy.</p>"
                }
              },
              {
                "@type": "Question",
                "name": "How do I make payments? Will you accept payment plans? Is a payment required at each visit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>This depends on your insurance coverage. If you have a deductible that has not yet been satisfied, we will request you to pay up to the amount of the deductible as the charges are accrued. For co-insurance payments, you will receive a bill after your insurance has paid its portion. These can be paid through the mail, over the phone, or by coming in to the office. If your insurance plan requires a co-pay, we ask that you pay those on each visit.</p>"
                }
              }
            ]
          }
        `}
      </Script>
    </SEO>
  );
}