/* eslint-disable */

const firstItem = (arr, cb) => {
  cb (arr[0]);
};

const getLength = (arr, cb) => {
   cb(arr.length); 
};

const last = (arr, cb) => {
  cb (arr[arr.length-1]);
};

const sumNums = (x, y, cb) => {
  const num = x+y; cb(num)// sumNums adds two numbers (x, y) and passes the result to the callback.
};

const multiplyNums = (x, y, cb) => {
  cb(x*y)// multiplyNums multiplies two numbers and passes the result to the callback.
};

const contains = (item, list, cb) => {
  for (i=0;i<list.length;i++) {
    if (item === list[i]){
      cb(true)
    } else {
      cb(false)
    }
  }
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
};

/* eslint-enable */
module.exports = {
  firstItem,
  getLength,
  last,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates,
};
