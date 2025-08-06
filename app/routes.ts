import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/s01", "routes/s01.tsx"),
  route("/s02", "routes/s02.tsx"),
] satisfies RouteConfig;
