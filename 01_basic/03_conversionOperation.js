let score = "23"    // "23abc"

console.log(typeof(score)) //String

let valueInNumber = Number(score)    //change string to number 

console.log(typeof(valueInNumber))  //number,   number
console.log(valueInNumber);//23,    NaN

// "23" => 33
//  "23abc" => NaN
//  null  => NaN
//true => 1

let isLoggedIn = true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


//  1 => true
//  ""  => false
//  "shaharyar" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)