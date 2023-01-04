import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

class RatingApi {
	static async deleteRating(id) {
		const response = await axios.delete(`${process.env.REACT_APP_API_SERVER_URL}/rating/${id}`);

		return response.data.result;
	}
}

export default RatingApi;
