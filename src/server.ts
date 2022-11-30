import express, { Application, json } from "express";
import cors from "cors";
import { APP_PORT } from "@/config/environments";
import { routes } from "./routes";

const server: Application = express();

server.use(json());
server.use(cors());

server.use("/api", routes);

server.listen(APP_PORT, () =>
  console.log(`✅ Server is running on port ${APP_PORT as string}.`),
);
