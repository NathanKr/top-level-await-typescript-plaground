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


<h2>Points of interest</h2>
<ol>
<li><h4>the resulting dist/index.js</h4>
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
<li><h4>run node.js without package.json </h4>
<h5>js module format problem</h5>
in general dist directory can be used stand alone on production . However, if you take the code of dist/index.js to a clean direcotry outside of this project it will not work - and this is confusing. You will get an error

```
SyntaxError: await is only valid in async functions and the top level bodies of modules
```
<p>This is because node.js read package.json on runtime and "type":"module" means using module format of es module (esm). However, node will use its default module format - CommonJs (cjs) if package.json does not appear (check <a href='https://nodejs.org/api/packages.html#packagejson-and-file-extensions'>here</a>). And "top level await" feature does not appears in cjs</p>
<h5>js module format solution</h5>
The solution is to add package.json and then it will work</li>
</ol>


<h2>Reference</h2>
<a href='https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#top-level-await'>typescript offical documentation</a>
