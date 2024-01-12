// Immediately Invoked Function Expressions (IIFE)  
//Global scope ke pollution se problem hogi usse bachne ke liye use iife
//used for immediately execute the function (bind the function)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();      // ; used for stop the execution

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);   //arrow funtion
} )('Shaharyar');