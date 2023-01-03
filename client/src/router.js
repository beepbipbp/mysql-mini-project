import { createBrowserRouter } from "react-router-dom";

import Main from "./page/main.js";
import BusinessSimple from "./page/businessSimple.js";
import BusinessAdvanced from "./page/businessAdvanced.js";
import Business from "./page/business.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
	},
	{
		path: "/business-simple",
		element: <BusinessSimple />,
	},
	{
		path: "/business-advanced",
		element: <BusinessAdvanced />,
	},
	{
		path: "/business",
		element: <Business />,
	},
]);

export default router;
