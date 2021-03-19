import React from "react"

const FormList = () => (
    <>
        <div>
            {/* should this class name to be to do with an error or its just secondary color */}
            <h4 className="vigilant slide-back h-line">Required</h4>
            <ul className="">
                <li>
                    <h5><a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/NP-Intake-Forms.pdf">Patient Intake</a></h5>
                    <p>General information to get you started.</p>
                </li>

                <li>
                    <h5><a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/HIPAA-Notice-of-Privacy-Practices-2.pdf">HIPAA Notice of Privacy Practices</a></h5>
                    <p>Please read.</p>
                </li>

                <li>
                    <h5><a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/HIPAA-Acknowledgement-2.pdf">HIPAA Acknowledgement</a></h5>
                    <p>Confirmation of receipt of notice of privacy practices.</p>
                </li>

                <li>
                    <h5><a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/HIPAA-Release-of-Information-2.pdf">HIPAA Release of Information</a></h5>
                    <p>Authorization to use/disclose records if necessary.</p>
                </li>
            </ul>
        </div>

        <div>
            <h4 className="vigilant slide-back h-line">Choose One:</h4>
            <ul>
                <li>
                    {/* link to back doesnt feel very readable */}
                    <h5><a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/questonnaire-Back-Index.pdf">Back index</a></h5>
                    <p>Information about how your back condition affects your everyday life.</p>
                </li>

                <li>
                    <h5><a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/Neck-Initial-(neck).pdf">Neck Index</a></h5>
                    <p>Information about how your neck condition affects your everyday life.</p>
                </li>

                <li>
                    <h5><a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/QuickDash-Initial-(Upper-Extremity).pdf">Arm, Shoulder, Hand</a></h5>
                    <p>DASH (Disabilities of the Arm, Shoulder or Hand)</p>
                </li>

                <li>
                    <h5><a href="https://ebpt.s3-us-west-1.amazonaws.com/forms/LEFS-Initial-(Lower-Extremity).pdf">Hips, Legs, Knees, Ankles, or Feet</a></h5>
                    <p>LEFS (Lower Extremity Functional Scale)</p>
                </li>
            </ul>
        </div>
    </>
    )

    export default FormList