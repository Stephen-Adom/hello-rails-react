import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Greeting from "../components/greeting";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Greeting />,
			},
		],
	},
]);

export default router;
