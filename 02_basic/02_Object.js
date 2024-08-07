// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "shaharyar",
    "full name": "shaharyar alam",
    [mySym]: "mykey1",
    age: 18,
    location: "aligarh",
    email: "shaharyar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  //cannot access with dot 
// console.log(JsUser[mySym])

JsUser.email = "alam@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "alam@microsoft.com"
// console.log(JsUser);  //will not changed  

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());