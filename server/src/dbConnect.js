import * as dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const dbConnection = await mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
});

export default dbConnection;
