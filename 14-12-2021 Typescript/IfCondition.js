// If condition
var ps2 = require("prompt-sync");
var inp = ps2();
var A1 = parseInt(inp("Enter the A val... "));
var A2 = inp("Enter the B val... ");
console.log(typeof (A1), typeof (A2));
if (typeof (A1) == 'number') {
    console.log("A value is Number DataType");
}
else {
    console.log("A value is Unknown DataType");
}
if (typeof (A2) == 'string') {
    console.log("B value is String DataType");
}
else if (typeof (A2) == 'undefined') {
    console.log("B value is undefined DataType");
}
else {
    console.log("A value is Unknown DataType");
}
