import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div className="first-div">hello react!</div>,
	},
]);

export default router;
