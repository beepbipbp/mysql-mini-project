import RatingModel from "./rating.model.js";
import BusinessModel from "../business/business.model.js";

class RatingService {
	static async deleteRating(ratingId) {
		const businessId = await RatingModel.getBusinessId(ratingId);
		await RatingModel.deleteRating(ratingId);
		const result = BusinessModel.getBusinessRatingList(businessId);

		return result;
	}
}

export default RatingService;
