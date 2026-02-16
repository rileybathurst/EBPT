import React, { useState, useEffect, useRef } from 'react';

function NancyImage() {

  const image = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const img = image.current;
    if (!img) {
      return undefined;
    }

    let prevRatio = 0.0;
    let observer: IntersectionObserver | null = null;

    function createObserver() {
      const options = {
        threshold: buildThresholdList()
      };

      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(img as Element);
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

    function handleIntersect(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {

        if (entry.intersectionRatio > prevRatio) {
          setRatio(entry.intersectionRatio - 1);
          // 
          setLess(0.8 + entry.intersectionRatio * 0.2);

        } else {
          setRatio(entry.intersectionRatio);
        }

        prevRatio = entry.intersectionRatio;
      });
    }

    createObserver();

    return () => {
      observer?.disconnect();
    };
  }, []);

  const [ratio, setRatio] = useState(0);
  const [less, setLess] = useState(0);

  const treatingStyle = {
    transform: `translate3d(0, ${ratio}rem, 0)`,
    opacity: `${less}`,
    transition: `2s`,
  }

  return (
    <div id="snowyImage" style={treatingStyle} ref={image}> {/* needs this to load quick enough */}
      <img
        src="https://ebpt.s3.us-west-1.amazonaws.com/images/nancy-working.jpg"
        alt="nancy working with a patient at emerald bay physical therapy in south lake tahoe california"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default NancyImage;
