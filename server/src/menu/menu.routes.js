import express from "express";

import MenuController from "./menu.controller.js";

const menuRouter = express.Router();

menuRouter.post("/:id/likes", MenuController.updateLikes);

export default menuRouter;
