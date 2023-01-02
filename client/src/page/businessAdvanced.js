import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BusinessApi from "../api/business.api.js";

function BusinessAdvanced() {
	const navigate = useNavigate();
	const [businessList, setBusinessList] = useState([]);

	let sectionName, floor, status, canTakeout, sortBy;
	window.location.search
		.slice(1)
		.split("&")
		.forEach((query) => {
			const [queryParameter, queryValue] = query.split("=");
			switch (queryParameter) {
				case "section_name":
					sectionName = queryValue;
					break;
				case "floor":
					floor = queryValue;
					break;
				case "status":
					status = queryValue;
					break;
				case "can_takeout":
					canTakeout = queryValue;
					break;
				case "sort_by":
					sortBy = queryValue;
					break;
			}
		});

	return (
		<Fragment>
			<div className="business_link" onClick={() => navigate("/")}>
				<h2>메인 페이지로</h2>
			</div>
			<br />
			<div className="business_link" onClick={() => navigate(`/business-advanced?section_name=${sectionName}`)}>
				<h2>간단히</h2>
			</div>
		</Fragment>
	);
}

export default BusinessAdvanced;
