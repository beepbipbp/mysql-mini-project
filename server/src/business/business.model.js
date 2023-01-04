import dbConnection from "../dbConnect.js";
import { businessColumnEnum } from "./business.enum.js";

class BusinessModel {
	static async getBusinessList(sectionName, floor, status, canTakeout, sortBy) {
		const result = await dbConnection.execute(`
			SELECT
				B.business_id AS businessId,
				B.business_name AS businessName,
				S.section_name AS sectionName,
				S.floor AS floor,
				B.status AS status,
				B.can_takeout AS canTakeout
			FROM
				businesses B
			JOIN sections S
			  ON B.fk_section_id = S.section_id
			${sectionName || floor || status || canTakeout ? "WHERE" : ""}
			  ${sectionName ? `S.section_name = "${sectionName}"` : ""}
				  ${sectionName && (floor || status || canTakeout) ? "AND" : ""}
				${floor ? `S.floor = ${floor}` : ""}
				  ${floor && (status || canTakeout) ? "AND" : ""}
				${status ? `B.status = "${status}"` : ""}
				  ${status && canTakeout ? "AND" : ""}
				${canTakeout ? `B.can_takeout = ${canTakeout}` : ""}
			${sortBy ? `ORDER BY ${businessColumnEnum[sortBy]}` : "ORDER BY businessId"}
		`);

		return result[0];
	}

	static async getBusinessDetails(id) {
		const result = await dbConnection.execute(`
			SELECT
				B.business_id AS businessId,
				B.business_name AS businessName,
				S.section_name AS sectionName,
				B.status AS status,
				B.can_takeout AS canTakeout
			FROM
			  businesses B
			JOIN sections S
			  ON B.fk_section_id = S.section_id
			WHERE
				B.business_id = ${id}
		`);

		return result[0][0];
	}

	static async getBusinessMenuList(id) {
		const result = await dbConnection.execute(`
			SELECT
			  M.menu_id AS menuId,
				M.menu_name AS menuName,
				M.kilocalories AS kilocalories,
				M.price AS price,
				M.likes AS likes
			FROM
				menus M
			JOIN businesses B
				ON M.fk_business_id = B.business_id
			WHERE
				B.business_id = ${id}
			ORDER BY
				menuId
		`);

		return result[0];
	}

	static async getBusinessRatingList(id) {
		const result = await dbConnection.execute(`
			SELECT
			  R.rating_id AS ratingId,
				R.stars AS stars,
				R.comment AS comment,
				R.created AS created
			FROM
				ratings R
			JOIN businesses B
				ON R.fk_business_id = B.business_id
			WHERE
				B.business_id = ${id}
			ORDER BY
				ratingId
		`);

		return result[0];
	}

	static async createRating(id, stars, comment) {
		await dbConnection.execute(`
		  INSERT INTO
				ratings
			  (fk_business_id, stars, comment)
			VALUES
				(${id}, ${stars}, "${comment}")
		`);
	}
}

export default BusinessModel;
