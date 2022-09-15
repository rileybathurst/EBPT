import React from "react";

function Us(props) {
  console.log(props.lan);

  let lang = props.lan;

  if (lang = "us") {
    return (
      <>lang</>
    )
  }
  else {
    return (
      <>
        'en-GB'
      </>
    )
  }
}

console.log(Us); // returns [object Object]
console.log(Us.prototype.name); // returns us no lang or en-GB

export default Us;