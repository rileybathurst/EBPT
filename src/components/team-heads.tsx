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
function TinaHead() {
  return (
    <StaticImage
      src="https://ebpt.s3.us-west-1.amazonaws.com/images/tina-team_head.jpg"
      alt="tina"
    />
  );
}

function NancyHead() {
  return (
    <StaticImage
      src="https://ebpt.s3.us-west-1.amazonaws.com/images/nancy-team.jpg"
      alt="nancy"
    />
  );
}

const TeamHeads = () => (
  <div className="team-heads spin">
    {/* depending on the CSS I might just make square images for here */}
    <div>
      <Link to="/team#jessica">
        <JessicaProfile />
        <p>Jessica, PT.</p>
      </Link>
    </div>

    <div>
      <Link to="/team#kiley">
        <KileyProfile />
        <p>Kiley</p>
      </Link>
    </div>

    <div>
      <Link to="/team#tina">
        <TinaHead />
        <p>Tina</p>
      </Link>
    </div>

    <div>
      <Link to="/team#nancy">
        <NancyHead />
        <p>Nancy</p>
      </Link>
    </div>

    {/* <button class="spin">Spin Circle</button> */}
  </div>
);

export default TeamHeads;
