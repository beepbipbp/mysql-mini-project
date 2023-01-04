import dbConnection from "../dbConnect.js";

class RatingModel {
	static async deleteRating(id) {
		await dbConnection.execute(`
      DELETE
      FROM
        ratings
      WHERE
        rating_id = ${id}
    `);
	}

	static async getBusinessId(ratingId) {
		const result = await dbConnection.execute(`
      SELECT
        fk_business_id AS businessId
      FROM
        ratings
      WHERE
        rating_id = ${ratingId}
    `);

		return result[0][0].businessId;
	}
}

export default RatingModel;
