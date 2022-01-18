// Basics of Variables
// Variable Declaration using let
var num11 = 1;
function letDeclaration() {
    var num2 = 2;
    if (num2 > num11) {
        var num3 = 3;
        num3++;
    }
    while (num11 < num2) {
        var num4 = 4;
        num1++;
    }
    console.log(num11); //OK
    console.log(num2); //OK 
    // console.log(num3); //Compiler Error: Cannot find name 'num3'
    // console.log(num4); //Compiler Error: Cannot find name 'num4'
}
letDeclaration();
// Variable declaration using var
var num1 = 1;
function varDeclaration() {
    var num2 = 2;
    if (num2 > num1) {
        var num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        var num4 = 4;
        num1++;
    }
    console.log(num1); //2
    console.log(num2); //2 
    console.log(num3); //4
    console.log(num4); //4
}
varDeclaration();
var num = 5; // Compiler Error: Cannot redeclared block-scoped variable 'num'
var Num = 6; // Compiler Error: Cannot redeclared block-scoped variable 'Num'
var NUM = 7; // Compiler Error: Cannot redeclared block-scoped variable 'NUM'
var NuM = 8; // Compiler Error: Cannot redeclared block-scoped variable 'NuM'
num = 9;
console.log(num, Num, NUM, NuM);
// var num : number = 10;
// console.log(num);
// var num : number = 11;
// console.log(num);
// Variable Declaration using const
var obj = {
    name: "Ajith",
    Age: "21",
    Gender: "male"
};
console.log(obj);
obj.Age = "22";
console.log(obj);
