import SectionModel from "./section.model.js";

class SectionService {
	static async getSectionList() {
		const rows = await SectionModel.getSectionList();
		return {
			rows,
		};
	}
}

export default SectionService;
