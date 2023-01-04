import RatingService from "./rating.service.js";

class RatingController {
	static async deleteRating(req, res) {
		const { id } = req.params;

		const result = await RatingService.deleteRating(id);

		res.status(200).json({ result });
	}
}

export default RatingController;
