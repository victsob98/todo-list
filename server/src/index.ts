import "dotenv/config";
import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import env from "./config/validateEnv";
import { AppDataSource } from "./config/database.config";
import { User } from "./user/user.entity";

const app: Application = express();
const port = process.env.APP_PORT || 8000;

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

// app.get("/users", async function (req: Request, res: Response) {
//   const users = await databaseSource.getRepository(User).find();
//   res.json(users);
// });

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
