import { Router } from "express";
import { fetchCategories } from "../controllers/category.controller.js";
const router = Router();

router.route("/all-categories").get(fetchCategories);

export default router;