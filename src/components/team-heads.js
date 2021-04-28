import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function JessicaProfile() {
  return (
    <StaticImage
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/jessica-profile.jpg"
      alt="Jessica"
    />
  );
}
function KileyProfile() {
  return (
    <StaticImage
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/kiley-profile.jpg"
      alt="Kiley"
    />
  );
}
function RachaelProfile() {
  return (
    <StaticImage
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/rachael-profile.jpg"
      alt="Rachael"
    />
  );
}

const TeamHeads = () => (
  <div className="team-heads">
    {/* depending on the CSS I might just make square images for here */}
    <div>
      <Link to="/team#jessica">
        <JessicaProfile />
        Jessica, PT.
      </Link>
    </div>

    <div>
      <Link to="/team#kiley">
        <KileyProfile />
        Kiley
      </Link>
    </div>

    <div>
      <Link to="/team#rachael">
        <RachaelProfile />
        Rachael
      </Link>
    </div>
  </div>
);

export default TeamHeads;
