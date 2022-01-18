// Functions

// Named Function
function namedFunction(a : number , b : number) : number
{
    return a+b;
}
console.log(namedFunction(10,100));

// Anonymous Function
let AnoFun = function(a:number,b:number) : number{return a+b};
console.log(AnoFun(223,232));

// Function Parameters
function funcParameter(a : string,b :number) : any
{
    console.log('Name is '+a+" "+'Age is '+b);
}
funcParameter('ajith',21);

// Optional Parameter
function optParameter(a : string,b :number,c?:string) : any
{
    console.log('Name is '+a+" "+'Age is '+b+" "+c);
}
optParameter('ajith',21);
optParameter('ajith',21,'Hello');

// default Parameter
function defParameter(a : string,b :number,c : string='hi') : any
{
    console.log('Name is '+a+" "+'Age is '+b+" "+c);
}
defParameter('ajith',21);
defParameter('ajith',21,'Hello');

// Arrow Functions
let arrFunc  =(a:number,b:number,c:string="Number",d?:string): any=> {
    console.log(a+b+c+d);
}
arrFunc(55,65);
arrFunc(55,65,"Two Numbers");
arrFunc(55,65,"Two Numbers","Added");

// Function overloading
const funcOver =()=>{
    function add(a:number,b:number):number;
    function add(a:string,b:string):string;
    function add(a:boolean,b:string):string;
    function add(a:any,b:any):any
    {
        console.log(a+b);
    }
    add(45,65);
    add('Ajith','Kumar');
    add(true,'Welcome');
}
funcOver();

// Rest Parameter
function restPara(first,name,...greet:string[]):any
{
    console.log(first,name,greet.join(' '));
}
restPara('Hello','Ajith','How','Are','You?');