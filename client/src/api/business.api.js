import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

class BusinessApi {
	static async getSimpleBusinessList(sectionName) {
		const sectionNameQuery = sectionName === "all" ? "" : `?section_name=${sectionName}`;

		const response = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/business${sectionNameQuery}`);

		return response.data.result;
	}

	static async getAdvancedBusinessList(sectionName, floor, status, canTakeout, sortBy) {
		const sectionNameQuery = sectionName === "all" ? "" : `section_name=${sectionName}`;
		const floorQuery = floor && floor !== "all" ? `&floor=${floor}` : "";
		const statusQuery = status && status !== "all" ? `&status=${status}` : "";
		const canTakeoutQuery = canTakeout && canTakeout !== "all" ? `&can_takeout=${canTakeout}` : "";
		const sortByQuery = sortBy ? `&sort_by=${sortBy}` : "";

		const response = await axios.get(
			`${process.env.REACT_APP_API_SERVER_URL}/business?${sectionNameQuery}${floorQuery}${statusQuery}${canTakeoutQuery}${sortByQuery}`
		);

		return response.data.result;
	}

	static async getBusinessDetails(businessId) {
		const response = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/business/${businessId}`);

		return response.data.result;
	}

	static async createRating(businessId, stars, comment) {
		const response = await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/business/${businessId}/rating`, {
			stars,
			comment,
		});

		return response.data.result;
	}
}

export default BusinessApi;
