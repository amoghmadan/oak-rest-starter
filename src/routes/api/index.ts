import { Router } from "oak";

import accountsRouter from "./accounts.route.ts";

const routes: Map<string, Router> = new Map<string, Router>([
  ["/accounts", accountsRouter],
]);

const apiRouter: Router = new Router();
routes.forEach((router: Router, path: string): void => {
  apiRouter.use(path, router.routes());
});

export default apiRouter;
