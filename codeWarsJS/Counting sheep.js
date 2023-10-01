/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

const arrayOfSheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

//for loop function

  function countSheeps(sheep) {
    let count = 0
    for (let i = 0; i < sheep.length; i++) {
      if (sheep[i]) count++;
    }
    return count;
  }

  //for each function 

  function countSheeps(sheep) {
    let count = 0;
    sheep.forEach( (aSheep) => {
      if (aSheep) count++;        
        })
    return count;
  }

  //filter methods

  function countSheeps(sheep) {
    return sheep.filter( (x) => x === true).length;
  }

  const countSheeps = (arrayOfSheep) => arrayOfSheep.filter((x) => x).length;

  //const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;