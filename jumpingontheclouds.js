/*
HackerRank
Easy
Jumping on the Clouds
---------------------

Emma is playing a new mobile game that starts with consecutively numbered clouds.
Some of the clouds are thunderheads and others are cumulus.
She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2.
She must avoid the thunderheads.
Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud.
It is always possible to win the game.

For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.
For example, c=[0,1,0,0,0,1,0] indexed 0 from 6.
The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5.
She could follow the following two paths:  0 -> 2 -> 4 -> 6  or  0 -> 2 -> 3 -> 4 -> 6.
The first path takes 3 jumps while the second takes 4.

Function Description:
Complete the jumpingOnClouds function in the editor below.
It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):
c: an array of binary integers

Input Format:
Space-separated binary integers describing clouds.

Output Format:
Print the minimum number of jumps needed to win the game.

Sample Input:
0 0 1 0 0 1 0
Sample Output:
4
Explanation:
Emma must avoid c[2] and c[5]. She can win the game with a minimum of 4 jumps.

Sample Input:
0 0 0 0 1 0
Sample Output:
3
Explanation 1:
The only thundercloud to avoid is c[4]. Emma can win the game in 3 jumps:

*/

let input  = [0,0,1,0,0,1,0];
let input2 = [0,0,0,0,1,0];
let input3 = [0,0,0,1,0,0];

let solve = (input)=>{
    let moves = 0;
    for(let i = 0; i < input.length;){
        moves++;
        let twoStep = i + 2;
        let cloudTwoStepsAhead = input[twoStep];
        if( cloudTwoStepsAhead === 1){
            i++;
        }
        else{
            i += 2;
        };
        if( i >= input.length - 1){
            return moves;
        };
    };
};

console.log( solve(input)  );
console.log( solve(input2) );
console.log( solve(input3) )
