/*
given array X, isolate non-NaN (or NaN) values
*/

let data = [11, null, NaN, 'Hello', 24];
//for loop ternary
let count = 0;
for (let i = 0; i < data.length; i++) {
    isNaN(data[i]) ? NaN : count++;
}

//for loop with count
let count = 0;
for (datum of data) {
    if (!isNaN(datum)) {
        count++;
    };
}
console.log(count);

//forEach
data.forEach(x => isNaN(x) ? isNaN : count++);
console.log(count);

//filter arrow
data.filter( x => !isNaN(x)).length