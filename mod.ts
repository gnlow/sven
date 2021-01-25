import { cac } from "https://unpkg.com/cac/mod.ts"
const cli = cac("sven")

import build from "./build.ts"
import dev from "./dev.ts"

cli 
    .command("build [path]")
    .action(path => {
        Deno.chdir(path)
        build()
    })
cli
    .command("dev [path]")
    .action(path => {
        Deno.chdir(path)
        dev()
    })

cli.help()

cli.parse()