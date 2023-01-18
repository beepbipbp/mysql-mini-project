const selectListDictionary = {
	sectionName: ["all", "한식", "분식", "중식", "일식", "양식", "카페", "디저트"],
	floor: ["all", "1", "2", "3"],
	status: ["all", "cls", "opn", "rmd", "vct"],
	canTakeout: ["all", "1", "0"],
	sortBy: ["id", "business_name", "section_name", "floor", "status", "can_takeout"],
};

const selectClassDictionary = {
	sectionName: "select__section-name",
	floor: "select__floor",
	status: "select__status",
	canTakeout: "select__can-takeout",
	sortBy: "select__sort-by",
};

const sortByDictionary = {
	id: "ID",
	business_name: "업소명",
	section_name: "음식 종류",
	floor: "층",
	status: "영업 상태",
	can_takeout: "포장 가능 여부",
};

export { selectListDictionary, selectClassDictionary, sortByDictionary };
