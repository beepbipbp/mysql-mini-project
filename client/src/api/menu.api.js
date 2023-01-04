import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

class MenuApi {
	static async updateLikes(id, type) {
		const response = await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/menu/${id}/likes?type=${type}`);

		return response.data.result.likes;
	}
}

export default MenuApi;
