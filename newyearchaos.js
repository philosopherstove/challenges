/*
HackerRank
Interview Preparation Kit
Arrays
New Year Chaos
--------------

It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride!
There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue.
Initial positions increment by 1 from 1 at the front of the line to 'n' at the back.
Any person in the queue can bribe the person directly in front of them to swap positions.
If two people swap positions, they still wear the same sticker denoting their original places in line.
One person can bribe at most two others.
For example, if n = 8 and Person 5 bribes Person 4, the queue will look like this: 1,2,3,5,4,6,7,8.
Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

Function Description:
Complete the function minimumBribes in the editor below.
It must print an integer representing the minimum number of bribes necessary, or "Too chaotic" if the line configuration is not possible.

Input Format:
An array of integers

Output Format:
Integer denoting the minimum number of bribes needed to get the queue into its final state.
Print Too chaotic if the state is invalid, i.e. it requires a person to have bribed more than 2 people.

Sample Input/Output:
2 1 5 3 4        ->  3
2 5 1 3 4        ->  Too chaotic
5 1 2 3 7 8 6 4  ->  Too chaotic
1 2 5 3 7 8 6 4  ->  7
1 2 5 3 4 7 8 6  ->  4
*/

let input  = [2,1,5,3,4];
let input2 = [2,5,1,3,4];
let input3 = [5,1,2,3,7,8,6,4];
let input4 = [1,2,5,3,7,8,6,4];
let input5 = [1,2,5,3,4,7,8,6];

let solve = (input)=>{
    let moves       = 0;
    let moversTally = {};
    for(let i = 0; i < input.length; i++){
        let a = input[i];
        let b = input[i+1];
        let c = input[i+2];
        let d = input[i+3];
        if( a > b){
            input[i]   = b;
            input[i+1] = a;
            moves++;
            if( moversTally.hasOwnProperty(a) === false){
                moversTally[a] = 0;
            };
            moversTally[a]++;
            if(moversTally[a] === 3){
                return "Too chaotic";
            };
        };
        if( c > d){
            input[i+2] = d;
            input[i+3] = c;
            moves++;
            if( moversTally.hasOwnProperty(c) === false){
                moversTally[c] = 0;
            };
            moversTally[c]++;
            if(moversTally[c] === 3){
                return "Too chaotic";
            };
        };
        if( i === input.length - 1){
            for(let ii = input.length - 1; ii > -1; ii--){
                let a = input[ii-3];
                let b = input[ii-2];
                let c = input[ii-1];
                let d = input[ii];
                if( a > b){
                    input[ii-3] = b;
                    input[ii-2] = a;
                    moves++;
                    if( moversTally.hasOwnProperty(a) === false){
                        moversTally[a] = 0;
                    };
                    moversTally[a]++;
                    if(moversTally[a] === 3){
                        return "Too chaotic";
                    };
                };
                if( c > d){
                    input[ii-1] = d;
                    input[ii]   = c;
                    moves++;
                    if( moversTally.hasOwnProperty(c) === false){
                        moversTally[c] = 0;
                    };
                    moversTally[c]++;
                    if(moversTally[c] === 3){
                        return "Too chaotic";
                    };
                };
                if( ii === 0){
                    return moves;
                };
            };
        };
    };
};

console.log( solve(input) );  // 3
console.log( solve(input2) ); // Too chaotic
console.log( solve(input3) ); // Too chaotic
console.log( solve(input4) ); // 7
console.log( solve(input5) ); // 4
