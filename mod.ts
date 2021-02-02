import { cac } from "https://unpkg.com/cac/mod.ts"
const cli = cac("sven")

import init from "./init.ts"
import build from "./build.ts"
import dev from "./dev.ts"

cli 
    .command("init [path]", "Load template")
    .action(async path => {
        Deno.chdir(path)
        await init()
    })
cli
    .command("build [path]", "Build project once")
    .action(async path => {
        Deno.chdir(path)
        await build()
    })
cli
    .command("dev [path]", "Open dev server")
    .action(async path => {
        Deno.chdir(path)
        await dev()
    })

cli.help()

cli.parse()