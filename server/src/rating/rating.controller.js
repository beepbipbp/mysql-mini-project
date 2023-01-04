import RatingService from "./rating.service.js";

class RatingController {
	static async deleteRating(req, res) {
		const { id } = req.params;

		await RatingService.deleteRating(id);

		res.status(200).json({
			result: {
				success: true,
			},
		});
	}
}

export default RatingController;
