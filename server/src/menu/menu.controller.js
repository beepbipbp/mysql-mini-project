import MenuService from "./menu.service.js";

class MenuController {
	static async updateLikes(req, res) {
		const { id } = req.params;
		const { type } = req.query;

		const result = await MenuService.updateLikes(id, type);

		res.status(200).json({ result });
	}
}

export default MenuController;
