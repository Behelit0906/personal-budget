import { config } from "dotenv";

config();

export const port = process.env.PORT || 3000;

export default {
    host: process.env.DB_HOST || "",
    dbName: process.env.DB_NAME || "",
    dbUser: process.env.DB_USER || "",
    dbPass: process.env.DB_PASS || ""
};
