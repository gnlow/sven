import { exists } from "./deps.ts"
import { exec } from "./deps.ts"

import readConfig from "./readConfig.ts"
import loadTemplate from "./loadTemplate.ts"
import installPkg from "./installPkg.ts"

async function symlink(origin: string, sym: string) {
    await exists(sym) && await Deno.remove(sym, {recursive: true})
    await exec(`cmd /c "mklink /d ${sym} ${origin}"`) // Deno.symlink() doesn't work fine
}

export default async function build() {
    const config = await readConfig()

    await exists("build") || await Deno.mkdir("build")
    Deno.chdir("build")

    await symlink("..\\api", "api")
    await symlink("..\\src", "src")

    await loadTemplate(config || {})
    await installPkg()

    Deno.chdir("../")
}
