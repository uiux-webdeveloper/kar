import express from "express";
import registerFormDataController from "../controllers/formController.js";
const router = express.Router();

router.post("/register", registerFormDataController);

export default router;
