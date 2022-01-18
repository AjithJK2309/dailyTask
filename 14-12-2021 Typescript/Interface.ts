// Interface
interface objType {
    name : string,
    age : number,
    city : string,
    state : string,
    nationality : string
}

let Obj : objType ={
    name : 'Ajith',
    age : 21,
    city : 'chennai',
    state : 'Tamilnadu',
    nationality : 'India'
}
console.log(Obj);

// Function Interface
interface funcStructure{
    (a:string,b:number,...details:any):void
}
function sample(a,b,...details):void
{
    console.log('Hii '+a+" Your Age is "+b+" Your Adress is "+details.join(","));
}
let store:funcStructure=sample;
store('Ak',21,'50','Sample street','chennai','tamilnadu');

// Interface for Array
interface arrStructure{
    [index:number]:number
}
let Array1 : arrStructure = [1,2,3];
console.log(Array1);
console.log(Array1[0]);
console.log(Array1[2]);

interface arr2Structure{
    name:string
}
let Array2=new Array<arr2Structure>();
Array2["ind"]={name:"India"};
Array2["aus"]={name:"Australia"};
Array2["chi"]={name:"China"};
console.log(Array2);
console.log(Array2["ind"]);
console.log(Array2["chi"].name);

// Optional Property && Read only property && extending interface
interface optProp{
    name:string,
    age:number,
    greet? : string    
}
interface readProp extends optProp{
    readonly greet2 : string;
    addFunc:(name : string,age:number,greet?:string,greet2?:string)=>any
}
interface funcProp{
    (name : string,age : number,greet?:string,greet2?:string):void
}
const simple = ():any =>{
    let obj : readProp ={
        name : "Ajith",
        age : 21,
        greet : "Welcome",
        greet2 : "And Thanks",
        addFunc:(name : string,age:number,greet?:string,greet2?:string):void=> {
            console.log("Hi "+name+". Your Age is "+age+". We are "+greet+" "+greet2);
        }
        
    }
    let addFunc : funcProp = obj.addFunc;
        addFunc(obj.name,obj.age,obj.greet,obj.greet2);
}
simple();