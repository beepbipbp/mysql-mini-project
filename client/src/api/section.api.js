import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

class SectionApi {
	static async getSectionList() {
		const result = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/section`);

		return result.data.result.rows;
	}
}

export default SectionApi;
