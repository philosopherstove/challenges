/*
HackerRank
Making Anagrams
Easy (Easy)
---------------

Alice is taking a cryptography class and finding anagrams to be very useful.
We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string.
In other words, both strings must contain the same exact letters in the same exact frequency.
For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams.
Can you help her find this number?
Given two strings, 'a' and 'b', that may or may not be of the same length, determine the minimum number of character deletions required to make 'a' and 'b' anagrams.
Any characters can be deleted from either of the strings.
For example, if a = 'cde' and b = 'dcf', we can delete 'e' from string 'a' and 'f' from string 'b' so that both remaining strings are 'cd' and 'dc' which are anagrams.

Function Description:
return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

makeAnagram has the following parameter(s):
a: a string
b: a string

Input Format:
The first line contains a single string, 'a'.
The second line contains a single string, 'b'.

Output Format:
Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

Sample Input:
'cde'
'abc'
Sample Output:
4
Explanation:
We delete the following characters from our two strings to turn them into anagrams of each other:
Remove d and e from cde to get c.
Remove a and b from abc to get c.
We must delete 4 characters to make both strings anagrams, so we print 4 on a new line.
*/

let input = ['cde', 'abc'];

let solve = (input)=>{
    let a    = input[0];
    let b    = input[1];
    let objA = {};
    let objB = {};
    let cuts = 0;
    for(let i = 0; i < a.length; i++){
        let letter = a[i];
        if( objA.hasOwnProperty(letter) === false){
            objA[letter] = 1;
        }
        else{
            objA[letter]++;
        };
    };
    for(let i = 0; i < b.length; i++){
        let letter = b[i];
        if( objB.hasOwnProperty(letter) === false){
            objB[letter] = 1;
        }
        else{
            objB[letter]++;
        };
    };
    for(let x in objA){
        if( objB.hasOwnProperty(x) === false){
            let numOfExcluded = objA[x];
            cuts += numOfExcluded;
        };
        if( objB.hasOwnProperty(x)){
            let diff = objA[x] - objB[x];
            if( diff < 0){
                diff = -1 * diff;
            };
            cuts += diff;
        };
    };
    for(let x in objB){
        if( objA.hasOwnProperty(x) === false){
            let numOfExcluded = objB[x];
            cuts += numOfExcluded;
        };
    };
    return cuts;
};

console.log( solve(input) );
