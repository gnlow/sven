import readConfig from "./readConfig.ts"

const [root] = Deno.args
const config = await readConfig(root)

const cmd = Deno.run({
    cmd: ["echo", "hello"]
})
console.log(config)

cmd.close()