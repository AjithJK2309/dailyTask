// Enum DataType
// Heterogeneous Enum
enum heter {
    name = 'Ajith',
    age = 21,
    city = 'chennai'
}
console.log(heter);

// // Reverse Mapping
enum reverse{
    name,age,city,state
}
console.log(reverse);
console.log(reverse.age);
console.log(reverse[3]);

// Union DataType
const ps = require("prompt-sync");
const promp = ps();
let a : (string | number) = promp("Enter the First Value... ");
let b : (string | number) = parseInt(promp("Enter the Second Value... "));
function typeInput(a : (string | number),b:(string|number))
{
    console.log(typeof(a));
    console.log(typeof(b));
}
typeInput(a,b);

// Any DataType
let data1:any = "Hello";
let data2:any[] = ["Every",3,"One",true,false];
console.log(data2[3]==true?data1+" "+data2[0]+" "+data2[2]:data2[1]);

// void DataType
function voidData(a : number,b:number):void{
    console.log("Hii i am void datatype...");
    let c:number=a+b
    console.log(c);
    // return c; it will throw a error
}
voidData(5,6);