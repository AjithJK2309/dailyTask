var tup :[Number,String][] = [[0,"ABCD"]];
// push Method in Tuple
console.log(tup);

var tup2 : [Number,String][] = [[2,"JK"],[3,"LM"],[4,"NO"],[5,"PQ"],[6,"RS"]];
for(let i=0;i<tup2.length;i++)
{    
    tup.push(tup2[i]);    
}
// console.log(tup2.push([7,"TU"]));
console.log(tup);

// pop in Tuple 
console.log(tup2.pop());
console.log(tup2);