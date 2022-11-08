import express, { Application, json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { routes } from "./routes";

config();

const server: Application = express();

server.use(json());
server.use(cors());

server.use("/api", routes);

server.listen(3000, () => console.log(`✅ Server is running on port 3000.`));
