/*
HackerRank
Easy
Alternating Characters
----------------------

You are given a string containing characters 'A' and 'B' only.
Your task is to change it into a string such that there are no matching adjacent characters.
To do this, you are allowed to delete zero or more characters in the string.
Your task is to find the minimum number of required deletions.
For example, given the string s = 'AABAAB', remove an 'A' at positions 0 and 3 to make s = 'ABAB' in 2 deletions.

Function Description:
return an integer representing the minimum number of deletions to make the alternating string.

Input Format:
a string

Output Format:
For each query, print the minimum number of deletions required on a new line.

Sample Input"
AAAA
BBBBB
ABABABAB
BABABA
AAABBB

Sample Output:
3
4
0
0
4
*/

let input  = 'AAAA';     // 3
let input2 = 'BBBBB';    // 4
let input3 = 'ABABABAB'; // 0
let input4 = 'BABABA';   // 0
let input5 = 'AAABBB';   // 4

let solve = (input)=>{
    let last = null;
    let cuts = 0;
    for(let i = 0; i < input.length; i++){
        let letter = input[i];
        if( letter === last){
            cuts++;
        }
        last = letter;
    };
    return cuts;
};

console.log( solve(input)  );
console.log( solve(input2) );
console.log( solve(input3) );
console.log( solve(input4) );
console.log( solve(input5) );
