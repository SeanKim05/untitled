function range(start, end) {
  let startVal = start || 0;

  if (end === undefined) {
    return function getEnd(end) {
      return getRange(startVal, end);
    };
  } else {
    let endVal = end || 0;
    return getRange(startVal, endVal);
  }

  function getRange(start, end) {
    let arr = [];

    for (let i = start; i <= end; i++) {
      arr.push(i);
    }

    return arr;
  }
}

console.log(range(3, 8)); //[3,4,5,6,7,8]

var start3 = range(3);
console.log(start3(8)); //[3,4,5,6,7,8]
