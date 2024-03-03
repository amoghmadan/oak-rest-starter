import { Application, Context } from "oak";
import mongoose from "mongoose";
import { organ } from "organ";

import router from "../routes/index.ts";
import { MONGODB_URI } from "../settings.ts";

export function getRequestListener() {
  const application: Application = new Application();
  application.use(router.routes());
  application.use((ctx: Context): void => {
    ctx.response.body = { detail: "Not Found" };
    ctx.response.status = 404;
  });
  application.use(organ());

  return application;
}

export default async function bootstrap(
  port: number,
  hostname: string
): Promise<void> {
  const options: Deno.ListenOptions = { hostname, port };
  const requestListener: Application = getRequestListener();

  await mongoose.connect(MONGODB_URI);
  Deno.serve(options, async (request: Request): Promise<Response> => {
    const response = await requestListener.handle(request);
    return response || new Response("Internal Server Error", { status: 500 });
  });
}
