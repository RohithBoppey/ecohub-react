import React from "react";

import "./Vehicle.css";

const VehicleFullDetails = (props) => {
	console.log(props);
	return (
		<body
			class="bg"
			style={{ backgroundImage: `url(${props.vehicle.img_link})` }}>
			<h1 className="h1-ev">{props.vehicle.title}</h1>
			<div id="footer">
				<div class="row1 el">
					<div class="column1">
						<h2>{props.vehicle.range}</h2>
						<p>Range (EPA est.)</p>
					</div>
					<div class="column1">
						<h2>{props.vehicle.speed}s</h2>
						<p>S0-60 mph*</p>
					</div>
					<div class="column1">
						<h2>{props.vehicle.max_speed} mph</h2>
						<p>Top Speed†</p>
					</div>
					<div class="column1 ">
						<h2>{props.vehicle.p_power} hp</h2>
						<p> Peak Power</p>
					</div>
					<div class="column1 " style={{ marginTop: 10 }}>
						<a
							href={props.vehicle.buy_link}
							target="__blank"
							class="hello ll">
							Order Now
						</a>
					</div>
				</div>
			</div>
		</body>
	);
};

export default VehicleFullDetails;
