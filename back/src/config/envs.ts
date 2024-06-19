import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });

const PORT: number = Number(process.env.PORT) || 3001;
const DB_NAME: string = process.env.DB_NAME || "proyecto_m4_front";
const DB_USER: string = process.env.DB_USER || "postgres";
const DB_PASSWORD: string = process.env.DB_PASSWORD || "admin";
const DB_HOST: string = process.env.DB_HOST || "localhost";
const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
const JWT_SECRET: string = process.env.JWT_SECRET || "secret";

export { PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET };
