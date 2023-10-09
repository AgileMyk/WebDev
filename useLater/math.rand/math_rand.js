/*
To get numbers of any range, we need to pass two arguments 
representing the minimum and maximum possible values to our 
function. You can see the function's code below with some 
examples of the generated values:

The below code snippet generates random numbers between two numbers:
*/

function getRandomInteger(min, max) {
    return (Math.random() * (max - min)) + min;
  }
//console.log(getRandomInteger(10, 20)); // 18.648405708980263


/*
The below code snippet generates random integers between two numbers:
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
//console.log(getRandomInteger(-5, 2)); // -3

/*
The below code snippet generates random integers inclusive of the two 
given maximum and minimum values:
*/

function getRandomInteger(min, max){
    return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
}


/*
To access an array element, we use its index. This can be represented 
as a random integer that is less than the array's length. We already 
managed to produce random integers, so let's apply our knowledge to the
 concept of an array:
*/

function getRandomElement(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
  }
