import { exists } from "https://deno.land/std@0.84.0/fs/exists.ts"

import readConfig from "./readConfig.ts"
import loadTemplate from "./loadTemplate.ts"
import installPkg from "./installPkg.ts"

const [root = "./"] = Deno.args
Deno.chdir(root)

const config = await readConfig()

await exists("build") || await Deno.mkdir("build")
Deno.chdir("build")

await loadTemplate(config || {})
await installPkg()

console.log(config)