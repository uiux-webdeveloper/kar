import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },

		slug: { type: String, required: true },

		bannerHeading: { type: String, required: true },
		bannerDes: { type: String, required: true },
		bannerPhoto: { data: Buffer, contentType: String },

		whyHeading: { type: String, required: true },
		whyDes: { type: String, required: true },
		whyPhoto: { data: Buffer, contentType: String },

		howHeading: { type: String, required: true },
		howSubHeading: { type: String, required: true },
		howDes: { type: String, required: true },
		howPhoto: { data: Buffer, contentType: String },

		whatHeading: { type: String, required: true },
		whatSubHeading: { type: Array, required: true },
		whatDes: { type: Array, required: true },
		whatPhoto: { data: Buffer, contentType: String },
	},
	{ timestamps: true }
);

export default mongoose.model("service", serviceSchema);
