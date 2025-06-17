import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

import auth from "auth-astro";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: node({ mode: "standalone" }),
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [auth(), db()],
});