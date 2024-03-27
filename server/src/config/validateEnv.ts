import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
  DB_HOST: str(),
  DB_PORT: port(),
  DB_USERNAME: str(),
  DB_PASSWORD: str(),
  DB_NAME: str(),
});
