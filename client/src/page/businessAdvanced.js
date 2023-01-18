import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BusinessApi from "../api/business.api.js";
import { selectListEnum, selectClassEnum, sortByEnum } from "../enum/selectEnum.js";

function BusinessAdvanced() {
	const navigate = useNavigate();

	let initialSectionName, initialFloor, initialStatus, initialCanTakeout, initialSortBy;

	window.location.search
		.slice(1)
		.split("&")
		.forEach((query) => {
			const [queryParameter, queryValue] = query.split("=");
			switch (queryParameter) {
				case "section_name":
					initialSectionName = decodeURI(queryValue);
					break;
				case "floor":
					initialFloor = queryValue;
					break;
				case "status":
					initialStatus = queryValue;
					break;
				case "can_takeout":
					initialCanTakeout = queryValue;
					break;
				case "sort_by":
					initialSortBy = queryValue;
					break;
			}
		});

	const [sectionName, setSectionName] = useState(initialSectionName);
	const [floor, setFloor] = useState(initialFloor);
	const [status, setStatus] = useState(initialStatus);
	const [canTakeout, setCanTakeout] = useState(initialCanTakeout);
	const [sortBy, setSortBy] = useState(initialSortBy);
	const [businessList, setBusinessList] = useState([]);

	useEffect(() => {
		const fetchBusinessList = async () => {
			const result = await BusinessApi.getAdvancedBusinessList(sectionName, floor, status, canTakeout, sortBy);
			setBusinessList(result);
		};
		fetchBusinessList();
	}, []);

	const handleChange = (event) => {
		event.preventDefault();

		const className = event.target.className;

		switch (className) {
			case "business__select--section-name":
				setSectionName(event.target.value);
				break;
			case "business__select--floor":
				setFloor(event.target.value);
				break;
			case "business__select--status":
				setStatus(event.target.value);
				break;
			case "business__select--can-takeout":
				setCanTakeout(event.target.value);
				break;
			case "business__select--sort-by":
				setSortBy(event.target.value);
				break;
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const sectionNameQuery = `section_name=${sectionName}`;
		const floorQuery = floor ? `&floor=${floor}` : "";
		const statusQuery = status ? `&status=${status}` : "";
		const canTakeoutQuery = canTakeout ? `&can_takeout=${canTakeout}` : "";
		const sortByQuery = sortBy ? `&sort_by=${sortBy}` : "";

		window.location.replace(
			`/business-advanced?${sectionNameQuery}${floorQuery}${statusQuery}${canTakeoutQuery}${sortByQuery}`
		);
	};

	const makeForm = () => {
		const makeSelect = (type) => {
			const sectionList = selectListEnum[type];

			const sectionSelectDom = sectionList.map((s) => (
				<option className={selectClassEnum[type]} key={type + "_" + s} value={s}>
					{(() => {
						if (s === "all") {
							return "전체";
						} else {
							switch (type) {
								case "sectionName":
									return s;
								case "floor":
									return s;
								case "status":
									return s.toUpperCase();
								case "canTakeout":
									return s === "1" ? "가능" : "불가능";
								case "sortBy":
									return sortByEnum[s];
							}
						}
					})()}
				</option>
			));

			return sectionSelectDom;
		};

		return (
			<form className="business__form" onSubmit={(event) => handleSubmit(event)}>
				음식 종류:
				<select
					className="business__select--section-name"
					key={"sectionName_" + sectionName}
					value={sectionName}
					onChange={(e) => handleChange(e)}
				>
					{makeSelect("sectionName")}
				</select>
				층:
				<select
					className="business__select--floor"
					key={floor ? "floor_" + floor : "floor_all"}
					value={floor ? floor : "all"}
					onChange={(e) => handleChange(e)}
				>
					{makeSelect("floor")}
				</select>
				영업 상태:
				<select
					className="business__select--status"
					key={status ? "status_" + status : "status_all"}
					value={status ? status : "all"}
					onChange={(e) => handleChange(e)}
				>
					{makeSelect("status")}
				</select>
				포장 가능 여부:
				<select
					className="business__select--can-takeout"
					key={canTakeout ? "canTakeout_" + canTakeout : "canTakeout_all"}
					value={canTakeout ? canTakeout : "all"}
					onChange={(e) => handleChange(e)}
				>
					{makeSelect("canTakeout")}
				</select>
				정렬 기준:
				<select
					className="business__select--sort-by"
					key={sortBy ? "sortBy_" + sortBy : "sortBy_id"}
					value={sortBy ? sortBy : "id"}
					onChange={(e) => handleChange(e)}
				>
					{makeSelect("sortBy")}
				</select>
				<button type="submit">확인</button>
			</form>
		);
	};

	const makeBusinessList = () => {
		const businessListDom = businessList.map((business) => {
			return (
				<tr key={business.businessId}>
					<td>{business.businessId}</td>
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
							<th className="table-index">ID</th>
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
			<div className="business_link" onClick={() => navigate(`/business-simple?section_name=${sectionName}`)}>
				<h2>간단히</h2>
			</div>
			<br />
			{makeForm()}
			<br />
			{makeBusinessList()}
		</Fragment>
	);
}

export default BusinessAdvanced;
