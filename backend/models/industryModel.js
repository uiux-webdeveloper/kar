import mongoose from "mongoose";

const industrySchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		slug: { type: String, required: true },

		bannerHeading: { type: String, required: true },
		bannerDes: { type: String, required: true },
		bannerPhoto: { data: Buffer, contentType: String },
		
		whatHeading: { type: String, required: true },
		whatHeadingDes: { type: String, required: true },
		whatSubHeading: { type: String, required: true },
		whatSubHeadingDes: { type: String, required: true },
		whatPhoto: { data: Buffer, contentType: String },
		whatCardHeading: { type: String, required: true },
		whatCardDes: { type: String, required: true },

		whyHeading: { type: String, required: true },
		whyHeadingDes: { type: String, required: true },
		whyPhoto: { data: Buffer, contentType: String },
		whyCardHeading: { type: String, required: true },
		whyCardDes: { type: String, required: true },
	},
	{ timestamps: true }
);

export default mongoose.model("industry", industrySchema);
