import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { especificationRoutes } from "./specifications.route";

export const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", especificationRoutes);
