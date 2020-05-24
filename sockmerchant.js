/*
HackerRank
Easy
Sock Merchant
-------------

John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are n = 7 socks with colors ar = [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2.
There are three odd socks left, one of each color. The number of pairs is 2.

Function Description:
Complete the sockMerchant function in the editor below.
It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):
ar: the colors of each sock

Input Format:
Space-separated integers describing the colors ar[i] of the socks in the pile.

Output Format:
Return the total number of matching pairs of socks that John can sell.

Sample Input:
10 20 20 10 10 30 50 10 20

Sample Output:
3
*/

let input = [10, 20, 20, 10, 10, 30, 50, 10, 20];

/* Preferred Solution */
let createSockTally = (input)=>{
    return new Promise((resolve)=>{
        let obj = {};
        for(let i = 0; i < input.length; i++){
            let sock = input[i];
            if( obj.hasOwnProperty(sock) === false){
                obj[sock] = 0;
            }
            obj[sock]++;
            if( i === input.length - 1){
                resolve(obj);
            };
        };
    });
};

let determineNumberOfPairs = (sockTally)=>{
    return new Promise((resolve)=>{
        let pairs = 0;
        for(let i = 0; i < Object.keys(sockTally).length; i++){
            let key           = Object.keys(sockTally)[i];
            let numberOfSocks = sockTally[key];
            let numberOfPairs = Math.floor(numberOfSocks / 2);
            pairs += numberOfPairs;
            if( i === Object.keys(sockTally).length - 1){
                resolve(pairs);
            };
        };
    });
};

let solve = async(input)=>{
    let sockTally     = await createSockTally(input);
    let numberOfPairs = await determineNumberOfPairs(sockTally);
    console.log(`input: ${input}`);
    console.log(`output: ${numberOfPairs}`);
};
solve(input);




/* Solution to pass screener */
function sockMerchant(input) {

    let createSockTally = (input)=>{
        let obj = {};
        for(let i = 0; i < input.length; i++){
            let sock = input[i];
            if( obj.hasOwnProperty(sock) === false){
                obj[sock] = 0;
            }
            obj[sock]++;
            if( i === input.length - 1){
                return obj;
            };
        };
    };

    let determineNumberOfPairs = (sockTally)=>{
        let pairs = 0;
        for(let i = 0; i < Object.keys(sockTally).length; i++){
            let key           = Object.keys(sockTally)[i];
            let numberOfSocks = sockTally[key];
            let numberOfPairs = Math.floor(numberOfSocks / 2);
            pairs += numberOfPairs;
            if( i === Object.keys(sockTally).length - 1){
                return pairs;
            };
        };
    };

    return determineNumberOfPairs(createSockTally(input));
};
console.log('pass screener:', sockMerchant(input));
