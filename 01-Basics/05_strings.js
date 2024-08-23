const name = "Himanshu"
const age = 21
const repocount = 14

// console.log(name + repoCount + " Value"); // this is old we use the below one nowadays

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('Team-AEX-Demon')

// console.log(gameName[0]); // just like index output: T


// console.log(gameName.length);
// console.log(gameName.toUpperCase());  // will change all to uppercase just like in primitive it will not change original
console.log(gameName.charAt(2));// output: a
console.log(gameName.indexOf('T')); // will give index (T is at 0)

const newString = gameName.substring(0, 4) // will notinclude the value at the lastone
console.log(newString);

const anotherString = gameName.slice(-13, 4)// -13 will mean that it will start form the 13th letter from back output: eam
console.log(anotherString);

const newStringOne = "   himanshu    "
console.log(newStringOne);
console.log(newStringOne.trim());// trim will remove the unnecessary starting and ending spaces it can also be used as trim start or trimend as per need but trim does both

const url = "https://himanshu.com/himanshu%20yadav"

console.log(url.replace('%20', '-'))// will replace the first with second

console.log(url.includes('hehe'))// will return true if included else return false

console.log(gameName.split('-'));  // will split the string into array on the basis of any symbol or spaces this have two syntax this one is with seperator only 
console.log(gameName.split('-', 2));  // first one is seperater and the second is the limit like here we want 2 words