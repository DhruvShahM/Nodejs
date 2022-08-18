var http=require('http')
var fs=require('fs')
const path=require('path');

http.createServer(function (req,res) {
    // const text=fs.readFileSync(path.resolve(__dirname,'content','big.txt'),'utf8')
    // res.end(text)

    const fileStream=fs.createReadStream(path.resolve(__dirname,'content','big.txt'),'utf8')
    fileStream.on('open',()=>{
      fileStream.pipe(res)
    })
    fileStream.on('error',()=>{
      res.end(err);
    })
}).listen(3000)