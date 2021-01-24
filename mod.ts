import readConfig from "./readConfig.ts"

const [root = "./"] = Deno.args
Deno.chdir(root)
const config = await readConfig()

await Deno.mkdir("build")

const cmd = Deno.run({
    cmd: ["echo", "hello"]
})
console.log(config)

cmd.close()