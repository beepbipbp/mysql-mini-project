const selectListEnum = {
	sectionName: ["all", "한식", "분식", "중식", "일식", "양식", "카페", "디저트"],
	floor: ["all", "1", "2", "3"],
	status: ["all", "cls", "opn", "rmd", "vct"],
	canTakeout: ["all", "1", "0"],
	sortBy: ["id", "business_name", "section_name", "floor", "status", "can_takeout"],
};

const selectClassEnum = {
	sectionName: "select__section-name",
	floor: "select__floor",
	status: "select__status",
	canTakeout: "select__can-takeout",
	sortBy: "select__sort-by",
};

const sortByEnum = {
	id: "ID",
	business_name: "Business Name",
	section_name: "Section",
	floor: "Floor",
	status: "Status",
	can_takeout: "Takeout",
};

export { selectListEnum, selectClassEnum, sortByEnum };
