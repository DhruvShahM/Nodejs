const { readFile, writeFile, write } = require('fs')
const path=require('path');

//async file reading and writing
// readfile with the check error happened or not

console.log('start');
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
        //writefile with the check error happened or not
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

console.log('end');