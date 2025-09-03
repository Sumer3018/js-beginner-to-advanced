let score = "33"
let score1 = "33abc"
let score2 = null
// console.log(typeof score);

let valueInNumber = Number(score) // for type casting use capital first letter
let valueInNumber1 = Number(score1) // for this we can see the value 33abc is not a number so when after typeconversion it will give us NaN (Not only Number) as it won't be able to convert the mixed string into number

let valueInNumber2 = Number(score2) // In this the value stored in score2 is null and when we will try to convert it by typecasting we will get 0 as answer as it won't be able to convert it to number

// console.log(typeof valueInNumber);
// console.log(typeof valueInNumber1);
// console.log(typeof valueInNumber2);
// console.log(valueInNumber1); // NaN
// console.log(valueInNumber2); // 0

// "33" easily converts to 33
// "33abc" not gets converted and gives NaN
// true will give 1 and false will give 0

let isLoggedIn = 1
let isLoggedIn1 = ""
let isLoggedIn2 = "Sumer Singh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)

// console.log(booleanIsLoggedIn) // gives true as 1
// console.log(booleanIsLoggedIn1)// gives false as empty string
// console.log(booleanIsLoggedIn2)// gives true as string had value

let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);


