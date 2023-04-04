import jwt from "jsonwebtoken";

const requireSignIn = (req, res, next) => {
	try {
		if (req.headers.authorization) {
			const decode = jwt.verify(req.headers.authorization, process.env.JWT_KEY);
			req.user = decode;
			next();
		} else {
			return res.status(404).json({ success: false, message: "no token is attached to header" });
		}
	} catch (error) {
		return res.status(500).json({ success: false, message: "jwt validation error", error });
	}
};

export default requireSignIn;
