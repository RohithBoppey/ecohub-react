import React from "react";
import Navbarloggedin from "../../components/Navbar/NavbarLoggedIn";

import "./ArticleCSS.css";

const ArticlesPage = () => {
	const articles = [
		{
			heading:
				"Maruti Launches new electric cars and bikes in the industry.",
			article: `Suzuki Motor, parent of India's largest
            automaker Maruti Suzuki, announced on Sunday
            that it would invest Rs 10,440 crore to build a
            new electric car and battery factory in India.
            Maruti Suzuki, which sells one in every two cars
            on Indian roads, is expecting to roll out
            affordable EV models in both Japan and India as
            early as 2025. The Japanese automaker intends to
            invest around Rs 3,000 crore for the new plant
            to increase production of electric vehicles in
            India, and Rs 7,300 crore to manufacture
            electric batteries. Sunday's announcement is the
            first firm commitment on electrification by
            India's largest carmaker, which has maintained
            that the Indian market isn't ready for EV sales
            yet.`,
		},
		{
			heading: `Home Electrification Innovator SPAN Raises $90
            Million in Series B to Accelerate Next Generation of
            EV Charging.`,
			article: `SPAN, an innovator in the home energy management
            space, is led by a seasoned team of executives
            and engineers from Tesla, Sunrun, and Amazon.
            With its flagship product the SPAN smart
            electrical panel, the Company recently
            celebrated wins for “Best Home Technology
            Product” and “Best Energy Efficient Product” at
            the NAHB International Builders' Show® 2022 Best
            of IBS Awards. Fast Company also named SPAN one
            of their 2022 “World's Most Innovative
            Companies.” “We started with reinventing the
            electrical panel, as it is the core component to
            any scalable path to electrification of homes,
            but the consumer experience demands more,” says
            Arch Rao, CEO and founder of SPAN. “We're
            excited to deploy this new capital to expand our
            product offerings that simplify the
            decarbonization of homes, and to continue
            developing the unparalleled approach to home
            energy management that SPAN is uniquely
            positioned to deliver.”`,
		},
	];
	return (
		<div>
            <Navbarloggedin />
			<div class="container-md-fluid">
				<div class="row">
					<div class="col-10">
						<p class="mainHeading">
							Subscribe to our newsletter? Get the news delivered
							to you right now at your mail?
						</p>
					</div>
					<div class="col-2">
						<div class="form-group">
							<div class="checkbox checbox-switch switch-primary">
								<label>
									<input type="checkbox" name="" />
									<span></span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div class="container">
				<div class="row">
					<div class="col-md-4 articleBox">
						<h2>
							Maruti Launches new electric cars and bikes in the
							industry.
						</h2>
						<div id="summary">
							<p
								class="collapse articleText"
								id="collapseSummary1">
								Suzuki Motor, parent of India's largest
								automaker Maruti Suzuki, announced on Sunday
								that it would invest Rs 10,440 crore to build a
								new electric car and battery factory in India.
								Maruti Suzuki, which sells one in every two cars
								on Indian roads, is expecting to roll out
								affordable EV models in both Japan and India as
								early as 2025. The Japanese automaker intends to
								invest around Rs 3,000 crore for the new plant
								to increase production of electric vehicles in
								India, and Rs 7,300 crore to manufacture
								electric batteries. Sunday's announcement is the
								first firm commitment on electrification by
								India's largest carmaker, which has maintained
								that the Indian market isn't ready for EV sales
								yet.
							</p>
							<a
								class="collapsed"
								data-toggle="collapse"
								href="#collapseSummary1"
								aria-expanded="false"
								aria-controls="collapseSummary"></a>
						</div>
					</div>
				</div>
			</div>

			<div class="container">
				<div class="row">
					<div class="col-md-4 articleBox">
						<h2>
							Home Electrification Innovator SPAN Raises $90
							Million in Series B to Accelerate Next Generation of
							EV Charging.
						</h2>
						<div id="summary">
							<p
								class="collapse articleText"
								id="collapseSummary2">
								SPAN, an innovator in the home energy management
								space, is led by a seasoned team of executives
								and engineers from Tesla, Sunrun, and Amazon.
								With its flagship product the SPAN smart
								electrical panel, the Company recently
								celebrated wins for “Best Home Technology
								Product” and “Best Energy Efficient Product” at
								the NAHB International Builders' Show® 2022 Best
								of IBS Awards. Fast Company also named SPAN one
								of their 2022 “World's Most Innovative
								Companies.” “We started with reinventing the
								electrical panel, as it is the core component to
								any scalable path to electrification of homes,
								but the consumer experience demands more,” says
								Arch Rao, CEO and founder of SPAN. “We're
								excited to deploy this new capital to expand our
								product offerings that simplify the
								decarbonization of homes, and to continue
								developing the unparalleled approach to home
								energy management that SPAN is uniquely
								positioned to deliver.”
							</p>
							<a
								class="collapsed"
								data-toggle="collapse"
								href="#collapseSummary2"
								aria-expanded="false"
								aria-controls="collapseSummary"></a>
						</div>
					</div>
				</div>
			</div> */}
			{articles.map((article) => (
				<div class="container">
					<div class="row">
						<div class="col-md-4 articleBox">
							<h2>{article.heading}</h2>
							<div id="summary">
								<p
									class="collapse articleText"
									id="collapseSummary2">
									{article.article}
								</p>
								<a
									class="collapsed"
									data-toggle="collapse"
									href="#collapseSummary2"
									aria-expanded="false"
									aria-controls="collapseSummary"></a>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ArticlesPage;
