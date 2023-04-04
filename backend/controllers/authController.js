import genToken from "../config/jwt.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";

// // register user
// const registerController = async (req, res) => {
// 	const { username, email, password } = req.body;
// 	const hashedPassword = await hashPassword(password);
// 	try {
// 		const user = await userModel.findOne({ email });
// 		if (user) {
// 			return res.status(500).json({ success: false, message: "user already registered" });
// 		} else {
// 			const registerUser = await userModel.create({ username, email, password: hashedPassword });
// 			res
// 				.status(201)
// 				.json({ success: true, message: "user registered successfully", registerUser });
// 		}
// 	} catch (error) {
// 		res.status(500).json({ success: false, message: "user failed to register", error });
// 	}
// };

// login user

const loginController = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userModel.findOne({ email });
		if (!user) {
			res.status(400).json({ success: false, message: "User not found" });
		}
		const match = await comparePassword(password, user.password);
		if (!match) {
			res.status(400).json({ success: false, message: "wrong password entered" });
		} else {
			res.status(200).json({
				success: true,
				message: "user logged in sucessfully",
				user: { username: user.username, email: user.email },
				token: genToken({ _id: user._id }),
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "user failed to login",
			error,
		});
	}
};

// admin protected route

const adminProtectedController = (req, res) => {
	res.status(200).json({ ok: true });
};

// testing route

const testingController = (req, res) => {
	res.json({ success: true, message: "testing succcessfully" });
};

export { loginController, adminProtectedController, testingController };
