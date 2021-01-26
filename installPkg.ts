import { execSequence } from "./deps.ts"

function install(name: string, runtime?: boolean) {
    return `bash -c "npm list ${name} || npm i ${runtime ? "" : "-D"} ${name}"`
}

export default async function installPkg() {
    await execSequence([
        install("snowpack"),
        install("@snowpack/plugin-svelte"),
        install("@snowpack/plugin-typescript"),
        install("svelte-preprocess"),
        install("typescript"),
        install("svelte", true),
    ])
}
