const {writeFileSync}=require('fs')
const path=require('path');

for (let index = 0; index < 10000; index++) {
    writeFileSync(path.resolve(__dirname,'content','big.txt'),`Hello world : ${index}\n`,{flag:'a'})
}