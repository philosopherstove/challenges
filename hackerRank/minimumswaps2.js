/*
HackerRank
Minimum Swaps 2
Medium (Easy)
---------------

You are given an unordered array consisting of consecutive integers [1, 2, 3, ..., n] without any duplicates.
You are allowed to swap any two elements.
You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array arr = [7,1,3,2,4,5,6] we perform the following steps:
i   arr                     swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
It took 5 swaps to sort the array.

Function Description:
Complete the function minimumSwaps in the editor below.
It must return an integer representing the minimum number of swaps to sort the array.

Input Format:
Array of space-separated integers.

Output Format:
Return the minimum number of swaps to sort the given array.

Sample Input:
4 3 1 2
Sample Output:
3
Explanation:
Given array arr: [4,3,1,2]
After swapping (0,2) we get arr: [1,3,4,2]
After swapping (1,2) we get arr: [1,4,3,2]
After swapping (1,3) we get arr: [1,2,3,4]
So, we need a minimum of 3 swaps to sort the array in ascending order.

Sample Input:
2 3 4 1 5
Sample Output:
3
Explanation:
Given array arr: [2,3,4,5,1]
After swapping (2,3) we get arr: [2,3,1,4,5]
After swapping (0,1) we get arr: [3,2,1,4,5]
After swapping (0,2) we get arr: [1,2,3,4,5]
So, we need a minimum of 3 swaps to sort the array in ascending order.

Sample Input:
1 3 5 2 4 6 7
Sample Output:
3
Explanation:
Given array arr: [1,3,5,2,4,6,7]
After swapping (1,3) we get arr: [1,2,5,3,4,6,7]
After swapping (2,3) we get arr: [1,2,3,5,4,6,7]
After swapping (3,4) we get arr: [1,2,3,4,5,6,7]
So, we need a minimum of 3 swaps to sort the array in ascending order.
*/

let input  = [7,1,3,2,4,5,6];
let input2 = [4,3,1,2];
let input3 = [2,3,4,1,5];
let input4 = [1,3,5,2,4,6,7];

let solve = (input)=>{
    let swaps = 0;
    for(let i = 0; i < input.length; i++){
        let a = input[i];
        if( a !== i+1){
            let indexWhereIItemIs    = input.indexOf(i+1, i);
            let b                    = input[indexWhereIItemIs];
            input[i]                 = b;
            input[indexWhereIItemIs] = a;
            swaps++;
        };
    };
    return swaps;
};

console.log( solve(input)  );
console.log( solve(input2) );
console.log( solve(input3) );
console.log( solve(input4) );
