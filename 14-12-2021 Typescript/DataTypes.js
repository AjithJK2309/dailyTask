"use strict";
exports.__esModule = true;
exports.ps = void 0;
// Enum DataType
// Heterogeneous Enum
var heter;
(function (heter) {
    heter["name"] = "Ajith";
    heter[heter["age"] = 21] = "age";
    heter["city"] = "chennai";
})(heter || (heter = {}));
console.log(heter);
// // Reverse Mapping
var reverse;
(function (reverse) {
    reverse[reverse["name"] = 0] = "name";
    reverse[reverse["age"] = 1] = "age";
    reverse[reverse["city"] = 2] = "city";
    reverse[reverse["state"] = 3] = "state";
})(reverse || (reverse = {}));
console.log(reverse);
console.log(reverse.age);
console.log(reverse[3]);
// Union DataType
exports.ps = require("prompt-sync");
var promp = (0, exports.ps)();
var a = promp("Enter the First Value... ");
var b = parseInt(promp("Enter the Second Value... "));
function typeInput(a, b) {
    console.log(typeof (a));
    console.log(typeof (b));
}
typeInput(a, b);
// Any DataType
var data1 = "Hello";
var data2 = ["Every", 3, "One", true, false];
console.log(data2[3] == true ? data1 + " " + data2[0] + " " + data2[2] : data2[1]);
// void DataType
function voidData(a, b) {
    console.log("Hii i am void datatype...");
    var c = a + b;
    console.log(c);
    // return c; it will throw a error
}
voidData(5, 6);
