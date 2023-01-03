import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Business() {
	const navigate = useNavigate();

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
		</Fragment>
	);
}

export default Business;
