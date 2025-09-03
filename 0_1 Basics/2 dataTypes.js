"use strict"; //this means use all JS code as newer version of JS ES6+. No need to write it as it is default nowadays but should know.

// alert(3 + 3) // we are using nodejs here not browser so this line will give error.

// Code readability should be high.

let name = "Ansh Singh"
let age = 18
let isLoggedIn = false
let state;
// let automatically assigns datatypes based on the values

// Primitive Datatypes
// number range till 2 to power 53
// bigint for very large numbers
// string 
// boolean
// null is standalone value as well as datatype and it means empty value and we can set a variable as null let age = null
//  undefined -> when value is not defined but variable is initialized
// symbol -> usually used with react to find uniqueness.

// Object
/* 
ways to use typeof
1. typeof variable/value
2. typeof(variable/value)
*/
// typeof null is object
console.log(typeof(null))
console.log(typeof undefined)
