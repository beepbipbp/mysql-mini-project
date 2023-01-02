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
				<tr key={business.businessId}>
					<td className="business-list_link" onClick={() => navigate(`/business?id=${business.businessId}`)}>
						{business.businessName}
					</td>
					<td>{business.sectionName}</td>
					<td>{business.floor}</td>
					<td>{business.status}</td>
					<td>{business.canTakeout ? "가능" : "불가능"}</td>
				</tr>
			);
		});

		return businessListDom;
	};

	return (
		<Fragment>
			<div className="business_link" onClick={() => navigate("/")}>
				<h2>메인 페이지로</h2>
			</div>
			<br />
			<div className="business_link" onClick={() => navigate("/business-advanced")}>
				<h2>자세히</h2>
			</div>
			<br />
			<h1>Business</h1>
			<table>
				<thead>
					<tr>
						<th>Business</th>
						<th>Section</th>
						<th>Floor</th>
						<th>Status</th>
						<th>Takeout</th>
					</tr>
				</thead>
				<tbody>{makeBusinessList()}</tbody>
			</table>
		</Fragment>
	);
}

export default BusinessSimple;
