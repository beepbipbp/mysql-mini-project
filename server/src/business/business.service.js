import BusinessModel from "./business.model.js";

class BusinessService {
	static async getBusinessList(sectionName, floor, status, canTakeout, sortBy) {
		const result = await BusinessModel.getBusinessList(sectionName, floor, status, canTakeout, sortBy);

		return result;
	}

	static async getBusinessDetails(id) {
		const businessDetails = await BusinessModel.getBusinessDetails(id);
		const businessMenuList = await BusinessModel.getBusinessMenuList(id);
		const businessRatingList = await BusinessModel.getBusinessRatingList(id);

		return [businessDetails, businessMenuList, businessRatingList];
	}

	static async createRating(id, stars, comment) {
		await BusinessModel.createRating(id, stars, comment);

		const result = await BusinessModel.getBusinessRatingList(id);

		return result;
	}
}

export default BusinessService;
