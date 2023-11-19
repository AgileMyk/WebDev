/*
Write a function that merges two sorted arrays into a single one. 
The arrays only contain integers. 
Also, the final outcome must be sorted and not have any duplicate.
*/

function mergeArrays(a, b) {
    //combine passed arrays
      let c = a.concat(b);
    //sort passed arrays
      c = c.sort( (x,y) => x - y);
    //remove duplicate elements
      c.filter( function() {
        for (let i = 0; i < c.length; i++) {
            for (let j = 0; j < c.length; j++) {
              if (c[i] === c[j] && i != j) {
                c.splice(j, 1);
              }
            }
          }
      });
      return c;
    
    
    }
    