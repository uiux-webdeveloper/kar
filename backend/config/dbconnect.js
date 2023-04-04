import mongoose from "mongoose";

const dbConnect = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URL);
		if (conn) {
			console.log(`db connected successfully on ${conn.connection.host}`.bgGreen);
		}
	} catch (error) {
		console.log("error connecting", error);
	}
};

export default dbConnect;
