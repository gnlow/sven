import { exists } from "https://deno.land/std@0.84.0/fs/exists.ts"
import { execSequence } from "https://deno.land/x/exec@0.0.5/mod.ts"

import template from "./template.ts"

import readConfig from "./readConfig.ts"

const [root = "./"] = Deno.args
Deno.chdir(root)
const config = await readConfig()

await exists("build") || await Deno.mkdir("build")
Deno.chdir("build")

await Promise.all(Object.entries(template).map(([filename, data]) => {
    return Deno.writeTextFile(filename, data)
}))

await execSequence([
    `bash -c npm`
])

console.log(config)