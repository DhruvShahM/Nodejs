const path=require('path');

// console.log(path.sep);

const filePath=path.join('/content','subfolder','test.txt')
// console.log(filePath);

//base fileName showing
const base=path.basename(filePath);
console.log(base);


//absolute path showing
const absolute=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);