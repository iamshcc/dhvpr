import { Hono } from "hono";

const app = new Hono();

app.get("/api/health", (c) => {
  return c.json({
    status: "ok",
    runtime: "Bun",
    framework: "Hono",
  });
});

export default {
  port: 3000,
  fetch: app.fetch,
};
