/*
Edabit
Sudoku Validation
Expert (Medium)
-----------------
Write a sudoku validator.
This function should return true if the 2-D array represents a valid sudoku and false otherwise.

To be a valid sudoku:
Each row must have the digits from 1 to 9 exactly once.
Each column must have the digits from 1 to 9 exactly once.
Each 3x3 box must have the digits from 1 to 9 exactly once.

Examples:
sudokuValidator([
  [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
]) ➞ true

sudokuValidator([
  [ 1, 1, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
]) ➞ false
*/

let input  = [ // false
    [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
    [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
    [ 4, 6, 5, 3, 7, 1, 2, 9, 8 ],
    [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
    [ 8, 9, 1, 7, 6, 3, 4, 2, 5 ],
    [ 2, 4, 6, 5, 9, 8, 7, 1, 3 ],
    [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
    [ 6, 2, 8, 9, 4, 5, 1, 3, 7 ],
    [ 5, 7, 3, 8, 1, 2, 9, 6, 4 ]
];
let input2 = [ // true
    [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
    [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
    [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
    [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
    [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
    [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
    [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
    [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
    [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
];
let input3 = [ // true
    [ 8, 2, 7, 1, 5, 4, 3, 9, 6 ],
    [ 9, 6, 5, 3, 2, 7, 1, 4, 8 ],
    [ 3, 4, 1, 6, 8, 9, 7, 5, 2 ],
    [ 5, 9, 3, 4, 6, 8, 2, 7, 1 ],
    [ 4, 7, 2, 5, 1, 3, 6, 8, 9 ],
    [ 6, 1, 8, 9, 7, 2, 4, 3, 5 ],
    [ 7, 8, 6, 2, 3, 5, 9, 1, 4 ],
    [ 1, 5, 4, 7, 9, 6, 8, 2, 3 ],
    [ 2, 3, 9, 8, 4, 1, 5, 6, 7 ]
];
let input4 = [ // false
    [ 8, 2, 7, 1, 5, 4, 3, 9, 6 ],
    [ 9, 6, 5, 3, 2, 7, 1, 4, 8 ],
    [ 3, 4, 1, 6, 8, 9, 7, 5, 2 ],
    [ 5, 9, 3, 4, 6, 8, 2, 7, 1 ],
    [ 4, 7, 2, 5, 1, 5, 6, 8, 9 ],
    [ 6, 1, 8, 9, 7, 2, 4, 3, 5 ],
    [ 7, 8, 6, 2, 3, 5, 9, 1, 4 ],
    [ 1, 5, 4, 7, 9, 6, 8, 2, 3 ],
    [ 2, 3, 9, 8, 4, 1, 5, 6, 7 ]
];
let input5 = [ // false
    [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
    [ 3, 3, 9, 2, 5, 6, 8, 4, 1 ],
    [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
    [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
    [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
    [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
    [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
    [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
    [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
];
let input6 = [ // true
    [ 5, 3, 4, 6, 7, 8, 9, 1, 2 ],
    [ 6, 7, 2, 1, 9, 5, 3, 4, 8 ],
    [ 1, 9, 8, 3, 4, 2, 5, 6, 7 ],
    [ 8, 5, 9, 7, 6, 1, 4, 2, 3 ],
    [ 4, 2, 6, 8, 5, 3, 7, 9, 1 ],
    [ 7, 1, 3, 9, 2, 4, 8, 5, 6 ],
    [ 9, 6, 1, 5, 3, 7, 2, 8, 4 ],
    [ 2, 8, 7, 4, 1, 9, 6, 3, 5 ],
    [ 3, 4, 5, 2, 8, 6, 1, 7, 9 ]
];
let input7 = [ // true
    [ 1, 5, 2, 4, 6, 9, 3, 7, 8 ],
    [ 7, 8, 9, 2, 1, 3, 4, 5, 6 ],
    [ 4, 3, 6, 5, 8, 7, 2, 9, 1 ],
    [ 6, 1, 3, 8, 7, 2, 5, 4, 9 ],
    [ 9, 7, 4, 1, 5, 6, 8, 2, 3 ],
    [ 8, 2, 5, 9, 3, 4, 1, 6, 7 ],
    [ 5, 6, 7, 3, 4, 8, 9, 1, 2 ],
    [ 2, 4, 8, 6, 9, 1, 7, 3, 5 ],
    [ 3, 9, 1, 7, 2, 5, 6, 8, 4 ]
];
let input8 = [ // false
    [ 2, 5, 1, 4, 6, 9, 3, 7, 8 ],
    [ 7, 8, 9, 2, 1, 3, 4, 5, 6 ],
    [ 4, 3, 6, 5, 8, 7, 2, 9, 1 ],
    [ 6, 1, 3, 8, 7, 2, 5, 4, 9 ],
    [ 9, 7, 4, 1, 5, 6, 8, 2, 3 ],
    [ 8, 2, 5, 9, 3, 4, 1, 6, 7 ],
    [ 5, 6, 7, 3, 4, 8, 9, 1, 2 ],
    [ 2, 4, 8, 6, 9, 1, 7, 3, 5 ],
    [ 3, 9, 1, 7, 2, 5, 6, 8, 4 ]
];
let input9 = [ // false
    [ 5, 3, 4, 6, 7, 8, 9, 1, 2 ],
    [ 6, 7, 2, 1, 9, 5, 3, 4, 8 ],
    [ 1, 9, 8, 3, 4, 2, 5, 6, 7 ],
    [ 8, 5, 9, 7, 6, 1, 4, 2, 3 ],
    [ 4, 2, 6, 8, 5, 3, 7, 9, 1 ],
    [ 7, 1, 3, 2, 9, 4, 8, 5, 6 ],
    [ 9, 6, 1, 5, 3, 7, 2, 8, 4 ],
    [ 2, 8, 7, 4, 1, 9, 6, 3, 5 ],
    [ 3, 4, 5, 2, 8, 6, 1, 7, 9 ]
];
let input10 = [ // false
    [ 1, 3, 4, 6, 7, 8, 9, 1, 2 ],
    [ 6, 7, 2, 1, 9, 5, 3, 4, 8 ],
    [ 5, 9, 8, 3, 4, 2, 5, 6, 7 ],
    [ 8, 5, 9, 7, 6, 1, 4, 2, 3 ],
    [ 4, 2, 6, 8, 5, 3, 7, 9, 1 ],
    [ 7, 1, 3, 9, 2, 4, 8, 5, 6 ],
    [ 9, 6, 1, 5, 3, 7, 2, 8, 4 ],
    [ 2, 8, 7, 4, 1, 9, 6, 3, 5 ],
    [ 3, 4, 5, 2, 8, 6, 1, 7, 9 ]
];

let solve = (input)=>{
    /* check columns */
    let columns = {};
    for(let i = 0; i < input.length; i++){
        let row = input[i];
        for(let r = 0; r < row.length; r++){
            let num = row[r].toString();
            if( columns.hasOwnProperty(r) === false){
                columns[r] = [num];
            }
            else{
                columns[r].push(num);
            };
        };
    };
    let checkColumns = true;
    Object.keys(columns).forEach((key)=>{
        let column = columns[key].slice();
            column.sort();
        for(let i = 0; i < column.length; i++){
            let num = Number(column[i]);
            if( num !== i+1){
                checkColumns = false;
                return;
            };
        };
    });
    if( checkColumns === false){
        return false;
    };
    /* check rows */
    for(let i = 0; i < input.length; i++){
        let row    = input[i].slice();
            row.sort();
        for(let r = 0; r < row.length; r++){
            let num = row[r];
            if( num !== r+1){
                return false;
            };
        };
    };
    let x        = 0;
    let y        = 0;
    let rowLimit = 3;
    /* check blocks */
    for(let i = 1; i <= 9; i++){
        let block = [
            input[y][x],   input[y][x+1],   input[y][x+2],
            input[y+1][x], input[y+1][x+1], input[y+1][x+2],
            input[y+2][x], input[y+2][x+1], input[y+2][x+2]
        ];
        block.sort();
        for(let b = 0; b < block.length; b++){
            let num = block[b];
            if( num !== b+1){
                return false;
            };
        };
        if( i % rowLimit === 0){
            y += 3;
            x = 0;
        }
        else{
            x += 3;
        };
    };
    return true;
};

console.log( solve(input)  ); // false
console.log( solve(input2) ); // true
console.log( solve(input3) ); // true
console.log( solve(input4) ); // false
console.log( solve(input5) ); // false
console.log( solve(input6) ); // true
console.log( solve(input7) ); // true
console.log( solve(input8) ); // false
console.log( solve(input9) ); // false
console.log( solve(input10)); // false
