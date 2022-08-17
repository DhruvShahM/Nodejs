const { readFileSync, writeFileSync } = require('fs')
const path=require('path');

// Reading two files
const first = readFileSync(path.resolve(__dirname,'content','first.txt'),'utf8')
const second = readFileSync(path.resolve(__dirname,'content','second.txt'),'utf8')


// console.log(first,second);

//Write the file and if it does not exist then create and add the contenet
// writeFileSync(path.resolve(__dirname,'content','result-sync.txt'),`Here is the result : ${first}, ${second}`);


//append the result using the 'a' flag
writeFileSync(path.resolve(__dirname,'content','result-sync.txt'),`Here is the result : ${first}, ${second}`,{flag:'a'});

