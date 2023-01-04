import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SectionApi from "../api/section.api.js";

function Main() {
	const navigate = useNavigate();
	const [sectionList, setSectionList] = useState([]);

	useEffect(() => {
		const fetchSectionList = async () => {
			const result = await SectionApi.getSectionList();
			setSectionList(result);
		};
		fetchSectionList();
	}, []);

	const makeSectionList = () => {
		const sectionListDom = sectionList.map((section) => {
			return (
				<li key={section.sectionId}>
					<div
						className="main__section_list"
						onClick={() => navigate("business-simple?section_name=" + section.sectionName)}
					>
						{section.sectionName}
					</div>
				</li>
			);
		});
		return sectionListDom;
	};

	return (
		<Fragment>
			<h1>음식 종류</h1>
			<ul>
				<li key="all">
					<div className="main__section_list" onClick={() => navigate("business-simple?section_name=all")}>
						전체
					</div>
				</li>
				{makeSectionList()}
			</ul>
		</Fragment>
	);
}

export default Main;
