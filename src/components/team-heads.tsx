import React from "react";
// ! the images are not using the radius
// ! add jen

function JessicaProfile() {
  return (
    <img
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/jessica-profile.jpg"
      alt="Jessica"
      loading="lazy"
      decoding="async"
    />
  );
}
function KileyProfile() {
  return (
    <img
      src="https://ebpt.s3-us-west-1.amazonaws.com/images/kiley-profile.jpg"
      alt="Kiley"
      loading="lazy"
      decoding="async"
    />
  );
}
function TinaHead() {
  return (
    <img
      src="https://ebpt.s3.us-west-1.amazonaws.com/images/tina-team_head.jpg"
      alt="tina"
      loading="lazy"
      decoding="async"
    />
  );
}

function NancyHead() {
  return (
    <img
      src="https://ebpt.s3.us-west-1.amazonaws.com/images/nancy-team.jpg"
      alt="nancy"
      loading="lazy"
      decoding="async"
    />
  );
}

const TeamHeads = () => (
  <div className="team-heads spin">
    {/* depending on the CSS I might just make square images for here */}
    <div>
      <a href="/team#jessica">
        <JessicaProfile />
        <p>Jessica, PT.</p>
      </a>
    </div>

    <div>
      <a href="/team#nancy">
        <NancyHead />
        <p>Nancy, DPT.</p>
      </a>
    </div>

    <div>
      <a href="/team#kiley">
        <KileyProfile />
        <p>Kiley</p>
      </a>
    </div>

    <div>
      <a href="/team#tina">
        <TinaHead />
        <p>Tina</p>
      </a>
    </div>

    {/* <button class="spin">Spin Circle</button> */}
  </div>
);

export default TeamHeads;
