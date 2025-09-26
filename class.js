let a = "Hello World from JS"
    console.log(a.split(" ").reverse().join(" "));

   
let str = "banana";
let freq = {};

for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
}
console.log(freq);

let str1 = "listen";
let str2 = "silent";
console.log(str1.split('').sort().join('') === str2.split('').sort().join(''));

let sentence = "I am learning JavaScript";
let longest = sentence.split(" ").reduce((a, b) => b.length > a.length ? b : a);
console.log(longest);

let str = "programming";
let result = "";

for (let char of str) {
    if (!result.includes(char)) result += char;
}

console.log(result);
//array

let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = [];
for (let num of arr) {
    if (!unique.includes(num)) unique.push(num);
}
console.log(unique); 

