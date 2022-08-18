const { readFile,writeFile } = require('fs').promises;
const path = require('path');
const  util=require('util');
const readFilePromise=util.promisify(readFile);
const writeFilePromise=util.promisify(writeFile);


// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       else {
//         resolve(data);
//       }
//     })
//   })
// }

// getText(path.resolve(__dirname, 'content', 'first.txt')).
//   then(result => console.log(result)).
//   catch(err => console.log(err));

//   getText(path.resolve(__dirname, 'content', 'second.txt')).
//   then(result => console.log(result)).
//   catch(err => console.log(err));



const start=async()=>{
  try {
    //Read the file using path
    // const first=await getText(path.resolve(__dirname, 'content', 'first.txt'));
    // const second=await getText(path.resolve(__dirname, 'content', 'second.txt'));

    //Read the file using the native(utils) options
    // const first=await readFilePromise(path.resolve(__dirname, 'content', 'first.txt'),'utf8');
    // const second=await readFilePromise(path.resolve(__dirname, 'content', 'second.txt'),'utf8');

    //Read the file without writing promise behind 
    const first=await readFile(path.resolve(__dirname, 'content', 'first.txt'),'utf8');
    const second=await readFile(path.resolve(__dirname, 'content', 'second.txt'),'utf8');

    await writeFilePromise(path.resolve(__dirname, 'content', 'mind-grenade.txt'),`THIS IS AWESOME: ${first}, ${second} `)
    console.log(first,second);
  } catch (error) {
   console.log(error); 
  }
}

start();