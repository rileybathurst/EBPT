import React from "react";
import BestOfTahoe from "../images/best-of-tahoe";

type OfferingsListTypes = {
  className?: string;
  best?: boolean;
};
const OfferingsList = ({ className, best }: OfferingsListTypes) => (
  <>
    <section className={className}>
      <ul className="catalog catalog-wide">

        <li>
          <img
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+aquatic+therapy+over+a+flat+emerald+green+circle+with+texture+on+a.jpg"
            alt="an icon symbolizing aquatic therapy"
            loading="lazy"
            decoding="async"
          />
          <h3><a href="/offerings/aquatic-therapy">Aquatic Therapy</a></h3>
          <p>Aquatic therapy is conducted in a swimming pool that is temperature controlled. It can allow a person to perform movements at an earlier stage of rehabilitation due to reduced weight-bearing from the buoyancy of the water.</p>
          <a href="/offerings/aquatic-therapy">Learn more about Aquatic Therapy</a>
        </li>

        <li>
          <h3>
            <a href="/offerings/kinesio-taping">Kinesio taping (Rock Tape)</a>
          </h3>
          <img
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+Kinesio+taping+over+a+flat+emerald+green+circle+with+texture+on+a+.jpg"
            alt="an icon symbolizing aquatic therapy"
            loading="lazy"
            decoding="async"
          />
          <p>Kinesiology Tape is made from a stretchy fabric with adhesive applied in a wavelike pattern on the back. When applied, the tape decompresses by gently lifting the skin underneath it, creating more space between the layers of skin and fascia and allowing for increased circulation. The tension from the tape increases the brain&apos;s awareness of the area that is taped due to heightened sensitivity.</p>
          <a href="/offerings/kinesio-taping">Learn more about Kinesio taping</a>
        </li>

        <li>
          <h3><a href="/offerings/pelvic-health">Pelvic Floor Rehabilitation</a></h3>
          <img
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+Pelvic+Floor+Rehabilitation+over+a+flat+emerald+green+circle+with+.jpg"
            alt="an icon symbolizing aquatic therapy"
            loading="lazy"
            decoding="async"
          />
          <p>Do you have pain in the pelvis, low back or hips that is associated with sitting, walking, urination, or intercourse?</p>
          <a href="/offerings/pelvic-health">Learn more about Pelvic Floor Rehabilitation</a>
        </li>

        <li>
          <h3><a href="/offerings/orthotics">Orthotics</a></h3>
          <img
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+orthotics+over+a+flat+emerald+green+circle+with+texture+on+a+white.jpg"
            alt="an icon symbolizing aquatic therapy"
            loading="lazy"
            decoding="async"
          />
          <p>Suffer from foot, knee, or hip pain? Custom orthotics might be right for you!</p>
          <a href="/offerings/orthotics">Learn more about Orthotics</a>
        </li>

        <li>
          <h3><a href="/offerings/vestibular-rehabilitation">
            Vestibular Rehabilitation
          </a></h3>
          <img
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+Vestibular+Rehabilitation+over+a+flat+emerald+green+circle+with+te.jpg"
            alt="an icon symbolizing vestibular rehabilitation"
            loading="lazy"
            decoding="async"
          />
          <p>If you suffer from dizziness or balance problems, vestibular rehabilitation may offer the help you need. In addition, dizziness and balance issues can lead to headaches and / or muscle fatigue.</p>
          <a href="/offerings/vestibular-rehabilitation">Learn more about Vestibular Rehabilitation</a>
        </li>

        <li>
          <h3><a href="/offerings/lvst">
            LSVT BIG Treatment for Parkinson&apos;s Disease
          </a></h3>
          <img
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+Parkinson's+Disease+over+a+flat+emerald+green+circle+with+texture+.jpg"
            alt="an icon symbolizing aquatic therapy"
            loading="lazy"
            decoding="async"
          />
          <p>LSVT BIG trains people with Parkinson&apos;s to move their bodies normally. As the disease progresses, movements get smaller and slower, yet feel normal to the involved person. This causes problems with dressing and other tasks for self-care, usual household chores, and walking. The program focuses on recalibrating the brain to understand what normal movement is.</p>
          <a href="/offerings/lvst">Learn more about LSVT BIG Treatment for Parkinson&apos;s Disease</a>
        </li>

        <li>
          <h3><a href="/offerings/remote-therapeutic-monitoring">
            Remote Therapeutic Monitoring
          </a></h3>
          <img
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/Firefly+corporate+illustration+of+very+stylized+monitoring+therapy+over+a+flat+emerald+green+circle+.webp"
            alt="an icon symbolizing Remote Therapeutic Monitoring"
            style={{ scale: 0.9 }}
            loading="lazy"
            decoding="async"
          />
          <p>Remote Therapeutic Monitoring (RTM) is a service to provide patient treatment and monitoring by remote means.</p>
          <a href="/offerings/remote-therapeutic-monitoring">Learn more about Remote Therapeutic Monitoring (RTM)</a>
        </li>

        <li>
          <h3><a href="/offerings/craniosacral-therapy">
            Craniosacral Therapy
          </a></h3>
          <img
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/craniosacral-metaphor.webp"
            alt="an icon symbolizing Craniosacral Therapy"
            style={{ scale: 0.9 }}
            loading="lazy"
            decoding="async"
          />
          <p>Craniosacral therapy is a gentle, holistic, hands-on technique that focuses on the nervous system and the fascia.  By using light touch, practitioners help release tension and restrictions, promoting relaxation and supporting the body’s natural healing process.</p>
          <a href="/offerings/craniosacral-therapy">Learn more about Craniosacral Therapy</a>
        </li>

        <li>
          <h3><a href="/offerings/near-infrared-light-therapy">
            Near Infrared Light Therapy
          </a></h3>
          <img
            src="https://ebpt.s3.us-west-1.amazonaws.com/images/infared-light-metaphor.webp"
            alt="an icon symbolizing Near Infrared Light Therapy"
            style={{ scale: 0.9 }}
            loading="lazy"
            decoding="async"
          />
          <p>Near infrared light (NIR) is a non-invasive treatment that uses low-intensity light wavelengths that penetrate deeper tissues and muscles to stimulate cellular repair mechanisms. This modality works by increasing blood flow, promoting tissue repair, and reducing inflammation. NIR is beneficial for pain management, muscle relaxation, musculoskeletal conditions, and wound healing.</p>
          <a href="/offerings/near-infrared-light-therapy">Learn more about Near Infrared Light Therapy</a>
        </li>

      </ul>
    </section>

    <div className="two-fold">

      <section>
        <h3>More Offerings</h3>
        <ul className="more">
          <li>
            Post-surgical rehabilitation
          </li>
          <li>
            Injury prevention assessments
          </li>
          <li>
            Instrument-assisted soft tissue mobilization
          </li>
          <li>
            Myofascial release
          </li>
          <li>
            Cupping
          </li>

          <li>
            Cervical mechanical traction
          </li>
          <li>
            TRX training
          </li>
          <li>
            Pilates reformer instruction
          </li>
          <li>
            TENS electrical stimulation
          </li>
        </ul>
      </section>
      {best ? <BestOfTahoe /> : null}

    </div>
  </>
);

export default OfferingsList;
