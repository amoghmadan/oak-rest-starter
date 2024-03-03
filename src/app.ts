import { Command } from "cliffy";

import { bootstrap } from "./cli/index.ts";

await new Command()
  .name("app")
  .version("0.1.0")
  .description("app <cmd> [args]")
  .command("bootstrap", "Bootstrap application")
  .option("--host", "Host", { default: "::" })
  .option("--port", "Port", { default: 8000 })
  .action(
    async (
      options: { host: string | boolean; port: number | boolean },
      ..._: Array<unknown>
    ): Promise<void> => {
      await bootstrap(Number(options.port), String(options.host));
    }
  )
  .parse(Deno.args);
