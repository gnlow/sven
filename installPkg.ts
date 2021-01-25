import { execSequence } from "./deps.ts"

function install(name: string) {
    return `bash -c "npm list ${name} || npm i -D ${name}"`
}

export default async function installPkg() {
    await execSequence([
        install("@snowpack/plugin-svelte"),
        install("@snowpack/plugin-typescript"),
        install("svelte-preprocess"),
        install("typescript"),
    ])
}
