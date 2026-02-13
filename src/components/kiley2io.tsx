import React, { useState, useEffect, useRef } from 'react';

function Kiley2() {
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
      observer.observe(img);
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

    function handleIntersect(entries: IntersectionObserverEntry[]) {
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

    createObserver();

    return () => {
      observer?.disconnect();
    };
  }, []);

  const [ratio, setRatio] = useState(0);
  const [less, setLess] = useState(0);

  // starting style
  const gymStyle = {
    transform: `translate3d(${ratio}rem, 0, 0)`,
    opacity: `${less}`,
    transition: `2s`,
    // marginBlockStart: `-50%`,
  }

  return (
      <div id="kileyImage" style={gymStyle} ref={image}> {/* needs this to load quick enough */}
        <img
          src="https://ebpt.s3-us-west-1.amazonaws.com/images/kiley-2.jpg"
          alt="Kiley"
          loading="lazy"
          decoding="async"
        />
      </div>
  );
}

export default Kiley2;
