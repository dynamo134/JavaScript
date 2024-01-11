const name = "Shaharyar"
const repoCount = 50

console.log(name.length);  //9

// console.log(name + repoCount + " Value");   Outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //new way

const gameName = new String('Shaharyar')  //new way of  String declaration

// console.log(gameName[0]);  //S
// console.log(gameName.__proto__);  //{}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); //a
// console.log(gameName.indexOf('y'));  //6

const newString = gameName.substring(0, 4)   //(includeIndex,excludeIndex)  Shah
//console.log(newString);

const anotherString = gameName.slice(-7, 4)  //ah   //Slice take negative value also
console.log(anotherString);

const newStringOne = "   alam    "
console.log(newStringOne);
console.log(newStringOne.trim());  //trimStart() ,trimEnd()   remove white spaces

const url = "https://shaharyar.com/shaharyar%20alam"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))  //False  tell it is present or not  

console.log(gameName.split('-'));   //Split the String in  array on the bases of Argument