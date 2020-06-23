const assert = require("assert")

// Feel free to look things up online!

const reverse = function(str) {
  // TODO - write a function which reverses the string
  let arr = str.split("");
  let reverseArr = [];
  for(i = arr.length-1; i >= 0; i--){
    reverseArr.push(arr[i]);
  }
  let result = reverseArr.join("");
  console.log(result);
  return result;
}
reverse("abcd");

const factorial = function(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
  let result = 1;
  for(let i = 1; i <= num; i++){
    result *= i;
  }
  console.log(result);
  return result;
}
factorial(4);

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  const date = new Date();
  const year = date.getFullYear();
  const month = function(date){
    const monthNum = date.getMonth();
    if(monthNum == 0) return "January"
    if(monthNum == 1) return "February"
    if(monthNum == 2) return "March"
    if(monthNum == 3) return "April"
    if(monthNum == 4) return "May"
    if(monthNum == 5) return "June"
    if(monthNum == 6) return "July"
    if(monthNum == 7) return "August"
    if(monthNum == 8) return "September"
    if(monthNum == 9) return "October"
    if(monthNum == 10) return "November"
    if(monthNum == 11) return "December"
  }
  const day = date.getDate();
  const minute = function(date){
    if(date.getMinutes() < 10) return 0 + date.getMinutes.toString;
    return date.getMinutes();
  }
  const hour = date.getHours();
  const findSuffix = function(num){
    const lastDigit = +(num.toString().slice(-1))
    if(lastDigit == 1) return "st"
    if(lastDigit == 2) return "nd"
    if(lastDigit == 3) return "rd"
    return "th"
  }
  const findTimeOfDay = function(hour){
    if(hour < 5) return "night"
    if(5 <= hour && hour < 12) return "morning"
    if(12 <= hour && hour < 18) return "afternoon"
    if(18 <= hour && hour < 21) return "evening"
    if(21 <= hour) return "night"
  }
  const output = (`Today's date is ${month(date)} ${day + findSuffix(day)}, ${year}. It is ${hour % 12}:${minute(date)} in the ${findTimeOfDay(hour)}.`);
  console.log(output);
  return output;
}
announceDate();

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  const toMove = str.slice(-num);
  const leaveAsIs = str.slice(0, str.length-num);
  result = toMove + leaveAsIs;
  console.log(result);
  return result;
}
shiftRight("Hello", 3);

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  let arr = str.split(" ");
  console.log(arr);
  return arr;
}
tokenize("Hi, my name is Jeremy.")

const uniqueOnes = function(ary) {
  // TODO - write a function which returns the inputted array without duplicate elements
  let unique = [];
  for(let e of ary){
    if(!unique.includes(e)){
      unique.push(e);
    }
  }
  console.log(unique);
  return unique;
}
uniqueOnes([1, 2, 1, 1, 0, 3, 2]);

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if(arr1.length != arr2.length) {
    console.log("unequal lengths")
    return -1;
  }
  let result = [];
  for(let i = 0; i < arr1.length; i++){
    result.push([arr1[i], arr2[i]])
  }
  console.log(result);
  return result;
}
zip([0, 1, 2, 3], ["a", "b", "c", "d", "e"]);
zip([0, 1, 2, 3],["a", "b", "c","d"]);

const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
  let result1 = [];
  let result2 = [];
  for(let miniArr of arr){
    result2.push(miniArr.pop());
    result1.push(miniArr.pop());
  }
  const output = [result1, result2]
  console.log(output);
  return output;
}
unzip([ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'd' ] ]);

// Write tests here:

assert(1 < 2)
assert(1 + 2 == 3)
assert([2, 3][0] === 2)
// assert(reverse("3df") === "fd3")
