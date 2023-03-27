import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export default function HomePage(props) {
	const [age, setAge] = useState(10);

	const changeAge = () => {
		setAge("ten");
	};

	const handleOnChange = (event) => {
		console.log(event.target.vale);
	};

	const fetchData = async () => {
		const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
		const data = res.data;
		console.log(data);
	};

	useEffect(() => {
		changeAge();
		fetchData();
	}, []);

	return (
		<div>
			<h3>HomePage</h3>
			<p>{props.name}</p>
			<p>{age / 10}</p>
			<input type="text" onChange={handleOnChange} />
			<Button>submit</Button>
		</div>
	);
}
