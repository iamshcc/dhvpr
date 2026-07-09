import { Hono } from "hono";

const app = new Hono();

app.get("/health", (c) => {
  return c.json({
    message: "The Service is running."
  });
});

export default {
  port: 3000,
  fetch: app.fetch,
};
