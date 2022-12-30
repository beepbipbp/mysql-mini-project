import dbConnection from "../dbConnect.js";

class SectionModel {
	static async getSectionList() {
		const result = await dbConnection.execute(`
      SELECT * FROM sections
    `);

		return result[0];
	}
}

export default SectionModel;
