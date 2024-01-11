//Dvide in Two categories based on the how data store and how to access


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')   //sy
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);

console.log(id === anotherId);  //False

const bigNumber = 3456543576654356754n
//const bigNumber = 3456543576654356754  it will not give accurate becz it is too large

console.log(bigNumber)
console.log(typeof(bigNumber))  //bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3          (    typeof()    )





/* *************************************Memory******************************************************* */

//Primitive (Stack) Non Primitive(Heap)