// Array
var Arr = [];
var Num = [1, 2, 3, 4, 5, 6];
var Str = ["Hey", "Hii", "Hello"];
// Array Methods
// push Method
for (var i = 0; i < Num.length; i++) {
    Arr.push(Num[i]);
}
console.log(Arr);
for (var i = 0; i < Str.length; i++) {
    Arr.push(Str[i]);
}
console.log(Arr);
// pop Method
var Ans = Arr.pop();
console.log(Ans);
// sort Method
var val = Str.sort();
console.log(val);
// Splice Method
var ans = Num.splice(0, 2);
console.log(ans);
// toString Method
console.log(Arr.toString());
