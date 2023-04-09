import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import dbConnect from "./config/dbConnect.js";
import authRoute from "./routes/authRoute.js";
import serviceRoute from "./routes/serviceRoute.js";
import industryRoute from "./routes/industryRoute.js";
import formRoute from "./routes/formRoute.js";
import cors from "cors";
import morgan from "morgan";

dotenv.config();
dbConnect();

const app = express();
const port = process.env.PORT || 8080;
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// auth router
app.use("/api/auth", authRoute);

// service router
app.use("/api/service", serviceRoute);

// industry router
app.use("/api/industry", industryRoute);

// form data router
app.use("/api/formdata", formRoute);

app.listen(port, () => {
	console.log(`server running on port ${port}`.bgCyan.white);
});
