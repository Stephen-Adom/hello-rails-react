import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGreeting } from "../store/features/greetingSlice.js";

const Greeting = () => {
	const greeting = useSelector((state) => state.greeting.greeting);
	const dispatch = useDispatch();

	return (
		<div className="Greeting">
			<main className="mt-[4rem]">{greeting}</main>
			<button aria-label="Increment value" onClick={() => dispatch(setGreeting())}>
				Set Greeting
			</button>
		</div>
	);
};

export default Greeting;
