import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
    return c.json({
        message: "Hello, world! from Hono",
        method: "GET",
    });
});


export default app