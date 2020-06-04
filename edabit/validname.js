/*
Edabit
Valid Name
Expert (Easy)
-------------

For this exercise, keep in mind the following definitions:
A term is either an initials or word.
initials = 1 character
words = 2+ characters (no dots allowed)

A valid name is a name written in one of the following ways:
H. Wells
H. G. Wells
Herbert G. Wells
Herbert George Wells

The following names are invalid:
Herbert or Wells (single names not allowed)
H Wells or H. G Wells (initials must end with dot)
h. Wells or H. wells or h. g. Wells (incorrect capitalization)
H. George Wells (middle name expanded, while first still left as initial)
H. G. W. (last name is not a word)
Herb. G. Wells (dot only allowed after initial, not word)

Rules:
Both initials and words must be capitalized.
Initials must end with a dot.
A name must be either 2 or 3 terms long.
If the name is 3 words long, you can expand the first and middle name or expand the first name only. You cannot keep the first name as an initial and expand the middle name only.
The last name must be a word (not an initial).

Your task is to write a function that determines whether a name is valid or not. Return true if the name is valid, false otherwise.

Examples
validName("H. Wells") ➞ true

validName("H. G. Wells") ➞ true

validName("Herbert G. Wells") ➞ true

validName("Herbert") ➞ false
// Must be 2 or 3 words

validName("h. Wells") ➞ false
// Incorrect capitalization

validName("H Wells") ➞ false
// Missing dot after initial

validName("H. George Wells") ➞ false
// Cannot have: initial first name + word middle name

validName("H. George W.") ➞ false
// Last name cannot be initial

validName("Herb. George Wells") ➞ false
// Words cannot end with a dot (only initials can)
*/

let solve = (input)=>{
    let splits = input.split(" ");
    // checks against all
    for(let i = 0; i < splits.length; i++){
        let term = splits[i];
        if( term[0] !== term[0].toUpperCase()){ // not upper case
            return false;
        }
        else
        if( term.includes(".") &&
            term.length > 2){                   // word has dot
            return false;
        }
        else
        if( term.length === 1){                 // initial no dot
            return false;
        };
    };
    // specific checks
    if( splits.length < 2 ||
        splits.length > 3){                     // single term or more than 3
        return false;
    }
    else
    if( splits[splits.length-1].includes(".")){ // dot in last(assume initial)
        return false;
    }
    else
    if( splits[0].includes(".") === true &&     // 3 terms and only first term initial
        splits[1].includes(".") === false &&
        splits.length > 2){
        return false;
    };
    return true;
};


let i1 = "H. Wells";           // true
let i2 = "H. G. Wells";        // true
let i3 = "Herbert G. Wells";   // true
let i4 = "Herbert";            // false
let i5 = "h. Wells";           // false
let i6 = "H Wells";            // false
let i7 = "H. George Wells";    // false
let i8 = "H. George W."        // false
let i9 = "Herb. George Wells"; // false

console.log( solve(i1) );
console.log( solve(i2) );
console.log( solve(i3) );
console.log( solve(i4) );
console.log( solve(i5) );
console.log( solve(i6) );
console.log( solve(i7) );
console.log( solve(i8) );
console.log( solve(i9) );
