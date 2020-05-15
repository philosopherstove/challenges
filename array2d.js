let input = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];
console.log(input);

let solve = (input)=>{
    let hourglasses = [];
    let a = 0;
    let b = 0;
    let rowLimit = 4;
    for(let i = 1; i <= 16; i++){
        console.log('i:', i, 'a:', a, 'b:', b);

        /* base pattern */
        let sum =
              input[a][b]    + input[a][b+1]    + input[a][b+2]
                             + input[a+1][b+1]
            + input[a+2][b]  + input[a+2][b+1]  + input[a+2][b+2]
        ;

        /* collect */
        hourglasses.push(sum);

        /* increment control/row switching */
        if(i % rowLimit === 0){
            a++;
            b = 0;
        }
        else{
            b++;
        };

        /* end of loop, give result */
        if(i === 16){
            console.log('hourglasses', hourglasses);
            console.log("highest value", Math.max.apply(Math, hourglasses));
            let result = Math.max.apply(null, hourglasses);
            return result;
        };
    };
};
console.log( solve(input) );




/*
TOP LEFT SIMPLE
00 01 02
   11
20 21 22

NEXT HOURGLASS
01 02 03
   12
21 22 23

BOTTOM LEFT
30 31 32
   41
50 51 52

LAST
33 34 35
   44
53 54 55
*/
