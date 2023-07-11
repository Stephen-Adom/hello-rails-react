import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGreeting } from "../store/features/greetingSlice.js";
import { useQuery } from "react-query";

const Greeting = () => {
	const greeting = useSelector((state) => state.greeting.greeting);
	const dispatch = useDispatch();

	const { data, isLoading } = useQuery(["greeting"], () => {
		return fetch("http://localhost:3000/random").then((res) => res.json());
	});

	useEffect(() => {
		if (data && !isLoading) {
			dispatch(setGreeting(data));
		}
	}, [data]);

	return (
		<div className="Greeting">
			<h1>Greeting: {greeting.title}</h1>
		</div>
	);
};

export default Greeting;
