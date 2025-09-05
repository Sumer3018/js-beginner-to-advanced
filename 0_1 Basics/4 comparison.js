// console.log(2 > 1);
// console.log(2 >= 1)
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Avoid these conversions as it is not clean

// console.log(null > 0);      // Output: false
// console.log(null == 0);     // Output: false
// console.log(null >= 0);     // Output true
// This is because comparison( < or >) converts null to number and then compare so 0 > 0 -> false, 0 >= 0 -> true

// console.log(undefined == 0);  // Output: false
// console.log(undefined > 0);   // Output: false
// console.log(undefined < 0);   // Output: false
// console.log(undefined >= 0);  // Output: false

// === strict check also checks the datatype

// console.log("2" == 2);  // Output: true
// console.log("2" === 2); // Output: false





 

