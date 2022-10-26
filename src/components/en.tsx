// this is working on the html lang attribute I might need 2 seo files and old and a new

import React from "react"

function testNum(a) {
  let result;
  // let result = 'en-1';
  if (a > 2) {
    result = 'en-aa';
  } else {
    result = 'en-cc';
  }
  return result;
}

const En = testNum(2)
// ok so now get something for this from the page?

// these appear on first build just before localhost
console.log('🦄');
console.log(En);

export default En;