// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);  // 1,2,3,4,5
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

Maps

const map = new Map()  //declaration of map   order maintain rakhta  hai  map
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    console.log(key+ ":-"+ value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
myObject.game3 = "batman"
console.log(myObject)

for (const [key, value] of myObject) {   //object is not iterable like this
    console.log(key, ':-', value);  
}

//---------------------------------------Object iteration------------------------

for (const key in myObject) {   //using in
    console.log(key, myObject[key]);  
}

for (const [key, value] of Object.entries(myObject)) {  
    console.log(key, ':-', value);  
}