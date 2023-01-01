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
		const sectionListDOM = sectionList.map((section) => {
			return (
				<li key={section.sectionId}>
					<div
						className="main__section_list"
						onClick={() => navigate("business-simple?section=" + section.sectionName)}
					>
						{section.sectionName}
					</div>
				</li>
			);
		});
		return sectionListDOM;
	};

	return (
		<Fragment>
			<h1>Sections</h1>
			<ul>
				<li key="all">
					<div className="main__section_list" onClick={() => navigate("business-simple?section=all")}>
						전체
					</div>
				</li>
				{makeSectionList()}
			</ul>
		</Fragment>
	);
}

export default Main;
