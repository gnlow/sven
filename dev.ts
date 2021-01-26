import { exec, OutputMode } from "./deps.ts"

export default async function dev() {
    Deno.chdir("build")

    await exec(`bash -c "npm run dev"`)

    Deno.chdir("../")
}