const {createReadStream}=require('fs');
const path=require('path');


// default 64kb
// const stream=createReadStream(path.resolve(__dirname,'content','big.txt'));

// highWaterMark - control size
const stream = createReadStream (path.resolve(__dirname,'content','big.txt'), { highWaterMark: 90000,encoding:'utf8' })

// last buffer - remainder
// const stream = createReadStream (path.resolve(__dirname,'content','big.txt'), { encoding : 'utf8' })

//error happened
// const stream = createReadStream (path.resolve(__dirname,'/content','big.txt'), { highWaterMark: 90000,encoding:'utf8' })

stream.on('data',(result)=>{
  console.log(`${result} bytes of data`);
})

// error handling
stream.on('error',(err)=>{
  console.log(err); 
})