import { globToRegExp } from "https://deno.land/std@0.84.0/path/glob.ts"
import { parse } from "https://deno.land/std@0.84.0/encoding/yaml.ts"

export default async function readConfig(root: string) {
    for await (const dirEntry of Deno.readDir(root)) {
        if (globToRegExp("sven.config.{yml,yaml}").test(dirEntry.name)) {
            return parse(await Deno.readTextFile(root + "/" + dirEntry.name))
        }
    }
}