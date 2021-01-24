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
export default {
    "snowpack.config.js": `
        module.exports = {
            mount: {
                public: {url: '/', static: true},
                src: {url: '/dist'},
            },
            plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-typescript'],
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
    ".gitignore": `
        node_modules
    `
}