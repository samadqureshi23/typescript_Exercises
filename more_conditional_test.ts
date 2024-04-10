// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

import test from "node:test";

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// test 1
console.log("Equality test with strings: ", "Apple" === "Apple");

// test 2
console.log("Equality test with strings: ", ("Apple" as string) != "orange");

// test3
console.log("lower case function test: ", "hello" .toLowerCase() === "hello");

// test4
console.log("Equality test with numbers: ", 26 === 26);

// test5
console.log("greater than test: ", 10 > 5);

// test6
console.log("greater than and equal to test: ",  10 >= 10)

// test7
console.log("less than test: ", 5 <= 10 );

// test8
console.log("And operator test: ", 5=== 5 && 10 > 5); 

console.log("or operator test: ", 5=== 5 || false);

// test9
const fruits :string[] = ["Apple", "Orange", "Banana", "Mango"];

console.log("Array test: ", fruits.includes("Mango"));

// test10
console.log("Array test: ", !fruits.includes("Pineapple"));






