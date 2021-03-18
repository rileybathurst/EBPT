import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import SlimFooter from "../components/slim-footer"

/* import JessicaImage from "../images/jessica-image"
import KileyImage from "../images/kiley-image"
import RachaelImage from "../images/rachael-image" */

function JessicaImage() {
    return <StaticImage src="https://ebpt.s3-us-west-1.amazonaws.com/images/headshot.jpg" alt="Jessica" />
}
function KileyImage() {
    return <StaticImage src="https://ebpt.s3-us-west-1.amazonaws.com/images/kiley.jpg" alt="Kiley" />
}
function RachaelImage() {
    return <StaticImage src="https://ebpt.s3-us-west-1.amazonaws.com/images/rachael.jpg" alt="Rachael" />
}

// markup
const NotFoundPage = () => {
  return (
    <>
        <Header />
            <main>
            <h1 className="measured">Team</h1>
        
                <article id="jessica" className="measured">
                    <JessicaImage />
                    <h2>Jessica, PT.</h2>
                    <p className="justified-40">I first became interested in physical therapy after observing my dad’s treatments following knee surgery. I was intrigued by physical therapy’s use of exercise to help improve overall function. I began working as a physical therapy aide and later received my Master’s degree in Physical Therapy from Northern Illinois University in 2011.</p>

                    <p className="justified-40">After working as a PT in Illinois for a little over a year, I began my search for places that could support my active lifestyle (water skiing, wake boarding, and snowboarding). Photos of Tahoe in snowboard magazines always seemed to catch my eye! I moved to Tahoe in 2013 and began working at Emerald Bay Physical Therapy.</p>

                    <p className="justified-40">In January 2021, I purchased ownership of EBPT to further lay roots in Tahoe and provide the community with expert care in a private setting. I believe the key factors that lead to successful physical therapy are quality time, active listening, and hands-on treatments. Every treatment plan's foundational components are listening to each patient's complaints and goals, using critical thinking to find the causes, and utilizing manual techniques. Using these fundamental building blocks ensures progress with every patient.</p>

                    <p className="justified-40">I strive to provide the best possible care by attending various continuing education courses. I have advanced my knowledge in the recent past by taking classes regarding cervical and scapular dysfunction treatment, myofascial release, and RockTape Kinesio-taping. I have attended lectures about extremity mobilization, shoulder biomechanics, and even earned my Pilates Level 1 Mat Instruction certificate.</p>

                    <p className="justified-40">I look forward to deepening my South Shore roots while providing individualized, specialized, and reliable care to my friends and neighbors. At Emerald Bay Physical Therapy, we are committed to health and wellness no matter your age, lifestyle, or athletic abilities. I look forward to meeting you!</p>
                </article>

                <hr />

                <article id="kiley" className="measured">
                    <KileyImage />
                    <h2>Kiley</h2>
                    <p className="justified-40">I have had the pleasure of working as a Physical Therapy Aide at EBPT for just over 5 years. I grew up in a small town in Iowa with a love for dance and a fascination with how our bodies move. I came to Tahoe in 2008 after attending school in Southern California. Like so many others, I ended up staying and making Tahoe my home. I enjoy all of the beauty and outdoor activities Tahoe has to offer, and I share your love for this special place we call home. I always knew I wanted to work in healthcare, and my job at EBPT has been more fulfilling than I could have ever imagined. I hope to provide our patients with a welcoming environment where they feel at ease and maybe even a little excited about coming to PT! I look forward to helping our patients, from any age and activity level, get stronger and move better so they can get back to doing what they love.</p>
                </article>

                <hr />

                <article id="rachael" className="measured">
                    <RachaelImage />
                    <h2>Rachael</h2>
                    <p className="justified-40">Rachael has been living in South Lake Tahoe for over a decade since graduating college from UC Berkeley. She worked at Heavenly for several seasons as a ski instructor and spends winter on the slopes skiing and snowboarding. In the summer, her favorite activities include hiking, camping, trail running, and swimming in the lake. She loves comedies, traveling, and cooking, and especially her feline companion, Kitten Doodle Chicken Noodle. Rachael enjoys her job at EBPT but is also looking forward to starting nursing school soon.</p>
                </article>
            </main>

            <hr />

        <SlimFooter />
    </>
  )
}

export default NotFoundPage
