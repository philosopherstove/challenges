/*
HackerRank
Sorting: Bubble Sort
Easy (Easy)
--------------------

Consider the following version of Bubble Sort:

for (int i = 0; i < n; i++) {
    for (int j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
        }
    }
}

Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above.
Once sorted, print the following three lines:

"Array is sorted in numSwaps swaps.", where 'numSwaps' is the number of swaps that took place.
"First Element: firstElement", where 'firstElement' is the first element in the sorted array.
"Last Element: lastElement", where 'lastElement' is the last element in the sorted array.

Hint: To complete this challenge, you must add a variable that keeps a running tally of all swaps that occur during execution.
For example, given a worst-case but small array to sort: a=[6,4,1] we go through the following steps:

swap    a
0       [6,4,1]
1       [4,6,1]
2       [4,1,6]
3       [1,4,6]

It took 3 swaps to sort the array. Output would be:
Array is sorted in 3 swaps.
First Element: 1
Last Element: 6

Function Description:
Complete the function countSwaps in the editor below. It should print the three lines required, then return.

countSwaps has the following parameter(s):
a: an array of integers

Input Format:
The first line contains an integer, 'n', the size of the array 'a'.
The second line contains 'n' space-separated integers 'a[i]'.

Output Format:
You must print the following three lines of output:

1) "Array is sorted in numSwaps swaps."", where 'numSwaps' is the number of swaps that took place.
2) "First Element: firstElement", where 'firstElement' is the first element in the sorted array.
3) "Last Element: lastElement", where 'lastElement' is the last element in the sorted array.

Sample Input:
[1,2,3]

Sample Output:
Array is sorted in 0 swaps.
First Element: 1
Last Element: 3

Explanation:
The array is already sorted, so 0 swaps take place and we print the necessary three lines of output shown above.


Sample Input:
[3,2,1]

Sample Output:
Array is sorted in 3 swaps.
First Element: 1
Last Element: 3

Explanation:
The array is not sorted, and its initial values are: {3,2,1}. The following 3 swaps take place:

1) {3,2,1} -> {2,3,1}
2) {2,3,1} -> {2,1,3}
3) {2,1,3} -> {1,2,3}

At this point the array is sorted and we print the necessary three lines of output shown above.
*/

let solve = (input)=>{
    let swaps = 0;
    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < input.length - 1; j++) {
            if (input[j] > input[j + 1]) {
                let a      = input[j];
                let b      = input[j+1];
                input[j]   = b;
                input[j+1] = a;
                swaps++;
            };
        };
    };
    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${input[0]}`);
    console.log(`Last Element: ${input[input.length-1]}`);
};

let input1 = [3,2,1]; // 1
let input2 = [6,4,1]; // 3

solve(input1);
solve(input2);
