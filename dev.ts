import { execSequence } from "./deps.ts"

export default async function dev() {
    Deno.chdir("build")

    await execSequence([
        "snowpack dev"
    ])

    Deno.chdir("../")
}