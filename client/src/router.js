import { createBrowserRouter } from "react-router-dom";

import Main from "./page/main.js";
import BusinessSimple from "./page/businessSimple.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
	},
	{
		path: "/business-simple",
		element: <BusinessSimple />,
	},
]);

export default router;
