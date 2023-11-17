import {
  Route,
  RootRoute,
  Router,
  lazyRouteComponent,
} from "@tanstack/react-router";
import App from "./App";
function createRoutes() {
  const rootRoute = new RootRoute({
    component: App,
  });
  const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: lazyRouteComponent(() => import("./pages/dashboard")),
  });
  const routeTree = rootRoute.addChildren([indexRoute]);
  return new Router({ routeTree });
}
export const router = createRoutes();
