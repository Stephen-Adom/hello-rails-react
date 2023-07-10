import React from "react";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<main className="mt-[4rem]">
				<Outlet />
			</main>
		</div>
	);
}

export default App;
