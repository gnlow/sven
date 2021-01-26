import { cac } from "https://unpkg.com/cac/mod.ts"
const cli = cac("sven")

import build from "./build.ts"
import dev from "./dev.ts"

cli 
    .command("build [path]")
    .action(async path => {
        Deno.chdir(path)
        await build()
    })
cli
    .command("dev [path]")
    .action(async path => {
        Deno.chdir(path)
        await dev()
    })

cli.help()

cli.parse()