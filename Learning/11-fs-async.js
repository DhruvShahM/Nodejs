const { readFile, writeFile, write } = require('fs')
const path=require('path');


// readfile with the check error correction and 
readFile(path.resolve(__dirname,'content','first.txt'),'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile(path.resolve(__dirname,'content','second.txt'),'utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile(path.resolve(__dirname,'content','result-async.txt'),`Here is the result : ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('successfully write the code');   
        })
    });
    console.log(result);

})