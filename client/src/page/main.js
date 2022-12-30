import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SectionApi from "../api/section.api.js";

function Main() {
	const navigate = useNavigate();
	const [sectionList, setSectionList] = useState([]);

	useEffect(() => {
		const fetchSectionList = async () => {
			const response = await SectionApi.getSectionList();
			setSectionList(response);
		};
		fetchSectionList();
	}, []);

	const makeSectionList = () => {
		const sectionListDOM = sectionList.map((section) => {
			return (
				<li key={section.section_id}>
					<div
						className="main__section_list"
						onClick={() =>
							navigate("business-simple?section=" + section.section_name)
						}
					>
						{section.section_name}
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
					<div
						className="main__section_list"
						onClick={() => navigate("business-simple?section=all")}
					>
						전체
					</div>
				</li>
				{makeSectionList()}
			</ul>
		</Fragment>
	);
}

export default Main;
