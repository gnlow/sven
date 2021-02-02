import { exec } from "./deps.ts"

export default async function dev() {
    Deno.chdir("build")

    exec(`bash -c "npm run build"`)

    Deno.chdir("../")
}