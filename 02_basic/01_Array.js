// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Thor", "Batman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);  //1

// Array methods

// myArr.push(6)  //add the value in array from back side
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  //shift from the front of the array   //9 0 1 2 3 4 5 
// myArr.shift()     //remove from the front //1 2 3 4 5

console.log(myArr.includes(9));  //false
console.log(myArr.indexOf(3));  //3  if not exixt theit will return -1

// const newArr = myArr.join()

// console.log(myArr);    //[0,1,2,3,4,5]
// console.log( newArr);   //0,1,2,3,4,5


// slice  -> [ ) 
//splice -> []  manupulate the original array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //[1,2]

console.log(myn1);
console.log("B ", myArr);//[0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  //[0,4,5]
console.log(myn2);

/* -----------------------------------------------------------------------------------------------------------  */

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) 

console.log(marvel_heros);  // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"] ]
console.log(marvel_heros[3][1]); //flash

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(2)  //provide the depth level  =>(infinity) to handle all level
console.log(real_another_array);

/* ---------------------------------------------------------------------------------------------------- */
//      Array.from(arrayLike, mapFn, thisArg)  Syntax  last both Argument are optional

console.log(Array.isArray("alam"))  //false
console.log(Array.from("alam"))  //form a array ['a' , ......]

// const obj = {last:"alam", first:"Shaharyar", age : 21}
// // console.log(Array.from( obj.key() ) ) // interesting

let score1 = 100
let score2 = 200
let score3 = "300"

console.log(Array.of(score1, score2, score3));