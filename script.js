// TYPE CONVERSION

let val;

// Convert number to string
val = String(555);
// expression below will overright the expression above
val = String(4 + 4);

// Boolean to string
val = String(true);

// Date to a String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4, 5, 6, 7, 8]);

//convert number toString() same as line 3
val = (5).toString();
val = (true).toString();


// String to Number
val = Number('5');

// Boolean to numebr

// logs 1
val = Number(true);
// Logs 0
val = Number(false);
// Logs 0
val = Number(null);

// Logs NaN
val = Number('Hello');
val = Number([1, 2, 3]);


// Parse Int
// Will only log 100 as an integer 
val = parseInt('100.30');

// ParseFloat will log 100.3
val = parseFloat('100.30');


// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));

// TYPE COERSION - will not acknowledge the data type
const val1 = String(5);
const val2 = 6;
// Converts expression to number 56
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);