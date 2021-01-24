import { globToRegExp } from "https://deno.land/std@0.84.0/path/glob.ts"
import { parse } from "https://deno.land/std@0.84.0/encoding/yaml.ts"

export interface Config {
    path?: {
        api?: string,
        src?: string,
    },
    vercel?: any,
}

export default async function readConfig() {
    for await (const dirEntry of Deno.readDir("./")) {
        if (globToRegExp("sven.config.{yml,yaml}").test(dirEntry.name)) {
            return parse(await Deno.readTextFile(dirEntry.name)) as Config
        }
    }
}