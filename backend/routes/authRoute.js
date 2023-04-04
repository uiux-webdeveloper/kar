import express from "express";
import {
	adminProtectedController,
	loginController,
	testingController,
} from "../controllers/authController.js";
import requireSignIn from "../middleware/authMiddleware.js";

const router = express.Router();
// // register user
// router.post("/register", registerController);
// login user
router.post("/login", loginController);
// admin Protected route
router.get("/admin-protected-route", requireSignIn, adminProtectedController);

// testing route
router.get("/testing-route", requireSignIn, testingController);

export default router;
