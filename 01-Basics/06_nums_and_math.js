const score = 400 // it is automatically defined that this is no.
// console.log(score);

const balance = new Number(100)// this is another way of defining no. for confirm defining of something
// console.log(balance);

// console.log(balance.toString().length);// convert the no. into string and then give the length of it
// console.log(balance.toFixed(1));// this converts the no. to a string and rounds the string to a specific no. of decimals

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); precise value upto the given point

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // converts the no. into string and adds commas for better in the american standards
// console.log(hundreds.toLocaleString('en-IN'));// converts into indian standards

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4));// will give positive values only 
// console.log(Math.round(4.6));// round off value
// console.log(Math.ceil(4.2));// will give 5 means top value
// console.log(Math.floor(4.9));// will give  lower integer
// console.log(Math.min(4, 3, 6, 8));// minimun value
// console.log(Math.max(4, 3, 6, 8));// max value

console.log(Math.random());// will give randon value between 0 and 1 will also include 0 and one
console.log((Math.random()*10) + 1);// we will prefer this in various scenerios because if we got the value like 0.03 then after multiplying it will still return 0.3 so to avoid this we add 1
console.log(Math.floor(Math.random()*10) + 1);//will give floor value and give the value between 1 and 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// will give random values between the given numbers