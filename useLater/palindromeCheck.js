/*
A palindrome string is a string that looks unchanged if reversed. 
The code below checks if a given string is a palindrome or not. Use 
the charAt() method on the string and complete the function.
*/

//convert an iterable to an array
//make a second iterable -- a reverse of perviously converted array
//'dis-array' both with join ('')
//compare the two results

let one = 'racecar'
function palCheck(itrbl) {
    if (Array.from(itrbl).join('') == Array.from(itrbl).reverse().join('')) {
        return true;
    }
        return false;
}

//more compact

function palCheck(itrbl) {
    return itrbl == Array.from(itrbl).reverse().join("");
}

function palCheck(itrbl) {
    return itrbl == itrbl.split("").reverse().join("");
}