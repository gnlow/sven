import { exists } from "./deps.ts"

import readConfig from "./readConfig.ts"
import loadTemplate from "./loadTemplate.ts"
import installPkg from "./installPkg.ts"

export default async function build(path: string) {
    Deno.chdir(path)

    const config = await readConfig()

    await exists("build") || await Deno.mkdir("build")
    Deno.chdir("build")

    await loadTemplate(config || {})
    await installPkg()
    
    console.log(config)
}
