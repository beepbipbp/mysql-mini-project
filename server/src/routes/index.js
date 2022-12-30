import express from "express";

import sectionRouter from "../section/section.routes.js";

const router = express.Router();

router.use("/api/section", sectionRouter);

export default router;
