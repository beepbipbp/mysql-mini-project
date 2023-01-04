import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

class MenuApi {
	static async updateLikes(id, type) {
		const response = await axios.patch(`${process.env.REACT_APP_API_SERVER_URL}/menu/${id}/likes?type=${type}`);

		return response.data.result;
	}
}

export default MenuApi;
