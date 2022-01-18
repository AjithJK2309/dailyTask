// If condition
const ps2 = require("prompt-sync");
const inp = ps2();
let A1 : any = parseInt(inp("Enter the A val... "));
let A2  = inp("Enter the B val... ");
console.log(typeof(A1),typeof(A2));

if(typeof(A1) == 'number')
{
    console.log("A value is Number DataType");
}
else
{
    console.log("A value is Unknown DataType");
}

if(typeof(A2) == 'string')
{
    console.log("B value is String DataType");
}
else if(typeof(A2) == 'undefined')
{
    console.log("B value is undefined DataType");
}
else
{
    console.log("A value is Unknown DataType");
}