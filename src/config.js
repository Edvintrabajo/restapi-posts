import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = "containers-us-west-160.railway.app";
export const DB_USER = "root";
export const DB_PASSWORD = "sTGkfFq3406bEEnvGkt5";
export const DB_DATABASE = process.env.DB_DATABASE || "railway";
export const DB_PORT = 5779;
