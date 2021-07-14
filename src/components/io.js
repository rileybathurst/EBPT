import * as React from "react";

function IntersectionObserver() {
  const element = (
    <div id="box">
      <div className="vertical">
        Welcome to <strong>The Box!</strong>
      </div>
    </div>
  );
  
  return (
    <>
      {element}
    </>
  );
}

export default IntersectionObserver;