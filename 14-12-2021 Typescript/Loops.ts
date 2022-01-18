// Types of for loop

// Array Value
let arrayVal : (number | string)[] = ['Ajith',21,'Chennai'];
let arrayVal2 : string[] = ['Name','Age','City'];

// for loop
if(arrayVal.length == arrayVal2.length)
{
    for(let i=0;i<arrayVal2.length;i++)
    {
        console.log(arrayVal2[i]+" "+arrayVal[i]);
    }
}

// for of loop
let str : string = 'Hello World';
for(var char of arrayVal2)
{
    console.log(char);
}
for(var char of str) // use tsc --target es6 Loops.ts command. this method need a es5 or es6
{
    console.log(char);
}

// for in loop
for(var index in arrayVal2)
{
    console.log(index);
    console.log(arrayVal2[index]);
}

// while && do while
// while loop
let i:number =0;
while(i<arrayVal.length)
{
    console.log(arrayVal[i]);
    i++;
}

// do while loop
let j:number =0;
do
{
    console.log(arrayVal2[j]);
    j++;
}
while(j<arrayVal2.length);