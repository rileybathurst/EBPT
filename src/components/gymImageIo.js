import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import VisibilitySensor from "react-visibility-sensor";

function onChange(isVisible) {
  // console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  var gymImage = document.getElementById('gymImage');
  gymImage.className = isVisible ? 'visible' : 'hidden';
}

function GymImage(props) {

  return (
    <VisibilitySensor onChange={onChange}>
      <div id="gymImage"> {/* needs this to load quick enough */}
        <StaticImage
          src="https://ebpt.s3-us-west-1.amazonaws.com/images/gym.jpg"
          alt="gym"
        />
      </div>
    </VisibilitySensor >
  );
}

export default GymImage;
