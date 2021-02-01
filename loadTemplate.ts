import { exists } from "./deps.ts"
import { Config } from "./readConfig.ts"
import template from "./template.ts"

export default async function loadTemplate(config: Config) {
    await exists("public") || await Deno.mkdir("public")

    await Promise.all(Object.entries(template(config)).map(([filename, data]) => {
        return Deno.writeTextFile(filename, data)
    }))
}
