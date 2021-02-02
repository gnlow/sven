import { exec } from "./deps.ts"

export default async function dev() {
    Deno.chdir("build")

    exec(`bash -c "vercel dev --listen 3000"`)
    exec(`bash -c "npm run _dev"`)

    Deno.chdir("../")
}