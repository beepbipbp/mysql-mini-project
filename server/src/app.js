import * as dotenv from "dotenv";
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import router from "./route.js";

dotenv.config();

class Server {
	constructor() {
		this.app = express();
	}

	setRoute() {
		this.app.use("/", router);
	}

	setMiddleware() {
		// CORS 설정
		this.app.use(
			cors({
				origin: process.env.CLIENT_URL,
				credentials: true,
			})
		);
		this.app.use(logger("dev"));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(cookieParser());

		this.setRoute();

		// catch 404 and forward to error handler
		this.app.use(function (req, res, next) {
			next(createError(404));
		});

		// error handler
		this.app.use(function (err, req, res, next) {
			// set locals, only providing error in development
			res.locals.message = err.message;
			res.locals.error = req.app.get("env") === "development" ? err : {};

			// render the error page
			res.status(err.status || 500);
			res.render("error");
		});
	}

	listen() {
		this.setMiddleware();
		this.app.listen(process.env.SERVER_PORT, () => {
			console.log("server is on...");
		});
	}
}

function init() {
	const server = new Server();
	server.listen();
}

init();
