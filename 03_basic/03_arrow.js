const user = {
    username: "alam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage() //alam , welcome to website
user.username = "sam"
user.welcomeMessage()//sam ,welcome to website

console.log(this);  //{}

function chai(){
    let username = "alam"
    console.log(this.username);  //undefined   we are inside the function
}

chai()

const chai = function () {
    let username = "hitesh"
    console.log(this.username);  ////undefined   we are inside the function

}

const chai =  () => {
    let username = "hitesh"
    console.log(this);     //{ }  this keyword not use in arrow function
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) =>  num1 + num2  //implicit return 

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


const add = (a,b,c) => {
    return a+b+c;
}
console.log(add(1,2,3));  //6