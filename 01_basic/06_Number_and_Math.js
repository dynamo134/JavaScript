const score = 400
console.log(score);   //400

const balance = new Number(100)
console.log(balance);  //[Number : 400]

console.log(balance.toString().length);  //3
console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));   //123.8

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000  indian formate

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.ceil(-4.6));  //-4
console.log(Math.floor(4.9));
console.log(Math.floor(-4.2)); // -5
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  //[0-1)
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min)) + min)  // The maximum is exclusive and the minimum is inclusive
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // The maximum is inclusive and the minimum is inclusive