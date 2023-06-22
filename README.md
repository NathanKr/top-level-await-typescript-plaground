<h2>Motivation</h2>
Use top level await

<h2>Setup</h2>
<ol>
<li>using simple tsc is not working , so i am using rollup and @rollup/plugin-typescript + tslib</li>
<li>another change is using in rollup.config.js

```
 compilerOptions: {'target' : 'esnext'}
```

</li>
<li>add to package.json

```
  "type": "module",
```
</li>
<li>The following is added in index.js to mark it as module (with import this is not required)

```ts
export {}
```
</li>
<li>make sure you have typescript installed with ver >= 3.8. you can verify via

```
 tsc -v
```
<li>
</ol>

<h2>Invokation</h2>
compile in one terminal using 
```
npm run build
```
run from another  
```
npm run build
```

<h2>Code</h2>

```ts
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
```