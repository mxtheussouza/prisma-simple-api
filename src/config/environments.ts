import { config } from "dotenv";

config();

export const { SECRET, APP_PORT } = process.env;
