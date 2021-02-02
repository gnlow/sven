<h1 align="center">
  Sven
  <br/>
  
  <img src="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=fff"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=fff"/>
  <img src="https://img.shields.io/badge/Deno-000000?style=for-the-badge&logo=deno&logoColor=fff"/>
</h1>
<p align="center">
Svelte + Vercel + Deno template loader
</p>  

## How to use
### Install
```sh
deno install --allow-run --allow-read --allow-write -n sven https://denopkg.com/svelte-sven/sven@{VERSION}/mod.ts
```
#### Check installation
```sh
sven --version
```
### Folder structure
```yaml
- api
  - yourApi.ts
- src
  - index.ts
  - Router.svelte
  - MainPage.svelte
- sven.yaml

- build (auto-generated)
```
<details><summary>Example codes</summary>

```ts
// index.ts
import "svelte"
import Router from "./Router.svelte"

const app = new Router({
  target: document.body,
})

export default app

// HMR
if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
}
```
```svelte
<!-- Router.svelte -->
<script>
  import Router from "svelte-spa-router"
  import MainPage from "./MainPage.svelte"
  
  const routes = {
    "/": MainPage,
  }
</script>

<Router {routes} />
```
```svelte
<!-- MainPage.svelte -->
<script lang="ts">
  let name = "world"
</script>

<svelte:head>
  <title>Sven App</title>
</svelte:head>

<div>
  Hello, {name}!
</div>
```
</details>

### Config
```yaml
# sven.yaml
# (WIP)
```
### Init
```sh
sven init ./
```
Load template.  
Need administrator permission to make symlink.  
This will create `build` folder.  
### Build
```sh
sven build ./
```
Build project once.  
Sven uses Snowpack as builder.  
### Dev
```sh
sven dev ./
```
Open dev server.  
This will run `vercel dev` and `snowpack dev`.  
You should run `vercel` before run this.