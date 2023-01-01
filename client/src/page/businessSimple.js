import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BusinessApi from "../api/business.api.js";

function BusinessSimple() {
	const navigate = useNavigate();
	const [businessList, setBusinessList] = useState([]);

	useEffect(() => {
		const fetchBusinessList = async () => {
			const sectionName = window.location.search.slice(1).split("=")[1];
			const result = await BusinessApi.getSimpleBusinessList(sectionName);
			setBusinessList(result);
		};
		fetchBusinessList();
	}, []);

	const makeBusinessList = () => {
		const businessListDom = businessList.map((business) => {
			return (
				<tr>
					<td>{business.businessName}</td>
					<td>{business.sectionName}</td>
					<td>{business.floor}</td>
					<td>{business.status}</td>
					<td>{business.canTakeout}</td>
				</tr>
			);
		});
	};

	return (
		<Fragment>
			<div className="business_link" onClick={() => navigate("/")}>
				메인 페이지로
			</div>
		</Fragment>
	);
}

export default BusinessSimple;
