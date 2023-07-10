// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.js";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
