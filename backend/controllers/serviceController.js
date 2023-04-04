import serviceModel from "../models/serviceModel.js";
import slugify from "slugify";
import fs from "fs";
// create / add service
const createServiceControlller = async (req, res) => {
	const {
		name,
		slug,
		bannerHeading,
		bannerDes,
		whyHeading,
		whyDes,
		howHeading,
		howSubHeading,
		howDes,
		whatHeading,
		whatSubHeading,
		whatDes,
	} = req.fields;
	const { bannerPhoto } = req.files;
	try {
		const services = new serviceModel({ ...req.fields, slug: slugify(name) });
		if (bannerPhoto) {
			services.bannerPhoto.data = fs.readFileSync(bannerPhoto.path);
			services.bannerPhoto.contentType = bannerPhoto.type;
		}

		await services.save();
		res.status(201).send({ success: true, message: "service saved successfully", services });
	} catch (error) {
		res
			.status(500)
			.send({ success: false, message: "something went wrong in adding service", error });
	}
};

// get single service

const getSingleServiceController = async (req, res) => {
	const { slug } = req.params;
	try {
		const singleService = await serviceModel.findOne({ slug });
		if (singleService) {
			res.send({ success: true, message: "single service fetched successfully", singleService });
		}
	} catch (error) {
		res
			.status(500)
			.send({ success: false, message: "something went wrong in fetching single service", error });
	}
};

// get all services

const getServicesController = async (req, res) => {
	try {
		const services = await serviceModel.find().select("-photo");
		if (services) {
			res.send({ success: true, message: "single service fetched successfully", services });
		}
	} catch (error) {
		res
			.status(500)
			.send({ success: false, message: "something went wrong in fetching service", error });
	}
};

export { createServiceControlller, getSingleServiceController, getServicesController };
