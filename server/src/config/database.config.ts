import { DataSource } from "typeorm";
import env from "./validateEnv";

export const AppDataSource = new DataSource({
  type: "postgres",
  port: env.DB_PORT,
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  entities: ["User"],
});
