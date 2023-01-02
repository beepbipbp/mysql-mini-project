import SectionModel from "./section.model.js";

class SectionService {
	static async getSectionList() {
		const rawSectionList = await SectionModel.getSectionList();
		const result = rawSectionList.map((section) => {
			return {
				sectionId: section.section_id,
				sectionName: section.section_name,
				floor: section.floor,
			};
		});
		return result;
	}
}

export default SectionService;
