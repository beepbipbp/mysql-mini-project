import { createBrowserRouter } from "react-router-dom";

import Main from "./page/main.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
	},
]);

export default router;
