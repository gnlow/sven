import { cac } from "https://unpkg.com/cac/mod.ts"
const cli = cac("sven")

import init from "./init.ts"
import dev from "./dev.ts"

cli 
    .command("init [path]")
    .action(async path => {
        Deno.chdir(path)
        await init()
    })
cli
    .command("dev [path]")
    .action(async path => {
        Deno.chdir(path)
        await dev()
    })

cli.help()

cli.parse()