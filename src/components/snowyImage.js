import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import VisibilitySensor from "react-visibility-sensor";

function onChange(isVisible) {
  // console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  var snowyImage = document.getElementById('snowyImage');
  snowyImage.className = isVisible ? 'visible' : 'hidden';
}

function SnowyBuildingFrontImage(props) {

  return (
    <VisibilitySensor onChange={onChange}>
      <div id="snowyImage"> {/* needs this to load quick enough */}
        <StaticImage
        src="https://ebpt.s3-us-west-1.amazonaws.com/images/snowy-building-front.jpg"
        alt="clinic"
      />
      </div>
    </VisibilitySensor >
  );
}

export default SnowyBuildingFrontImage;
