<h2>Introduction</h2>
top level await in typescript was introduced in version 3.8. using this feature you dont need to wrap awaited code with function and async

<h2>Motivation</h2>
experiment with top level await in typescript.

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

<h2>Usage</h2>
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

<h2>Reference</h2>
<a href='https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#top-level-await'>typescript offical documentation</a>

<h2>Points of interest</h2>
<ul>
<li>
the resulting dist/index.js is the following and it is working inside this project

```js
console.log('index.ts is running');
const pauseMs = (ms) => new Promise(res => setTimeout(res, ms));
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
```
</li>
<li>if you take the code of dist/index.js to a clean direcotry outside of this project it will not work - not clear why<li>
</ul>