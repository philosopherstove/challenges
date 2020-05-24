/*
HackerRank
Easy (Medium)
2D Array - DS
-------------

Given a 6 x 6 2D Array, arr:
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:
a b c
  d
e f g

There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values.
Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

For example, given the 2D array:
-9 -9 -9  1 1 1
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0

We calculate the following 16 hourglass values:
-63, -34, -9, 12,
-10, 0, 28, 23,
-27, -11, -2, 10,
9, 17, 25, 18

Our highest hourglass value is 28 from the hourglass:
0 4 3
  1
8 6 6

Function Description:
Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

hourglassSum has the following parameter(s):
arr: an array of integers

Input Format:
Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].

Output Format:
Print the largest (maximum) hourglass sum found in arr.

Sample Input:
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output:
19

The hourglass with the maximum sum (19) is:
2 4 4
  2
1 2 4
*/

let input = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];

let solve = (input)=>{
    let hourglasses = [];
    let a = 0;
    let b = 0;
    let rowLimit = 4;
    for(let i = 1; i <= 16; i++){
        /* base pattern */
        let sum =
              input[a][b]    + input[a][b+1]    + input[a][b+2]
                             + input[a+1][b+1]
            + input[a+2][b]  + input[a+2][b+1]  + input[a+2][b+2]
        ;
        /* collect */
        hourglasses.push(sum);
        /* increment control/row switching */
        if( i % rowLimit === 0){
            a++;
            b = 0;
        }
        else{
            b++;
        };
        /* end of loop, give result */
        if( i === 16){
            let result = Math.max.apply(null, hourglasses);
            return result;
        };
    };
};
console.log( solve(input) );
