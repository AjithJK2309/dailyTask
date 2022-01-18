var Obj = {
    name: 'Ajith',
    age: 21,
    city: 'chennai',
    state: 'Tamilnadu',
    nationality: 'India'
};
console.log(Obj);
function sample(a, b) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    console.log('Hii ' + a + " Your Age is " + b + " Your Adress is " + details.join(","));
}
var store = sample;
store('Ak', 21, '50', 'Sample street', 'chennai', 'tamilnadu');
var Array1 = [1, 2, 3];
console.log(Array1);
console.log(Array1[0]);
console.log(Array1[2]);
var Array2 = new Array();
Array2["ind"] = { name: "India" };
Array2["aus"] = { name: "Australia" };
Array2["chi"] = { name: "China" };
console.log(Array2);
console.log(Array2["ind"]);
console.log(Array2["chi"].name);
var simple = function () {
    var obj = {
        name: "Ajith",
        age: 21,
        greet: "Welcome",
        greet2: "And Thanks",
        addFunc: function (name, age, greet, greet2) {
            console.log("Hi " + name + ". Your Age is " + age + ". We are " + greet + " " + greet2);
        }
    };
    var addFunc = obj.addFunc;
    addFunc(obj.name, obj.age, obj.greet, obj.greet2);
};
simple();
