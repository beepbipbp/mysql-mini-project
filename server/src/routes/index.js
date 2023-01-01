import express from "express";

import sectionRouter from "../section/section.routes.js";
import businessRouter from "../business/business.routes.js";

const router = express.Router();

router.use("/api/section", sectionRouter);
router.use("/api/business", businessRouter);

export default router;
