import businessModel from "./business.model.js";

class BusinessService {
	static async getBusinessList(sectionName, floor, status, canTakeout, sortBy) {
		const result = await businessModel.getBusinessList(sectionName, floor, status, canTakeout, sortBy);

		return result;
	}

	static async getBusinessDetails(id) {
		const businessDetails = await businessModel.getBusinessDetails(id);
		const businessMenuList = await businessModel.getBusinessMenuList(id);
		const businessRatingList = await businessModel.getBusinessRatingList(id);

		return [businessDetails, businessMenuList, businessRatingList];
	}
}

export default BusinessService;
