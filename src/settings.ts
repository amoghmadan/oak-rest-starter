import { dirname } from "path";

import { load } from "dotenv";

await load({ export: true });

export const BASE_DIR: string = dirname(String(import.meta.filename));

export const MONGODB_URI: string = String(Deno.env.get("MONGODB_URI"));
