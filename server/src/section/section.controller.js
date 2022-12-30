import SectionService from "./section.service.js";

class SectionController {
	static async getSectionList(req, res) {
		const result = await SectionService.getSectionList();

		res.status(200).json({ result });
	}
}

export default SectionController;
