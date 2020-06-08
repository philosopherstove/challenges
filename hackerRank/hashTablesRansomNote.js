/*
HackerRank
Hash Tables: Ransom Note
Easy (Easy)
------------------------

Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting.
He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note.
The words in his note are case-sensitive and he must use only whole words available in the magazine.
He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print 'No'.
For example, the note is "Attack at dawn".
The magazine contains only "attack at dawn".
The magazine has all the right words, but there's a case mismatch. The answer is 'No'.

Function Description:
Complete the checkMagazine function in the editor below.
It must print 'Yes' if the note can be formed using the magazine, or "No".

checkMagazine has the following parameters:
magazine: an array of strings, each a word in the magazine
note: an array of strings, each a word in the ransom note

Input Format:
The first line contains 'm' space-separated strings, each magazine[i].
The second line contains 'n' space-separated strings, each note[i].

Output Format:
Print "Yes" if he can use the magazine to create an untraceable replica of his ransom note. Otherwise, print "No".

Sample Input:
give me one grand today night
give one grand today

Sample Output:
Yes

Sample Input:
two times three is not four
two times two is four

Sample Output:
No

Explanation:
'two' only occurs once in the magazine.

Sample Input:
ive got a lovely bunch of coconuts
ive got some coconuts

Sample Output:
No

Explanation:
Harold's magazine is missing the word "some".
*/

let solve = (magazine, note)=>{;
    for(let i = 0; i < note.length; i++){
        let word = note[i];
        if( magazine.includes(word)){
            magazine.splice(magazine.indexOf(word), 1);
        }
        else{
            console.log("No");
            break;
        };
        if( i === note.length-1){
            console.log("Yes");
        };
    };
};

solve(
    ['give', 'me', 'one', 'grand', 'today', 'night'],
    ['give', 'one', 'grand', 'today']
);
// yes

solve(
    ['two', 'times', 'three', 'is','not','four'],
    ['two', 'times', 'two', 'is', 'four']
);
// no

solve(
    ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"],
    ["ive", "got", "some", "coconuts"]
);
// no
