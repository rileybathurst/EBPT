import React, { useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";

function SnowyBuildingFrontImage(props) {

  function vanilla() {
    let snowyImage;
    snowyImage = document.querySelector("#snowyImage");
    createObserver();

    let prevRatio = 0.0;

    function createObserver() {
      let observer;

      let options = {
        threshold: buildThresholdList()
      };

      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(snowyImage);
    }

    // trust the math
    function buildThresholdList() {
      let thresholds = [];
      let numSteps = 20;

      for (let i = 1.0; i <= numSteps; i++) {
        let ratito = i / numSteps;
        thresholds.push(ratito);
      }

      thresholds.push(0);
      return thresholds;
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {

        if (entry.intersectionRatio > prevRatio) {
          setRatio(entry.intersectionRatio);
          // 
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


  useEffect(() => {
    vanilla();
  });


  const treatingStyle = {
    transform: `translate3d(0, ${ratio}rem, 0)`,
    opacity: `${less}`,
    transition: `2s`,
  }

  return (
    <div id="snowyImage" style={treatingStyle}> {/* needs this to load quick enough */}
      <StaticImage
        src="https://ebpt.s3-us-west-1.amazonaws.com/images/snowy-building-front.jpg"
        alt="clinic"
      />
    </div>
  );
}

export default SnowyBuildingFrontImage;
