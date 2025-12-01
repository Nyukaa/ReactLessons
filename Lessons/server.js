// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("src/db.json");
// const middlewares = jsonServer.defaults();
// server.use(middlewares);
// server.use(router);
// server.listen(process.env.PORT || 3000, () => {
//   console.log(" JSON Server is running");
// });
import express from "express";
import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const router = jsonServer.router("src/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// serve /dist
server.use(express.static(path.join(__dirname, "dist")));

server.use("/api", router);

server.listen(process.env.PORT || 3001, () => {
  console.log("Server + API running on port 3001");
});

// "scripts": {
//   "dev": "vite",
//   "build": "vite build",
//   "preview": "vite preview",
//   "lint": "eslint .",
//   "server": "npm run build && node server.js"
// }
