import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import VisibilitySensor from "react-visibility-sensor";

function onChange(isVisible) {
  // console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  var poolImage = document.getElementById('poolImage');
  poolImage.className = isVisible ? 'visible' : 'hidden';
}

function PoolImage(props) {

  return (
    <VisibilitySensor onChange={onChange}>
      <div id="poolImage"> {/* needs this to load quick enough */}
        <StaticImage
        src="https://ebpt.s3-us-west-1.amazonaws.com/images/pool.jpg"
        alt="pool"
      />
      </div>
    </VisibilitySensor >
  );
}

export default PoolImage;
