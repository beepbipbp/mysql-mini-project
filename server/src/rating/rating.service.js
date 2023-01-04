import RatingModel from "./rating.model.js";

class RatingService {
	static async deleteRating(id) {
		await RatingModel.deleteRating(id);
	}
}

export default RatingService;
