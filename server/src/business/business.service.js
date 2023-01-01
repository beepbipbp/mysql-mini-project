import businessModel from "./business.model.js";

class BusinessService {
	static async getBusinessList(sectionName, floor, status, canTakeout, sortBy) {
		const result = await businessModel.getBusinessList(sectionName, floor, status, canTakeout, sortBy);

		return result;
	}
}

export default BusinessService;
