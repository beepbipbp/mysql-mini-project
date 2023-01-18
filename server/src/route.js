import express from "express";

import sectionRouter from "./section/section.routes.js";
import businessRouter from "./business/business.routes.js";
import menuRouter from "./menu/menu.routes.js";
import ratingRouter from "./rating/rating.routes.js";

const router = express.Router();

router.use("/api/section", sectionRouter);
router.use("/api/business", businessRouter);
router.use("/api/menu", menuRouter);
router.use("/api/rating", ratingRouter);

export default router;
