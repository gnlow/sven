import { cac } from "https://unpkg.com/cac/mod.ts"
const cli = cac("sven")

import init from "./init.ts"
import build from "./build.ts"
import dev from "./dev.ts"

cli 
    .command("init [path]", "Load template (Need administrator permission to make symlink")
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
cli.version("0.1.0")

cli.parse()