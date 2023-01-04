import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BusinessApi from "../api/business.api.js";

function Business() {
	const navigate = useNavigate();

	const [businessDetails, setBusinessDetails] = useState({});
	const [businessMenuList, setBusinessMenuList] = useState([]);
	const [businessRatingList, setBusinessRatingList] = useState([]);

	const businessId = window.location.search.slice(1).split("=")[1];

	useEffect(() => {
		const fetchBusinessDetails = async () => {
			const result = await BusinessApi.getBusinessDetails(businessId);
			setBusinessDetails(result.businessDetails);
			setBusinessMenuList(result.businessMenuList);
			setBusinessRatingList(result.businessRatingList);
		};
		fetchBusinessDetails();
	}, []);

	const makeBusinessDetails = () => {
		return (
			<Fragment>
				<h1>업소 정보</h1>
				<table>
					<tbody>
						<tr>
							<td className="table-index">업소명</td>
							<td>{businessDetails.businessName}</td>
						</tr>
						<tr>
							<td className="table-index">음식 종류</td>
							<td>{businessDetails.sectionName}</td>
						</tr>
						<tr>
							<td className="table-index">영업 상태</td>
							<td>{businessDetails.status}</td>
						</tr>
						<tr>
							<td className="table-index">포장 가능 여부</td>
							<td>{businessDetails.canTakeout ? "가능" : "불가능"}</td>
						</tr>
					</tbody>
				</table>
			</Fragment>
		);
	};

	const makeMenuList = () => {
		const menuListDom = businessMenuList.map((menu) => {
			return (
				<tr key={menu.menuId}>
					<td>{menu.menuName}</td>
					<td>{menu.price}</td>
					<td>{menu.kilocalories}</td>
					<td>
						{menu.likes}
						<span className="likes__button">
							<button value="plus"> + </button>
							<button value="minus"> - </button>
						</span>
					</td>
				</tr>
			);
		});
		return (
			<Fragment>
				<h1>메뉴</h1>
				<table>
					<thead>
						<tr>
							<th className="table-index">메뉴명</th>
							<th className="table-index">가격(원)</th>
							<th className="table-index">칼로리(kcal)</th>
							<th className="table-index">좋아요</th>
						</tr>
					</thead>
					<tbody>{menuListDom}</tbody>
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
			<div className="business_link" onClick={() => navigate(-1)}>
				<h2>목록 페이지로</h2>
			</div>
			<br />
			{makeBusinessDetails()}
			<br />
			{makeMenuList()}
		</Fragment>
	);
}

export default Business;
