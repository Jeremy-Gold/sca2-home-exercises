// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  let output = 0;
  if(!obj) return true;
  for (const key in obj) {
    if(!obj[key]) return true;
  }
  return false;
}

const testObj = {
  a: "yes",
  b: "yes",
  c: "dflkajdf",
  d: 0,
}

console.log(hasFalsyValue(testObj));