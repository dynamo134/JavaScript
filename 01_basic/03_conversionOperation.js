let score = "23"    // "23abc"

console.log(typeof(score)) //String

let valueInNumber = Number(score)    //change string to number 

console.log(typeof(valueInNumber))  //number,   number
console.log(valueInNumber);//23,    NaN

// "23" => 23
//  "23abc" => NaN
//  null  => 0
// undefined =>NaN
//true => 1  false =>0



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


/* *****************************************Operation*************************************************** */

let str1 = "hello"
let str2 = "shaharyar"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2) //12
console.log("1" + 2 + 2) //122
/*
---->This expression is evaluated from left to right.
---->First, "1" + 2 is evaluated, which, as explained     above, results in the string "12".
---->Next, "12" + 2 is evaluated. Again, 2 is converted to a string and concatenated with "12", resulting in the string "122".
*/

/*
The behavior you're observing in these examples is due to type coercion in JavaScript, where the language automatically converts one type to another to make expressions work.
*/

console.log(1 + 2 + "2") //32
console.log(typeof (1 + 2 + "2"));//string