import express from "express";
import formidable from "express-formidable";
import {
	createIndustryController,
	getSingleIndustryController,
	getIndustryController,
} from "../controllers/industryController.js";
import requireSignIn from "../middleware/authMiddleware.js";
const router = express.Router();

// create industry route
router.post(
	"/create-industry",
	requireSignIn,
	formidable({ multiples: true }),
	createIndustryController
);

// get single industry route

router.get("/get-single-industry/:slug", getSingleIndustryController);

// get industry route

router.get("/get-industry", getIndustryController);

export default router;
