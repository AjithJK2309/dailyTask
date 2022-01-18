// Number Data Type
// let first:number = 123; // number 
// let second: number = 0x37CF;  // hexadecimal
// let third:number=0o377 ;      // octal
// let fourth: number = 0b111001;// binary  
// console.log("Normal Number "+first);  // 123 
// console.log("HexaDecimal Number "+second); // 14287
// console.log("Octal Number "+third);  // 255
// console.log("Binary Number "+fourth); // 57
// Number Methods
var myNum = 250;
// Exponential Notation Method
console.log(" Exponential Notation Method " + myNum.toExponential());
console.log(" Exponential Notation Method " + myNum.toExponential(3));
// toFixed Method
var myNumber = 10.8788;
console.log("toFixed Method " + myNumber.toFixed());
console.log("toFixed Method " + myNumber.toFixed(2));
console.log("toFixed Method " + myNumber.toFixed(3));
// toLocale String Method
console.log("toLocale String Method " + myNumber.toLocaleString());
console.log("toLocale String Method " + myNumber.toLocaleString("de-DE"));
console.log("toLocale String Method " + myNumber.toLocaleString("ar-EG"));
// toPrecision Method
console.log("toPrecision Method " + myNumber.toPrecision());
console.log("toPrecision Method " + myNumber.toPrecision(1));
console.log("toPrecision Method " + myNumber.toPrecision(3));
// toString Method
console.log("toString Method " + myNumber.toString());
console.log("toString Method " + myNumber.toString(2));
console.log("toString Method " + myNumber.toString(3));
// valueOf Method 
console.log("valueOf Method " + myNumber.valueOf());
var NUMBER = new Number("55540");
console.log("valueOf Method " + NUMBER.valueOf());
