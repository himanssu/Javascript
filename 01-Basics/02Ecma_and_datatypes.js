/*ECMAScript is like the rulebook for JavaScript, 
  making sure it works the same in all web browsers. 
  It sets the guidelines for how JavaScript should behave, 
  with updates adding new features and improvements to the language*/

/*DATATYPES
In JavaScript, there are several data types that can be used to store and manipulate data.
1) PRIMITIVE:- immutable (cannot be changed)
    Examples:
    Number: Represents numeric values, like 10 or 3.14.
    String: Represents text, like "Hello".
    Boolean: Represents true or false values, like true or false.
    Undefined: A variable that has been declared but not assigned a value.
    Null: Represents the intentional absence of any value.
    Symbol: A unique and immutable value, often used as object keys (introduced in ES6).
    BigInt: Represents integers larger than the Number type can hold used in trading 
2) NON-PRIMITIVE:- mutable (can be changed)
    Examples:
    Object: A collection of key-value pairs, like {name: "Alice", age: 25}.
    Array: An ordered list of values, like [1, 2, 3].
    Function: A block of code designed to perform a particular task, like function add(a, b) { return a + b; }.
*/ 
let age= 21
let name = "John"
console.log(typeof age)// output:- Number 
console.log(typeof name)// output:- String
console.log(typeof undefined)// output:- undefined
console.log(typeof null)// output:- object (its maybe the language error but theres no proper exxplanation according to me)
