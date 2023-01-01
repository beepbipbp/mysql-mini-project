import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

class BusinessApi {
	static async getSimpleBusinessList(sectionName) {
		const sectionNameQuery = sectionName === "all" ? "" : `?section_name=${sectionName}`;
		const response = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/business${sectionNameQuery}`);

		return response.data.result;
	}
}

export default BusinessApi;
