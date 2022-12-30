import axios from "axios";

class SectionApi {
	static async getSectionList() {
		const result = await axios.get("http://localhost:8000/api/section");

		return result.data.result.rows;
	}
}

export default SectionApi;
