

console.log("2" > 1)//true
console.log("02" > 1)//true
console.log(null > 0)//false 
console.log(null == 0)//false
console.log(null >= 0)  //convert null to 0 //true

console.log(undefined > 0)//false 
console.log(undefined == 0)//false

/*
the reseason is that equality check == and comparision work  differently
comparision convert null to a number treating it as 0
thats why null >= 0 is true
*/

console.log(undefined >= 0)  //false
 
//      ===    check both value and data type 

console.log("2" === 2) //false

console.log(true === 1) //false
