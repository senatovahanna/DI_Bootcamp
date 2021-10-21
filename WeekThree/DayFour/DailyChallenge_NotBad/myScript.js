
var sentence = "Your code is not that bad!"; 
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

console.log(wordNot); // is 13
console.log(wordBad); // is 22

if (wordNot < wordBad) {
  console.log("Your code is good!");
} else {
  console.log("Your code is not that bad!");
}