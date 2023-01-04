import MenuModel from "./menu.model.js";

class MenuService {
	static async updateLikes(id, type) {
		await MenuModel.updateLikes(id, type);

		const result = await MenuModel.getLikes(id);

		return result;
	}
}

export default MenuService;
