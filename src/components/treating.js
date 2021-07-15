import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import VisibilitySensor from "react-visibility-sensor";

function onChange(isVisible) {
  // console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  var treating = document.getElementById('treating');
  treating.className = isVisible ? 'visible' : 'hidden';
}

function Treating(props) {

  return (
    <VisibilitySensor onChange={onChange}>
      <div id="treating"> {/* needs this to load quick enough */}
        <StaticImage
        src="https://ebpt.s3-us-west-1.amazonaws.com/images/treating.jpg"
        alt="Jessica providing treatment to a patient"
      />
      </div>
    </VisibilitySensor >
  );
}

export default Treating;