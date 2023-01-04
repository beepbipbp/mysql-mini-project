import express from "express";

import BusinessController from "./business.controller.js";

const businessRouter = express.Router();

businessRouter.get("/", BusinessController.getBusinessList);
businessRouter.get("/:id", BusinessController.getBusinessDetails);
businessRouter.post("/:id/rating", BusinessController.createRating);

export default businessRouter;
