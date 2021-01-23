import { ServerRequest } from "https://deno.land/std@0.84.0/http/server.ts"

export default async (req: ServerRequest) => {
	req.respond({ body: new Date().toString() });
};