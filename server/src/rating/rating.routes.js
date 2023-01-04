import express from "express";

import RatingController from "./rating.controller.js";

const ratingRouter = express.Router();

ratingRouter.delete("/:id", RatingController.deleteRating);

export default ratingRouter;
