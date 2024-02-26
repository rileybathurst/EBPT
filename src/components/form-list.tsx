import React from "react";

const FormList = () => (
  <>
    <section>
      {/* should this class name to be to do with an error or its just secondary color */}
      <h3 className="vigilant h-line h4">Required</h3>
      <ul className="form-list">
        <li>
          <h4 className="h5">
            {/* date 6/15/21 */}
            <a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/NP-Intake-Forms-15_6_21.pdf">
              Patient Intake
            </a>
          </h4>
          <p>General information to get you started.</p>
        </li>

        <li>
          <h4 className="h5">
            {/* date 6/15/21 */}
            <a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/HIPAA-Notice-of-Privacy-Practices-15_6_21.pdf">
              HIPAA Notice of Privacy Practices
            </a>
          </h4>
          <p>Please read.</p>
        </li>



        {/* <li>
          <h4 className="h5">
            date 6/15/21
            <a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/HIPAA-Acknowledgement-15_6_21.pdf">
              HIPAA Acknowledgement
            </a>
          </h4>
          <p>Confirmation of receipt of notice of privacy practices.</p>
        </li>

        <li>
          <h4 className="h5">
            date 6/15/21
            <a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/HIPAA-Release-of-Information-15_6_21.pdf">
              HIPAA Release of Information
            </a>
          </h4>
          <p>Authorization to use/disclose records if necessary.</p>
        </li> */}
      </ul>
    </section>

    <section>
      <h3 className="vigilant h-line h4">Choose One:</h3>
      <ul className="form-list">
        <li>
          {/* link to back doesnt feel very readable */}
          <h4 className="h5">
            {/* date 6/15/21 */}
            <a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/questonnaire-Back-Index-15_6_21.pdf">
              Back index
            </a>
          </h4>
          <p>
            Information about how your back condition affects your everyday
            life.
          </p>
        </li>

        <li>
          <h4 className="h5">
            {/* date 6/15/21 */}
            <a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/Neck-Initial-(neck)-15_6_21.pdf">
              Neck Index
            </a>
          </h4>
          <p>
            Information about how your neck condition affects your everyday
            life.
          </p>
        </li>

        <li>
          <h4 className="h5">
            {/* date 6/15/21 */}
            <a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/QuickDash-Initial-(Upper-Extremity)-15_6_21.pdf">
              Arm, Shoulder, Hand
            </a>
          </h4>
          <p>DASH (Disabilities of the Arm, Shoulder or Hand)</p>
        </li>

        <li>
          <h4 className="h5">
            {/* date 6/15/21 */}
            <a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/LEFS-Initial-(Lower-Extremity)-15_6_21.pdf">
              Hips, Legs, Knees, Ankles, or Feet
            </a>
          </h4>
          <p>LEFS (Lower Extremity Functional Scale)</p>
        </li>
      </ul>
    </section>
  </>
);

export default FormList;
