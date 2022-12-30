import express from "express";

import SectionController from "./section.controller.js";

const sectionRouter = express.Router();

sectionRouter.get("/", SectionController.getSectionList);

export default sectionRouter;
