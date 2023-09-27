// Array.sort will sort an array strings/chars in ascending order


// Array.sort sorts by ordering elements via conversion of each
// element into a UTF-16 equivalent. It then compares the UTF values
// For non-string/chars, the value is converted to a string, then
// converted to the appropriate UTF value, then compared as a UTF.

//To create a descending String sort:

function descendingSort(a,b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

//Function for sorting an array of numbers
let arr = [,1,67,3,6,89,421,7654,0,32,32,1,]
function numSort (arr) {
        arr.sort(a,b) {
            if (a > b) {
                return 1
            } else if (a < b) {
                return -1
            } else {
                return 0
            }
        }
    }

//arrow ascending fuction    
arr.sort((a,b) => {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0;
    }
    }
)

//ascending short-hand version
arr.sort((a,b) => a - b);




