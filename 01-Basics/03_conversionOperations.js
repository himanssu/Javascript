let score = "himanshu"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "himanshu"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
 //console.log(stringNumber);  output:- 33
// console.log(typeof stringNumber); output:- string


// *************************Operations************************************

let value = 3
let negValue = -value
// console.log(negValue);// output:- -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power
// console.log(2/3);
// console.log(2%3); //remainder

let str1 = "hello"
let str2 = " himanshu"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); //output:- 122 (kyuki jo chiz bracket m pehle ayegi usi k hisab se proyority milegi k kaise treat krna h)
// console.log(1 + 2 + "2"); // output:- 32 (kyuki isme pehle no. tha phir string to pehle no. add hogye)

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);// 1(conversion)
// console.log(+"");//0

let x = 100
++x;
console.log(x);