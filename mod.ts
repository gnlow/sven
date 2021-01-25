import { cac } from "https://unpkg.com/cac/mod.ts"
const cli = cac("sven")

import build from "./build.ts"

cli
    .command("build <path>")
    .action(build)

cli.help()

cli.parse()