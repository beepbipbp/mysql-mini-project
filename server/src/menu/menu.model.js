import dbConnection from "../dbConnect.js";

class MenuModel {
	static async updateLikes(id, type) {
		await dbConnection.execute(`
      UPDATE
        menus
      SET
        likes = likes ${type === "plus" ? "+ 1" : "- 1"}
      WHERE
        menu_id = ${id}
    `);
	}

	static async getLikes(id) {
		const result = await dbConnection.execute(`
      SELECT
        likes
      FROM
        menus
      WHERE
        menu_id = ${id}
    `);

		return result[0][0];
	}
}

export default MenuModel;
