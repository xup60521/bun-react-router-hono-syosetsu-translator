import { serve } from "bun";
import index from "./src/index.html";
import app from "./server/server";

const server = serve({
    routes: {
        "/api/*": app.fetch,
        // Serve index.html for all unmatched routes.
        "/**": index,
    },

    development: process.env.NODE_ENV !== "production" && {
        // Enable browser hot reloading in development
        hmr: true,

        // Echo console logs from the browser to the server
        console: true,
    },
});

console.log(`🚀 Server running at ${server.url}`);
