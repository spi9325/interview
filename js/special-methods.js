// for        map      method use gpt for interview questions

// also filter and reduce



const arr = ['a', 'b', 'c'];
const obj = arr.reduce((acc, cur, index) => {
  acc[index] = cur;
  return acc;
}, {});  // acc val is empty obj {}
console.log(obj);