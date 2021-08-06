import React, { useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";

function GymImage(props) {

  function vanilla() {
    let gymImage;
    gymImage = document.querySelector("#gymImage");
    createObserver();

    let prevRatio = 0.0;

    function createObserver() {
      let observer;

      let options = {
        threshold: buildThresholdList()
      };
    
      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(gymImage);
    }

    // trust the math
    function buildThresholdList() {
      let thresholds = [];
      let numSteps = 20;
    
      for (let i=1.0; i<=numSteps; i++) {
        let ratito = i/numSteps;
        thresholds.push(ratito);
      }
    
      thresholds.push(0);
      return thresholds;
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
          setRatio(entry.intersectionRatio);
          setLess(0.8 + entry.intersectionRatio * 0.2);

        } else {
          setRatio(entry.intersectionRatio);
        }
    
        prevRatio = entry.intersectionRatio;
      });
    }
  }

  const [ratio, setRatio] = useState(0);
  const [less, setLess] = useState(0);

  // after render // dont use vanialla js in here put that in its own function
  useEffect(() => {
    vanilla();
  });

  // starting style
  const gymStyle = {
    transform: `translate3d(${ratio}rem, 0, 0)`,
    opacity: `${less}`,
  }

  return (
      <div id="gymImage" style={gymStyle}> {/* needs this to load quick enough */}
        <StaticImage
          src="https://ebpt.s3-us-west-1.amazonaws.com/images/gym.jpg"
          alt="gym"
        />
      </div>
  );
}

export default GymImage;
