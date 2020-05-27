/*
HackerRank
Repeated String
Easy (Medium)
---------------

Lilah has a string of lowercase English letters that she repeated infinitely many times.
Given an integer, 'n', find and print the number of letter a's in the first 'n' letters of Lilah's infinite string.
For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac, the first 10 characters of her infinite string.
There are 4 occurrences of a in the substring.

Function Description:
Complete the repeatedString function in the editor below.
It should return an integer representing the number of occurrences of 'a' in the prefix of length 'n' in the infinitely repeating string.

repeatedString has the following parameter(s):
s: a string to repeat
n: the number of characters to consider

Input Format:
The first line contains a single string, 's'.
The second line contains an integer, 'n'.

Output Format:
Print a single integer denoting the number of letter a's in the first 'n' letters of the infinite string created by repeating 's' infinitely many times.

Sample Input:
aba
10
Sample Output:
7
Explanation:
The first n = 10 letters of the infinite string are 'abaabaabaa'. Because there are 7 a's, we print 7 on a new line.

Sample Input:
a
1000000000000
Sample Output:
1000000000000
Explanation:
Because all of the first n = 1000000000000 letters of the infinite string are 'a', we print 1000000000000 on a new line.
*/

let input  = "aba";
let input2 = "a";
let input3 = "abbabaa";

let solve = (string, range)=>{
    let aPerString = 0;
    let indices    = [];
    for(let i = 1; i <= string.length; i++){
        let letter = string[i-1];
        if( letter === "a"){
            aPerString++;
            indices.push(i);
        };
    };
    let repsNeeded     = Math.floor(range/string.length);
    let remainder      = range%string.length;
    let aFromRemainder = 0;
    for(let i = 0; i < indices.length; i++){
        let hit = indices[i];
        if( hit > remainder){
            break;
        };
        aFromRemainder++;
    };
    let result = (aPerString * repsNeeded) + aFromRemainder;
    return result;
};
console.log( solve(input,  10) )
console.log( solve(input2, 1000000000000) );
console.log( solve(input3, 24) );
console.log( solve(input3, 27) );




/************************************
The following solutions are failures.
Both fail on 1 trillion range test.
Kept for reference and understanding.
*************************************/
let solve2 = (string, range)=>{
    let aCount   = 0;
    let hitCount = 0;
    for(let i = 0; i < string.length; i++){
        let letter = string[i];
        if( letter === "a"){
            hitCount++;
        };
    };
    let stringsNeeded  = Math.ceil(range/string.length);
    let repeatedString = string.repeat(stringsNeeded);
    let choppedString  = repeatedString.substring(0, range);
    for(let i = 0; i < choppedString.length; i++){
        let letter = repeatedString[i];
        if( letter === "a"){
            aCount++;
        };
    };
    return aCount;
};
// console.log( solve2(input,  10) )
// console.log( solve2(input2, 1000000000000) );  // *** FAILS because JS can't handle string of 1 trillion length
// console.log( solve2(input3, 24) );
// console.log( solve2(input3, 27) );


let solve3 = (string, range)=>{
    let aCount  = 0;
    let indices = [];
    for(let i = 1; i <= string.length; i++){
        let letter = string[i-1];
        if( letter === "a"){
            indices.push(i);
        };
    };
    let indicesGroupsNeeded   = Math.ceil(range/indices[indices.length-1]);
    let indicesGroupsCombined = indices;
    for(let i = 1; i < indicesGroupsNeeded; i++){
        let nextIndicesSet = indices.map(x => x + string.length);
        indices = nextIndicesSet;
        indicesGroupsCombined = indicesGroupsCombined.concat(nextIndicesSet);
    };
    for(let i = 0; i < indicesGroupsCombined.length; i++){
        let index = indicesGroupsCombined[i];
        if( index > range){
            break;
        };
        aCount++;
    };
    return aCount;
};
// console.log( solve3(input,  10) )
// console.log( solve3(input2, 1000000000000) );   // *** FAILS due to timing out. Array of integers with length of 1 trillion.
// console.log( solve3(input3, 24) );
// console.log( solve3(input3, 27) );
