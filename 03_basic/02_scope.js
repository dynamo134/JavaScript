var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);  //10
    
}



console.log(a); //300
// console.log(b); //undefined
console.log(c);// 300


function one(){
    const username = "Alam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website); //undefined

    two()

}

one()

if (true) {
    const username = "alam"
    if (username === "alam") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);  //undefined
}

//console.log(username);   //undefined


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //6

function addone(num){
    return num + 1
}



addTwo(5)  //ERROR  , cant access before initialization   if function like expression
const addTwo = function(num){
    return num + 2
}