import React, { useState, useEffect, useRef } from 'react';
import { StaticImage } from "gatsby-plugin-image";

function GymImage(props) {
  const gymImage = useRef();
  console.log(gymImage);

  useEffect(() => {
    const gym = gymImage.current;
    createObserver();

    let prevRatio = 0.0;

    function createObserver() {
      let observer;

      let options = {
        threshold: buildThresholdList()
      };
    
      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(gym);
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

    function handleIntersect(entries) {
      entries.forEach((entry) => {
        // when going out fo frame
        if (entry.intersectionRatio > prevRatio) {
          setRatio(entry.intersectionRatio);
          setLess(0.8 + entry.intersectionRatio * 0.2);

        } else {
          setRatio(entry.intersectionRatio);
        }
    
        prevRatio = entry.intersectionRatio;
      });
    }
  });

  const [ratio, setRatio] = useState(0);
  const [less, setLess] = useState(0);

  // starting style
  const gymStyle = {
    transform: `translate3d(${ratio}rem, 0, 0)`,
    opacity: `${less}`,
    transition: `2s`,
  }

  return (
      <div id="gymImage" style={gymStyle} ref={gymImage}> {/* needs this to load quick enough */}
        <StaticImage
          src="https://ebpt.s3-us-west-1.amazonaws.com/images/gym.jpg"
          alt="gym"
        />
      </div>
  );
}

export default GymImage;
