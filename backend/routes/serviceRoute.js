import express from "express";
import formidable from "express-formidable";
import {
	createServiceControlller,
	getServicesController,
	getSingleServiceController,
} from "../controllers/serviceController.js";
import requireSignIn from "../middleware/authMiddleware.js";

const router = express.Router();

// create service route
router.post(
	"/create-service",
	requireSignIn,
	formidable({ multiples: true }),
	createServiceControlller
);

// get single service route
router.get("/get-single-service/:slug", getSingleServiceController);

// get services route
router.get("/get-services", getServicesController);

export default router;
