import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

class SectionApi {
	static async getSectionList() {
		const response = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/section`);

		return response.data.result;
	}
}

export default SectionApi;
