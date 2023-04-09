import industryModel from "../models/industryModel.js";
import slugify from "slugify";
import fs from "fs";
// create / add service
const createIndustryController = async (req, res) => {
	const {
		name,
		slug,
		bannerHeading,
		bannerDes,
		whatHeading,
		whatHeadingDes,
		whatSubHeading,
		whatSubHeadingDes,
		whatCardHeading,
		whatCardDes,
		whyHeading,
		whyHeadingDes,
		whyCardHeading,
		whyCardDes,
	} = req.fields;
	const { bannerPhoto } = req.files;
	try {
		const industry = new industryModel({ ...req.fields, slug: slugify(name) });
		if (bannerPhoto) {
			industry.bannerPhoto.data = fs.readFileSync(bannerPhoto.path);
			industry.bannerPhoto.contentType = bannerPhoto.type;
		}

		await industry.save();
		res.status(201).send({ success: true, message: "industry saved successfully", industry });
	} catch (error) {
		res
			.status(500)
			.send({ success: false, message: "something went wrong in adding service", error });
	}
};

// get single industry

const getSingleIndustryController = async (req, res) => {
	const { slug } = req.params;
	try {
		const singleIndustry = await industryModel.findOne({ slug });
		if (singleIndustry) {
			res.send({ success: true, message: "single industry fetched successfully", singleIndustry });
		}
	} catch (error) {
		res
			.status(500)
			.send({ success: false, message: "something went wrong in fetching single service", error });
	}
};

// get all industry

const getIndustryController = async (req, res) => {
	try {
		const industry = await industryModel.find().select("-photo");
		if (industry) {
			res.send({ success: true, message: "single industry fetched successfully", industry });
		}
	} catch (error) {
		res
			.status(500)
			.send({ success: false, message: "something went wrong in fetching industry", error });
	}
};

export { createIndustryController, getSingleIndustryController, getIndustryController };
