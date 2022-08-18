const EventEmitter=require('events');

const customEmitter=new EventEmitter();

//listening event of the callback events
customEmitter.on('response',()=>{
  console.log(`data received`);
});

//listening event with parameters
customEmitter.on('response',(name,id)=>{
  console.log(`data received user ${name} with id ${id}`);
});

//listening event of the callback events
customEmitter.on('response',()=>{
  console.log(`some other logic here`);
});

//event pass with parameters
customEmitter.emit('response','dhruv',23);
