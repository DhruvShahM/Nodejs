const http=require('http')
const {readFileSync}=require('fs');
const path=require('path');

const homePage=readFileSync(path.resolve(__dirname,'navbar-app','index.html'))
const homeStyle=readFileSync(path.resolve(__dirname,'navbar-app','styles.css'))
const homeImage=readFileSync(path.resolve(__dirname,'navbar-app','logo.svg'))
const homeLogic=readFileSync(path.resolve(__dirname,'navbar-app','browser-app.js'))



const server=http.createServer((req,res)=>{
    console.log('user hit the server');
    console.log(req.url);
    const url=req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage)
        res.end('<h2>hello</h2>');
    }
    // style
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homeStyle)
        res.end();    
    }
    // image/logo
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.write(homeImage)
        res.end();    
    }
    // logic
    else if(url==='/browser-app.js'){
            res.writeHead(200,{'content-type':'text/javascript'});
            res.write(homeLogic)
            res.end();    
        }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>page not found</h1>')
        res.end();    
    }
})

server.listen(3000);