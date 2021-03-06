// Template from https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/app-template-svelte-typescript
/*
MIT License

Copyright (c) 2019 Fred K. Schott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { Config } from "./readConfig.ts"

export default (config: Config) => ({
    "snowpack.config.js": `
        const httpProxy = require('http-proxy')
        const proxy = httpProxy.createServer({ target: 'http://localhost:3000' })

        module.exports = {
            mount: {
                src: {url: '/dist'},
                public: {url: '/', static: true}
            },
            plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-typescript'],
            routes: [
                {
                    "src": "/api/.*",
                    "dest": (req, res) => proxy.web(req, res)
                }
            ],
        }
    `,
    "svelte.config.js": `
        const autoPreprocess = require('svelte-preprocess');

        module.exports = {
        preprocess: autoPreprocess({
            defaults: {
            script: 'typescript',
            },
        }),
        };
    `,
    "tsconfig.json": `
        {
            "include": ["src"],
            "compilerOptions": {
            "module": "esnext",
            "target": "esnext",
            "moduleResolution": "node",
            "jsx": "preserve",
            "baseUrl": "./",
            "noEmit": true,
            /* Additional Options */
            "strict": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true,
            "resolveJsonModule": true,
            "useDefineForClassFields": true,
            "allowSyntheticDefaultImports": true,
            "importsNotUsedAsValues": "error"
            }
        }
    `,
    ".gitignore": `node_modules`,
    "vercel.json": JSON.stringify({
        functions: {
            "api/**/*.[jt]s": {
                "runtime": "vercel-deno@0.7.6" 
            }
        },
        rewrites: [
            {
                source: "/(.*)",
                destination: "/index.html"
            }
        ],
        ...config.vercel,
    }),
    "package.json": `
        {
            "scripts": {
                "_dev": "snowpack dev",
                "build": "snowpack build"
            },
            "dependencies": {
                "svelte": "^3.31.2",
                "svelte-spa-router": "^3.1.0"
            },
            "devDependencies": {
                "@snowpack/plugin-svelte": "^3.5.0",
                "@snowpack/plugin-typescript": "^1.2.0",
                "snowpack": "^3.0.1",
                "svelte-preprocess": "^4.0.8",
                "typescript": "^4.0.0",
                "@types/snowpack-env": "^2.3.2",
                "http-proxy": "^1.18.1"
            }
        }
    `,
    "public/index.html": `
        <!doctype html>
        <html>
        <head>
            <meta charset='utf8'>
            <meta name='viewport' content='width=device-width'>
        
            <title>Svelte app</title>
            
            <link rel='stylesheet' href='bundle.css'>
        </head>
        
        <body>
            <script src='dist/index.js' type='module'></script>
        </body>
        </html>
    `
})