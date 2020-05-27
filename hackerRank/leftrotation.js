/*
HackerRank
Left Rotation
Easy (Easy)
-------------

A left rotation operation on an array shifts each of the array's elements 1 unit to the left.
For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].
Given an array 'a' of integers and a number, 'd', perform 'd' left rotations on the array.
Return the updated array to be printed as a single line of space-separated integers.

Function Description:
Complete the function rotLeft in the editor below. It should return the resulting array of integers.

Input Format:
'a', array of integers
'd', the number of left rotations you must perform

Output Format:
An array of integers according to correct number of left rotations.

Sample Input:
([1 2 3 4 5], 4)

Sample Output:
5 1 2 3 4

Explanation:
When we perform d = 4 left rotations, the array undergoes the following sequence of changes:

[1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]

*/

let input = [1,2,3,4,5];

let solve = (a, d)=>{
    for(let i = 0; i < d; i++){
        let first = a.shift();
        a.push(first);
    };
    return a;
};
console.log( solve(input, 4) );
