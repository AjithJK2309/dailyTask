// Class
class demoClass{
    name:string;
    age:number;
    mobile:number;

    constructor(name:string,age:number,mobile:number)
    {
        this.name=name;
        this.age=age;
        this.mobile=mobile;
    }
    display()
    {
        console.log("Hi "+this.name+" Your age "+this.age+" Your Mobile Number is "+this.mobile)
    }
}
let classObj=new demoClass("Ajith",21,860830);
classObj.display();

// Class with Inheritance and Interface
interface classStruc1{
    name:string;
    age:number;
}
interface classStruc2 extends classStruc1{
    mobile:number;
    city:string;
    display:(name:string,age:number,mobile:number,city:string)=>void
}
class Emp {
    name:string;
    age:number;
    constructor(name:string,age:number)
    {
        this.name=name;
        this.age=age;
    }
}
class Emp2  extends Emp implements classStruc2{
    mobile: number;
    city:string;
    constructor(name:string,age:number,mobile:number,city:string)
    {
        super(name,age);
        this.mobile=mobile;
        this.city=city;
    }
    display()
    {
        console.log("Name: "+this.name+" Age: "+this.age+" Mobile: "+this.mobile+" City: "+this.city);
    }
}
let objEmp=new Emp2("AK",21,860830,"Chennai");
objEmp.display();

// Method Overriding
class Cricket{
    playerName : string;
    constructor(name:string){
        this.playerName=name;
    }
    display(Name:string):void
    {
        console.log("Welcome to Cricket Association...");
        console.log("This match won by "+this.playerName+" "+Name);
    }
}
class Batsman extends Cricket{
    batsmanName : string;
    constructor(playerName:string,batsmanName:string){
        super(playerName);
        this.batsmanName=batsmanName;
    }
    display(batsmanName:string = "AK"):void
    {
        console.log("Welcome to Batsman Association...");
        super.display(this.batsmanName);
    }
}
class Bowler extends Batsman{
    bowlerName:string;
    constructor(playerName : string,batsmanName:string,bowlerName:string)
    {
        super(playerName,batsmanName);
        this.bowlerName=bowlerName;
    }
    display(): void {
        console.log("Welcome to Bowler Association...");
        super.display(this.bowlerName);
    }
}
let objCricket2 = new Batsman("Captain","AK");
let objCricket = new Bowler("Captain","AK","bowler");
objCricket2.display();
objCricket.display();