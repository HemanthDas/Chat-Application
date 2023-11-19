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
  const createRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "create",
    component: lazyRouteComponent(() => import("./pages/create")),
  });
  const exploreRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "explore",
    component: lazyRouteComponent(() => import("./pages/explore")),
  });
  const searchRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "search",
    component: lazyRouteComponent(() => import("./pages/search")),
  });
  const profileRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "profile",
    component: lazyRouteComponent(() => import("./pages/profile")),
  });
  const notFoundRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "*",
    component: lazyRouteComponent(() => import("./pages/_404")),
  });
  const routeTree = rootRoute.addChildren([
    indexRoute,
    searchRoute,
    createRoute,
    profileRoute,
    exploreRoute,
    notFoundRoute,
  ]);
  return new Router({ routeTree });
}
export const router = createRoutes();
