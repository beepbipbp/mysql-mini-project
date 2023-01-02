import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BusinessApi from "../api/business.api.js";

function BusinessAdvanced() {
	const navigate = useNavigate();
	const [businessList, setBusinessList] = useState([]);
}

export default BusinessAdvanced;
