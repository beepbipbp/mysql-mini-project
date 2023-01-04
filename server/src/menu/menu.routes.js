import express from "express";

import MenuController from "./menu.controller.js";

const menuRouter = express.Router();

menuRouter.patch("/:id/likes", MenuController.updateLikes);

export default menuRouter;
