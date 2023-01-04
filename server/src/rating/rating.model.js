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
}

export default RatingModel;
