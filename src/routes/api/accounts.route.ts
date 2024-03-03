import { Context, Router } from "oak";

const accountsRouter: Router = new Router();
accountsRouter.get("/detail", (ctx: Context): void => {
  ctx.response.body = { hello: "World" };
});

export default accountsRouter;
