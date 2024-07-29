const accountId = 1234   //cannot change the value of accountId just becz of const variable
// accountId=12345    //cannt change const variable   //Not Allowed

var accountPassword = "1234"  //NO Scope Problem,  koi scope nhi hota h var ka

let accountEmail = "shaharyar@gmail.com"  //solved problem of No Scope
 
accountcity = "Aligarh"
let accountState;   //Not Assign any Value (undefined)


/*
    prefer to use let instead of var
*/

accountEmail = "shaharyaramu@gmail.com"
accountcity = "Noida"

console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);
//[1234,shaharyaramu@gmail.com,1234,Noida,undefined]