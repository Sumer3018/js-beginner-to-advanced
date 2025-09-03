// Variables

const accountId = 12171 // value cannot be changed (fixed)
let accountEmail = "singsumer3018@gmail.com"
var accountPassword = "301826"
accountCity = "Jaipur"
let accountState;
/*
    Earlier javaScript didn't worked on scope rather it worked on blocks (whole code is a single block theory) and because of that value of a variable changed at one place used to change value at all the places where it was used.

    var is function scoped (or globally-scoped if declared outside a function. It does not respect block scope {....}). And because of redeclaration the same variable can be redeclared in the same scope which causes bugs and var declaration are hoisted to the tio of the scope, but not initialised. 
    
    Hoising code problem
    console.log(a); // undefined (not error)
    var a = 5;

    var scope problem
    if (true) {
    var x = 10;
    }
    console.log(x); // ✅ 10 (x leaks outside the block)

    
    For the above issue scope was introduced. Then let came and introduced scope. let is block scoped only exists inside {....}. let is also hoisted but kept in "temporal dead zone" until initialised and there's no redeclaration in let.

    Hoisting but in TDZ (temporal dead zone) code solution
    console.log(b); // ❌ ReferenceError
    let b = 5;

    let Scope code solution
    if (true) {
    let y = 20;
    }
    console.log(y); // ❌ ReferenceError (does not leak)

    Prefer not to use var
    because of issue in block scope and functional scope

*/


// accountID = 2 will give error not allowed
accountEmail = "singhaditi8290@gmail.com"
accountPassword = "2608"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // console.table lets us print multiple variables at the same time in the form of index -> value pair in a tabular format.
// Default data type is undefined

