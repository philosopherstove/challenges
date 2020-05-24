/*
Five friends (lets call them A, B, C, D, and E) are playing a game.
Each time someone scores a point, their lower case letter is inputted,
and an upper case letter is inputted when they lose a point.
Write a program to output each friend's score, sorted by highest to lowest.
Use these strings as inputs:

input 1: edabc
output 1: a:1 b:1 c:1 d:1 e:1

input 2: dbbaCEDdbAacCEAadcB
output 2: b:2 d:2 a:1 c:0 e:-2
*/

let input_1 = "edabc";
let input_2 = "dbbaCEDdbAacCEAadcB";

let createTallyObj = (input)=>{
    return new Promise((resolve)=>{
        let obj = {};
        for(let i = 0; i < input.length; i++){
            let letter = input[i];
            let lower  = letter.toLowerCase();
            if( obj.hasOwnProperty(lower) === false){ // if bucket doesn't exist, create it
                obj[lower] = 0;
            };
            if( letter === lower){
                obj[lower]++;
            }
            else{
                obj[lower]--;
            };
            if( i === input.length - 1){
                resolve(obj);
            };
        };
    });
};

let toTallyArray = async(tallyObj)=>{
    return new Promise((resolve)=>{
        let tallyArray = [];
        for(let i = 0; i < Object.keys(tallyObj).length; i++){
            let key    = Object.keys(tallyObj)[i];
            let value  = tallyObj[key];
            let packet = [key, value];
            tallyArray.push(packet);
            if( i === Object.keys(tallyObj).length - 1){
                resolve(tallyArray);
            };
        };
    });
};

let logDesiredOutput = (tallyArray, input)=>{
    let output = "";
    for(let i = 0; i < tallyArray.length; i++){
        let key   = tallyArray[i][0];
        let value = tallyArray[i][1];
        output += `${key}:${value} `;
        if( i === tallyArray.length - 1){
            console.log(`input: ${input}`);
            console.log(`result: ${output}`);
        };
    };
};

let solve = async(input)=>{
    let tallyObj   = await createTallyObj(input);
    let tallyArray = await toTallyArray(tallyObj);
    tallyArray.sort((a,b)=>{
        let comparison = 0;
        if( a[1] < b[1]){
            comparison = 1;
        }
        else
        if( a[1] > b[1]){
            comparison = -1;
            cnt--;
        }
        else
        if( a[1] === b[1]){
            if( a > b){
                comparison = 1;
            }
            else
            if( a < b){
                comparison = -1;
            };
        };
        return comparison;
    });
    logDesiredOutput(tallyArray, input);
};

solve(input_1);
solve(input_2);
