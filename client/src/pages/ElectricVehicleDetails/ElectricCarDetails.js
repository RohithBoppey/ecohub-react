import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VehicleFullDetails from "./VehicleFullDetails";

const ElectricCarDetails = () => {
	const { name } = useParams();
	// console.log(name);

	const [vehicleDetails, setVehicleDetails] = useState();

	const getDetails = async () => {
		const allVehicles = await fetch("http://localhost:3001/vehicles");
		const allVehiclesJSON = await allVehicles.json();
		console.log(allVehiclesJSON);
		const requriedVehicle = allVehiclesJSON.filter(
			(veh) => veh.slug === name
		);
		console.log(requriedVehicle[0]);
		setVehicleDetails(requriedVehicle[0]);
	};

	useEffect(() => {
		getDetails(name);
	}, []);

	const vehDetails =
		vehicleDetails === undefined ? (
			<>Loading</>
		) : (
			<VehicleFullDetails vehicle={vehicleDetails} />
		);
	// return <VehicleFullDetails vehicle={vehicleDetails} />;
	// return <>hello</>;
	return vehDetails;
};

export default ElectricCarDetails;
