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
			${sortBy ? `ORDER BY ${businessColumnEnum[sortBy]}` : ""}
		`);

		return result[0];
	}
}

export default BusinessModel;
