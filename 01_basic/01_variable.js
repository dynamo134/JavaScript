const accountId = 1234
let accountEmail = "shaharyar@gmail.com"  //solved problem of No Scope
var accountPassword = "1234"  //NO Scope Problem 
accountcity = "Aligarh"
let accountState;   //Not Assign any Value
// accountId=12345    //cannt change const variable   //Not Allowed

/*
    prefer to use let instead of var
*/

console.log(accountId);
accountEmail = "shaharyaramu@gmail.com"
accountcity = "Noida"

console.table([accountId,accountEmail,accountPassword,accountcity,accountState]); 