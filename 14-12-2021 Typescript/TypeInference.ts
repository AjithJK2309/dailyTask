// TypeInference
let A = 10;
console.log(typeof(A)+A);

let obj = {name : "Ajith",age:21,state: "TamilNadu"};
console.log(typeof(obj)+" "+obj);

let Arr = [1,"ak","AK",2,3,4,"Ok"];
console.log(typeof(Arr)," ",Arr);

// TypeAssertion
let data3 : unknown = "I am String";
console.log(typeof(data3), data3);
let data4 : any = 555;
console.log(typeof(data4), data4);
let data5 = <number>data4;
console.log(typeof(data5), data5);
let data6 = <string>data3;
console.log(typeof(data6), data6);

interface objInterface{
    name : string,
    age : any,
    bool : boolean
}
let obj2 = <objInterface>{
    name : "Ajith",age : "21",bool : false
}
let data7= obj2.age as number;
console.log(typeof(data7),data7);