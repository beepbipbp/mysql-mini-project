import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BusinessApi from "../api/business.api.js";
import { selectListEnum, selectClassEnum, sortByEnum } from "../enum/selectEnum.js";

function BusinessAdvanced() {
	const navigate = useNavigate();
	let sectionName, floor, status, canTakeout, sortBy;

	const [sectionNameSelected, setSectionNameSelected] = useState("");
	const [floorSelected, setFloorSelected] = useState("");
	const [statusSelected, setStatusSelected] = useState("");
	const [canTakeoutSelected, setCanTakeoutSelected] = useState("");
	const [sortBySelected, setSortBySelected] = useState("");
	const [businessList, setBusinessList] = useState([]);

	window.location.search
		.slice(1)
		.split("&")
		.forEach((query) => {
			const [queryParameter, queryValue] = query.split("=");
			switch (queryParameter) {
				case "section_name":
					sectionName = decodeURI(queryValue);
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

	const handleChange = (event) => {
		const className = event.target.className;

		switch (className) {
			case "business__select--section-name":
				setSectionNameSelected(event.target.value);
				break;
			case "business__select--floor":
				setFloorSelected(event.target.value);
				break;
			case "business__select--status":
				setStatusSelected(event.target.value);
				break;
			case "business__select--can-takeout":
				setCanTakeoutSelected(event.target.value);
				break;
			case "business__select--sort-by":
				setSortBySelected(event.target.value);
				break;
		}
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
			<form className="business__form">
				<select
					className="business__select--section-name"
					key={"sectionName_" + sectionName}
					value={sectionNameSelected ? sectionNameSelected : sectionName}
					onChange={(e) => handleChange(e)}
				>
					{makeSelect("sectionName")}
				</select>
				<select
					className="business__select--floor"
					key={floor ? "floor_" + floor : "floor_all"}
					value={floorSelected ? floorSelected : floor ? floor : "all"}
					onChange={(e) => handleChange(e)}
				>
					{makeSelect("floor")}
				</select>
				<select
					className="business__select--status"
					key={status ? "status_" + status : "status_all"}
					value={statusSelected ? statusSelected : status ? status : "all"}
					onChange={(e) => handleChange(e)}
				>
					{makeSelect("status")}
				</select>
				<select
					className="business__select--can-takeout"
					key={canTakeout ? "canTakeout_" + canTakeout : "canTakeout_all"}
					value={canTakeoutSelected ? canTakeoutSelected : canTakeout ? canTakeout : "all"}
					onChange={(e) => handleChange(e)}
				>
					{makeSelect("canTakeout")}
				</select>
				<select
					className="business__select--sort-by"
					key={sortBy ? "sortBy_" + sortBy : "sortBy_id"}
					value={sortBySelected ? sortBySelected : sortBy ? sortBy : "id"}
					onChange={(e) => handleChange(e)}
				>
					{makeSelect("sortBy")}
				</select>
			</form>
		</Fragment>
	);
}

export default BusinessAdvanced;
