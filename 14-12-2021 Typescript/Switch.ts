let userInp = require("prompt-sync");
let getInput = userInp();
var Input : number = parseInt(getInput("Enter the value between 1-7... "));
var Input2 : any = Input<8 && Input>0?Input:console.log("Please Enter Value Between 1 to 7... ");

switch(Input2)
{
    case 1:
        console.log("I am Sunday");
        break;
    case 2:
        console.log("I am Monday");
        break;
    case 3:
        console.log("I am Tuesday");
        break;
    case 4:
        console.log("I am Wednesday");
        break;
    case 5:
        console.log("I am Thursday");
        break;
    case 6:
        console.log("I am Friday");
        break;
    case 7:
        console.log("I am Saturday"); 
        break;
    default:
        console.log("You Entered Wrong Value...");      
}