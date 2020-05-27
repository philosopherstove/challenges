/*
HackerRank
Sherlock and the Valid String
Medium (Hard)
-----------------------------

Sherlock considers a string to be valid if all characters of the string appear the same number of times.
It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times.
Given a string 's', determine if it is valid.
If so, return YES, otherwise return NO.

For example, if s='abc', it is a valid string because frequencies are {a:1, b:1, c:1}.
So is s='abcc' because we can remove one 'c' and have 1 of each character in the remaining string.
If s='abccc' however, the string is not valid as we can only remove 1 occurrence of 'c'.
That would leave character frequencies of {a:1, b:1, c:2}.

Input Format:
A single string

Output Format:
Return YES if string is valid, otherwise, print NO.

Sample Input:
'aabbcd'

Sample Output:
NO

Explanation:
Given s='aabbcd', we would need to remove two characters, both 'c' and 'd' -> 'aabb' or 'a' and 'b' ->'abcd'  abcd, to make it valid.
We are limited to removing only one character, so 's' is invalid.

Sample Input:
'aabbccddeefghi'

Sample Output:
NO

Explanation:
Frequency counts for the letters are as follows:
{'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 2, 'f': 1, 'g': 1, 'h': 1, 'i': 1}
There are two ways to make the valid string:
Remove 4 characters with a frequency of 1:{fghi}.
Remove 5 characters of frequency 2:{abcde}.
Neither of these is an option.

Sample Input:
abcdefghhgfedecba

Sample Output:
YES

Explanation:
All characters occur twice except for 'e' which occurs 3 times.
We can delete one instance of 'e' to have a valid string.
*/

let input  = 'abc';               // YES
let input2 = 'abcc';              // YES
let input3 = 'abccc';             // NO
let input4 = 'aabbcd';            // NO
let input5 = 'aabbccddeefghi';    // NO
let input6 = 'abcdefghhgfedecba'; // YES a2 b2 c2 d2  E3  f2 g2 h2
let input7 = 'abbccdd';           // YES
let input8 = 'abbccddeee';        // NO A1  b2 c2 d2  E3
let input9 =   'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'; // YES


let solve = (input)=>{
    let result   = "YES";
    let tallyObj = {};
    let ruleObj  = {};
    for(let i = 0; i < input.length; i++){
        let letter = input[i];
        if( tallyObj.hasOwnProperty(letter) === false){
            tallyObj[letter] = 1;
        }
        else{
            tallyObj[letter]++;
        };
    };
    Object.keys(tallyObj).forEach((key, i)=>{
        let tallyValue = tallyObj[key];
        if( ruleObj.hasOwnProperty(tallyValue) === false){
            ruleObj[tallyValue] = 1;
        }
        else{
            ruleObj[tallyValue]++;
        };
        if( Object.keys(ruleObj).length > 2){ // too many different values
            result = "NO";
            return;
        }
        else
        if( Object.keys(ruleObj).length > 1){
            let tallyAKey   = Object.keys(ruleObj)[0];
            let tallyBKey   = Object.keys(ruleObj)[1];
            let tallyACount = ruleObj[tallyAKey];
            let tallyBCount = ruleObj[tallyBKey];
            if( tallyACount > 1
            &&  tallyBCount > 1){ // would have to cut too many times from different values
                result = "NO";
                return;
            };
            let diff = Number(tallyAKey) - Number(tallyBKey);
            if( diff < 0){
                diff = -1 * diff;
            };
            if( diff > 1                                               // difference in tallyValues greater than 1
            &&  !( (Number(tallyAKey) === 1 && tallyACount === 1)      // excluding cases where tallyValue and tallyValueCount = 1
                || (Number(tallyBKey) === 1 && tallyBCount === 1) ) ){
                result = "NO";
                return;
            };
        };
    });
    return result;
};

console.log( solve(input) );  // YES
console.log( solve(input2) ); // YES
console.log( solve(input3) ); // NO
console.log( solve(input4) ); // NO
console.log( solve(input5) ); // NO
console.log( solve(input6) ); // YES
console.log( solve(input7) ); // YES
console.log( solve(input8) ); // NO
console.log( solve(input9) ); // YES
