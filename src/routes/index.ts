import { Router } from "oak";

import apiRouter from "./api/index.ts";

const routes: Map<string, Router> = new Map<string, Router>([
  ["/api", apiRouter],
]);

const rootRouter: Router = new Router();
routes.forEach((router: Router, path: string): void => {
  rootRouter.use(path, router.routes());
});

export default rootRouter;
