// String Methods
let str=new String("Hello World");
console.log(str);

// charAt  Method
console.log(str.charAt(6));

// Concat Method
console.log(str.concat("AK"));

// indexOf Method
console.log(str.indexOf("l"));
console.log(str.indexOf("l",3));
console.log(str.indexOf("l",5));

// replace Method
const regex = new RegExp(/o/gi);
console.log(str.replace(regex,"ak"));

// split Method
let newStr = new String("Hello,Every,One")
console.log(newStr.split(",",1));

// toUppercase Method
console.log(newStr.toLocaleUpperCase());

// toLowerCase Method
console.log(newStr.toLocaleLowerCase());


// Boolean Datatype
let isOK : Boolean = false;
if(isOK)
{
    console.log("OK");
}
else if(!isOK)
{
    console.log("NO");
}