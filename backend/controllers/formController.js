import formModel from "../models/formModel.js";

// register from data
const registerFormDataController = async (req, res) => {
	const { job, name, email, message } = req.body;
	try {
		const registerForm = await formModel.create({ ...req.body });
		if (registerForm) {
			res
				.status(201)
				.json({ success: true, message: "form data entetered successfully", registerForm });
		}
	} catch (error) {
		res
			.status(500)
			.json({ success: false, message: "something went wrong in registering from data", error });
	}
};

export default registerFormDataController;
