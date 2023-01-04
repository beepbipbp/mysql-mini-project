import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BusinessApi from "../api/business.api.js";

function BusinessSimple() {
	const navigate = useNavigate();
	const [businessList, setBusinessList] = useState([]);

	const sectionName = window.location.search.slice(1).split("=")[1];

	useEffect(() => {
		const fetchBusinessList = async () => {
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

		return (
			<Fragment>
				<h1>Business</h1>
				<table>
					<thead>
						<tr>
							<th className="table-index">업소명</th>
							<th className="table-index">음식 종류</th>
							<th className="table-index">층</th>
							<th className="table-index">영업 상태</th>
							<th className="table-index">포장 가능 여부</th>
						</tr>
					</thead>
					<tbody>{businessListDom}</tbody>
				</table>
			</Fragment>
		);
	};

	return (
		<Fragment>
			<div className="business_link" onClick={() => navigate("/")}>
				<h2>메인 페이지로</h2>
			</div>
			<br />
			<div className="business_link" onClick={() => navigate(`/business-advanced?section_name=${sectionName}`)}>
				<h2>자세히</h2>
			</div>
			<br />
			{makeBusinessList()}
		</Fragment>
	);
}

export default BusinessSimple;
