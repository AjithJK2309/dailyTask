var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class
var demoClass = /** @class */ (function () {
    function demoClass(name, age, mobile) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;
    }
    demoClass.prototype.display = function () {
        console.log("Hi " + this.name + " Your age " + this.age + " Your Mobile Number is " + this.mobile);
    };
    return demoClass;
}());
var classObj = new demoClass("Ajith", 21, 860830);
classObj.display();
var Emp = /** @class */ (function () {
    function Emp(name, age) {
        this.name = name;
        this.age = age;
    }
    return Emp;
}());
var Emp2 = /** @class */ (function (_super) {
    __extends(Emp2, _super);
    function Emp2(name, age, mobile, city) {
        var _this = _super.call(this, name, age) || this;
        _this.mobile = mobile;
        _this.city = city;
        return _this;
    }
    Emp2.prototype.display = function () {
        console.log("Name: " + this.name + " Age: " + this.age + " Mobile: " + this.mobile + " City: " + this.city);
    };
    return Emp2;
}(Emp));
var objEmp = new Emp2("AK", 21, 860830, "Chennai");
objEmp.display();
// Method Overriding
var Cricket = /** @class */ (function () {
    function Cricket(name) {
        this.playerName = name;
    }
    Cricket.prototype.display = function (Name) {
        console.log("Welcome to Cricket Association...");
        console.log("This match won by " + this.playerName + " " + Name);
    };
    return Cricket;
}());
var Batsman = /** @class */ (function (_super) {
    __extends(Batsman, _super);
    function Batsman(playerName, batsmanName) {
        var _this = _super.call(this, playerName) || this;
        _this.batsmanName = batsmanName;
        return _this;
    }
    Batsman.prototype.display = function (batsmanName) {
        if (batsmanName === void 0) { batsmanName = "AK"; }
        console.log("Welcome to Batsman Association...");
        _super.prototype.display.call(this, this.batsmanName);
    };
    return Batsman;
}(Cricket));
var Bowler = /** @class */ (function (_super) {
    __extends(Bowler, _super);
    function Bowler(playerName, batsmanName, bowlerName) {
        var _this = _super.call(this, playerName, batsmanName) || this;
        _this.bowlerName = bowlerName;
        return _this;
    }
    Bowler.prototype.display = function () {
        console.log("Welcome to Bowler Association...");
        _super.prototype.display.call(this, this.bowlerName);
    };
    return Bowler;
}(Batsman));
var objCricket2 = new Batsman("Captain", "AK");
var objCricket = new Bowler("Captain", "AK", "bowler");
objCricket2.display();
objCricket.display();
