// const En = "en-GB";

function testNum(a) {
  let result;
  // let result = 'en-1';
  if (a > 2) {
    result = 'en-aa';
  } else {
    result = 'en-bb';
  }
  return result;
}

const En = testNum(2)

// these appear on first build just before loaclhost
console.log('🦄');
console.log(En);

export default En;