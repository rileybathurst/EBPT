import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const OfferingsList = () => (
  <ul className="catalog catalog-wide">

    <li>
      <StaticImage
        src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+aquatic+therapy+over+a+flat+emerald+green+circle+with+texture+on+a.jpg"
        alt="an icon symbolizing aquatic therapy"
      />
      <h3><Link to="/offerings/aquatic-therapy">Aquatic Therapy</Link></h3>
      <p>Aquatic therapy is conducted in a swimming pool that is temperature controlled. It can allow a person to perform movements at an earlier stage of rehabilitation due to reduced weight-bearing from the buoyancy of the water.</p>
      <Link to="/offerings/aquatic-therapy">Learn more about Aquatic Therapy</Link>
    </li>

    <li>
      <h3>
        <Link to="/offerings/kinesio-taping">Kinesio taping (Rock Tape)</Link>
      </h3>
      <StaticImage
        src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+Kinesio+taping+over+a+flat+emerald+green+circle+with+texture+on+a+.jpg"
        alt="an icon symbolizing aquatic therapy"
      />
      <p>Kinesiology Tape is made from a stretchy fabric with adhesive applied in a wavelike pattern on the back. When applied, the tape decompresses by gently lifting the skin underneath it, creating more space between the layers of skin and fascia and allowing for increased circulation. The tension from the tape increases the brain&apos;s awareness of the area that is taped due to heightened sensitivity.</p>
      <Link to="/offerings/kinesio-taping">Learn more about Kinesio taping</Link>
    </li>

    <li>
      <h3><Link to="/offerings/pelvic-health">Pelvic Floor Rehabilitation</Link></h3>
      <StaticImage
        src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+Pelvic+Floor+Rehabilitation+over+a+flat+emerald+green+circle+with+.jpg"
        alt="an icon symbolizing aquatic therapy"
      />
      <p>Do you have pain in the pelvis, low back or hips that is associated with sitting, walking, urination, or intercourse?</p>
      <Link to="/offerings/pelvic-health">Learn more about Pelvic Floor Rehabilitation</Link>
    </li>

    <li>
      <h3><Link to="/offerings/orthotics">Orthotics</Link></h3>
      <StaticImage
        src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+orthotics+over+a+flat+emerald+green+circle+with+texture+on+a+white.jpg"
        alt="an icon symbolizing aquatic therapy"
      />
      <p>Suffer from foot, knee, or hip pain? Custom orthotics might be right for you!</p>
      <Link to="/offerings/orthotics">Learn more about Orthotics</Link>
    </li>

    <li>
      <h3><Link to="/offerings/vestibular-rehabilitation">
        Vestibular Rehabilitation
      </Link></h3>
      <StaticImage
        src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+Vestibular+Rehabilitation+over+a+flat+emerald+green+circle+with+te.jpg"
        alt="an icon symbolizing aquatic therapy"
      />
      <p>If you suffer from dizziness or balance problems, vestibular rehabilitation may offer the help you need. In addition, dizziness and balance issues can lead to headaches and / or muscle fatigue.</p>
      <Link to="/offerings/vestibular-rehabilitation">Learn more about Vestibular Rehabilitation</Link>
    </li>

    <li>
      <h3><Link to="/offerings/lvst">
        LSVT BIG Treatment for Parkinson&apos;s Disease
      </Link></h3>
      <StaticImage
        src="https://ebpt.s3.us-west-1.amazonaws.com/images/firefly/Firefly+corporate+illustration+of+Parkinson's+Disease+over+a+flat+emerald+green+circle+with+texture+.jpg"
        alt="an icon symbolizing aquatic therapy"
      />
      <p>LSVT BIG trains people with Parkinson&apos;s to move their bodies normally. As the disease progresses, movements get smaller and slower, yet feel normal to the involved person. This causes problems with dressing and other tasks for self-care, usual household chores, and walking. The program focuses on recalibrating the brain to understand what normal movement is.</p>
      <Link to="/offerings/lvst">Learn more about LSVT BIG Treatment for Parkinson&apos;s Disease</Link>
    </li>

    <li>
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
    </li>
  </ul>
);

export default OfferingsList;
