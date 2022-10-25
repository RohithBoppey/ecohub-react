import React from "react";
import { useParams } from "react-router-dom";

const ElectricCarDetails = () => {
	const { name } = useParams();
	console.log(name);

	return <div>ElectricCarDetails</div>;
};

export default ElectricCarDetails;
