import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import VisibilitySensor from "react-visibility-sensor";

function onChange(isVisible) {
  console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  var kiley = document.getElementById('kiley');
  kiley.className = isVisible ? 'visible' : 'hidden';
}

function Kiley2(props) {

  return (
    <VisibilitySensor onChange={onChange}>
      <div id="kiley"> {/* needs this to load quick enough */}
      <StaticImage
        src="https://ebpt.s3-us-west-1.amazonaws.com/images/kiley-2.jpg"
        alt="Kiley"
      />
      </div>
    </VisibilitySensor >
  );
}

export default Kiley2;