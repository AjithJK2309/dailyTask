// Enum Datatype
// Numeric Enum
// enum simple{
//     name,
//     age,
//     gender,
//     location
// }
// console.log(simple);
// console.log(simple.location);
// Assigning Value to Enum
// enum sample{
//     name=3,
//     age,
//     gender=7,
//     location
// }
// console.log(sample);
// enum PrintMedia {
//     Newsletter = getPrintMediaCode('newsletter'),
//     Magazine = Newsletter * 3,
//     Newspaper = 0,
//     Book,
// }
// function getPrintMediaCode(mediaName: string): number {
//     if (mediaName === 'newsletter') {
//         return 5;
//     }
// }
// console.log(PrintMedia.Newsletter);
// console.log(PrintMedia.Magazine); 
// String Enum
var VAL;
(function (VAL) {
    VAL["name"] = "Ajith";
    VAL["nationality"] = "Indian";
    VAL["city"] = "Chennai";
})(VAL || (VAL = {}));
function getCity(nationality) {
    if (nationality = 'Indian') {
        return "Welcome from " + VAL.city;
    }
    else {
        return "Unknown Location";
    }
}
var welcome = getCity(VAL.nationality);
console.log(welcome);
console.log(VAL['name']);
