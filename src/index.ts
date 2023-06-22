console.log('index.ts is running');
const pauseMs = (ms : number) => new Promise(res => setTimeout(res, ms))

/*
This is not required as of ts 3.8 
async function callApi() {
     console.log('before pasue');
     await pauseMs(2000);
     console.log('after pasue');
 }
 callApi()
*/

console.log('before pasue');
await pauseMs(2000);
console.log('after pasue');

export {}