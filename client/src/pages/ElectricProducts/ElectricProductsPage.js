import React from "react";
import NavbarLoggedIn from "../../components/Navbar/NavbarLoggedIn";
import "./PageList.css";

const ElectricProductsPage = (props) => {
	// console.log(props)

	const getMainProduct = (i) => {
		return (
			<div className="col-md-6 col-lg-4 col-xl-3">
				<div className="single-product">
					<div
						className="part-1"
						style={{
							backgroundImage: `url('${props.products[i].img_link}')`,
							backgroundSize: "cover",
							transition: "all 0.3s",
							width: "100%",
						}}>
						<ul>
							<li>
								<a href="#">
									<i className="fas fa-heart"></i>
								</a>
							</li>
						</ul>
					</div>
					<div className="part-2">
						<div className="thumb-content">
							<h4>{props.products[i].name} </h4>
							<p className="item-price">
								<strike>₹ {props.products[i].a_price} </strike>{" "}
								<span>
									&nbsp; ₹ {props.products[i].d_price}
								</span>
							</p>
							<div className="star-rating">
								<ul className="list-inline">
									<li className="list-inline-item">
										<i className="fa fa-star"></i>
									</li>
									<li className="list-inline-item">
										<i className="fa fa-star"></i>
									</li>
									<li className="list-inline-item">
										<i className="fa fa-star"></i>
									</li>
									<li className="list-inline-item">
										<i className="fa fa-star"></i>
									</li>
									<li className="list-inline-item">
										<i className="fa fa-star-half-o"></i>
									</li>
								</ul>
							</div>
							<a
								href="/electric-products/<%= list[i].id %>"
								className="btn btn-primary">
								Add to Cart
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="">
			<NavbarLoggedIn user={props.user} />

			<div className="container-xl">
				<div className="row">
					<div className="col-md-12 ">
						<div className="title-container">
							<h2>
								Featured <b>Products</b>
							</h2>
						</div>
						<div
							id="myCarousel"
							className="carousel slide"
							data-ride="carousel"
							data-interval="0">
							<ol className="carousel-indicators">
								<li
									data-target="#myCarousel"
									data-slide-to="0"
									className="active"></li>
								<li
									data-target="#myCarousel"
									data-slide-to="1"></li>
								<li
									data-target="#myCarousel"
									data-slide-to="2"></li>
							</ol>

							<div className="carousel-inner">
								<div className="item carousel-item active">
									<div className="row">
										{/* Here to */}
										<div className="col-sm-3">
											<div className="thumb-wrapper">
												<span className="wish-icon">
													<i className="fa fa-heart-o"></i>
												</span>
												<div className="img-box">
													<img
														src="https://radiotvcentre.pk/wp-content/uploads/2020/07/HD9303.jpg"
														className="img-fluid"
														alt=""
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{" "}
														{
															props.products[0]
																.name
														}{" "}
													</h4>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<p className="item-price">
														<strike>
															₹
															{
																props
																	.products[0]
																	.a_price
															}
														</strike>{" "}
														<b>
															₹
															{
																props
																	.products[0]
																	.d_price
															}
														</b>
													</p>
													<a
														href="/electric-products/<%= list[0].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>

										<div className="col-sm-3">
											<div className="thumb-wrapper">
												<span className="wish-icon">
													<i className="fa fa-heart-o"></i>
												</span>
												<div className="img-box">
													<img
														src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQrl1LiUpJeH3ge0qlwwNs3m9KdC1_LsUzNZ-aW8NeSD-BMLWKW4N_Q5Htk3nanOfsAD6hWLa4Ccsc&usqp=CAc"
														className="img-fluid"
														alt="Headphone"
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{" "}
														{props.products[1].name}
													</h4>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<p className="item-price">
														<strike>
															₹
															{
																props
																	.products[1]
																	.a_price
															}{" "}
														</strike>{" "}
														<b>
															₹{" "}
															{
																props
																	.products[1]
																	.d_price
															}
														</b>
													</p>
													<a
														href="/electric-products/<%= list[i].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>

										<div className="col-sm-3">
											<div className="thumb-wrapper">
												<span className="wish-icon">
													<i className="fa fa-heart-o"></i>
												</span>
												<div className="img-box">
													<img
														src="https://m.media-amazon.com/images/I/71oq8MxkjRL.AC_UL480_FMwebp_QL65.jpg"
														className="img-fluid"
														alt="Headphone"
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{" "}
														{props.products[2].name}
													</h4>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<p className="item-price">
														<strike>
															₹
															{
																props
																	.products[2]
																	.a_price
															}{" "}
														</strike>{" "}
														<b>
															₹{" "}
															{
																props
																	.products[2]
																	.d_price
															}
														</b>
													</p>
													<a
														href="/electric-products/<%= list[i].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>

										<div className="col-sm-3">
											<div className="thumb-wrapper">
												<span className="wish-icon">
													<i className="fa fa-heart-o"></i>
												</span>
												<div className="img-box">
													<img
														src="https://m.media-amazon.com/images/I/81aC4h5kVAL.AC_UL480_FMwebp_QL65.jpg"
														className="img-fluid"
														alt="Macbook"
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{props.products[3].name}
													</h4>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-half-o"></i>
															</li>
														</ul>
													</div>
													<p className="item-price">
														<strike>
															₹{" "}
															{
																props
																	.products[3]
																	.a_price
															}{" "}
														</strike>{" "}
														<b>
															₹{" "}
															{
																props
																	.products[3]
																	.d_price
															}
														</b>
													</p>
													<a
														href="/electric-products/<%= list[i].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="item carousel-item">
									<div className="row">
										<div className="col-sm-3">
											<div className="thumb-wrapper">
												<span className="wish-icon">
													<i className="fa fa-heart-o"></i>
												</span>
												<div className="img-box">
													<img
														src="https://m.media-amazon.com/images/I/618r1GoN84L.AC_UL480_FMwebp_QL65.jpg"
														className="img-fluid"
														alt="Play Station"
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{props.products[4].name}
													</h4>
													<p className="item-price">
														<strike>
															₹
															{
																props
																	.products[4]
																	.a_price
															}
														</strike>{" "}
														<b>
															₹{" "}
															{
																props
																	.products[4]
																	.d_price
															}
														</b>
													</p>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[i].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="thumb-wrapper">
												<span className="wish-icon">
													<i className="fa fa-heart-o"></i>
												</span>
												<div className="img-box">
													<img
														src="https://m.media-amazon.com/images/I/4161ghQNJYS.AC_UL480_FMwebp_QL65.jpg  "
														className="img-fluid"
														alt="Macbook"
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{props.products[5].name}
													</h4>
													<p className="item-price">
														<strike>
															₹
															{
																props
																	.products[5]
																	.a_price
															}
														</strike>{" "}
														<b>
															₹
															{
																props
																	.products[5]
																	.d_price
															}
														</b>
													</p>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-half-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[i].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="thumb-wrapper">
												<span className="wish-icon">
													<i className="fa fa-heart-o"></i>
												</span>
												<div className="img-box">
													<img
														src="https://m.media-amazon.com/images/I/61u1uk7WZPL.AC_UL480_FMwebp_QL65.jpg"
														className="img-fluid"
														alt="Speaker"
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{props.products[6].name}
													</h4>
													<p className="item-price">
														<strike>
															₹
															{
																props
																	.products[6]
																	.a_price
															}{" "}
														</strike>{" "}
														<b>
															₹
															{
																props
																	.products[6]
																	.d_price
															}
														</b>
													</p>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[i].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="thumb-wrapper">
												<span className="wish-icon">
													<i className="fa fa-heart-o"></i>
												</span>
												<div className="img-box">
													<img
														src="https://m.media-amazon.com/images/I/51Wziq-yXQL.AC_UL480_QL65.jpg"
														className="img-fluid"
														alt="Galaxy"
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{props.products[7].name}
													</h4>
													<p className="item-price">
														<strike>
															₹
															{
																props
																	.products[7]
																	.a_price
															}{" "}
														</strike>{" "}
														<b>
															₹
															{
																props
																	.products[7]
																	.d_price
															}
														</b>
													</p>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[i].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item carousel-item">
									<div className="row">
										<div className="col-sm-3">
											<div className="thumb-wrapper">
												<span className="wish-icon">
													<i className="fa fa-heart-o"></i>
												</span>
												<div className="img-box">
													<img
														src="https://images-eu.ssl-images-amazon.com/images/I/61JM7nC4OKL.AC_UL320_SR320,320.jpg"
														className="img-fluid"
														alt="iPhone"
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{" "}
														{
															props.products[8]
																.name
														}{" "}
													</h4>
													<p className="item-price">
														<strike>
															₹
															{
																props
																	.products[8]
																	.a_price
															}{" "}
														</strike>{" "}
														<b>
															₹{" "}
															{
																props
																	.products[8]
																	.d_price
															}
														</b>
													</p>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[i].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="thumb-wrapper">
												<span className="wish-icon">
													<i className="fa fa-heart-o"></i>
												</span>
												<div className="img-box">
													<img
														src="https://images-eu.ssl-images-amazon.com/images/I/71LIfhSpAYS.AC_UL320_SR320,320.jpg"
														className="img-fluid"
														alt="Canon"
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{props.products[9].name}{" "}
													</h4>
													<p className="item-price">
														<strike>
															₹{" "}
															{
																props
																	.products[9]
																	.a_price
															}{" "}
														</strike>{" "}
														<b>
															₹{" "}
															{
																props
																	.products[9]
																	.d_price
															}
														</b>
													</p>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[i].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="thumb-wrapper">
												<span className="wish-icon">
													<ul>
														<li>
															<a href="#">
																<i className="fas fa-heart"></i>
															</a>
														</li>
													</ul>
												</span>
												<div className="img-box">
													<img
														src="https://m.media-amazon.com/images/I/515DeRX2oqL.AC_UL480_QL65.jpg"
														className="img-fluid"
														alt="Pixel"
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{" "}
														{
															props.products[10]
																.name
														}{" "}
													</h4>
													<p className="item-price">
														<strike>
															₹{" "}
															{
																props
																	.products[10]
																	.a_price
															}{" "}
														</strike>{" "}
														<b>
															₹{" "}
															{
																props
																	.products[10]
																	.d_price
															}
														</b>
													</p>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-half-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[i].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="thumb-wrapper part-1">
												<span className="wish-icon">
													<i className="fa fa-heart-o"></i>
												</span>
												<div className="img-box">
													<img
														src="https://m.media-amazon.com/images/I/61gZ-WIJhML.AC_UL480_QL65.jpg"
														className="img-fluid"
														alt="Watch"
													/>
												</div>
												<div className="thumb-content">
													<h4>
														{
															props.products[11]
																.name
														}
													</h4>
													<p className="item-price">
														<strike>
															₹{" "}
															{
																props
																	.products[11]
																	.a_price
															}
														</strike>{" "}
														<b>
															₹{" "}
															{
																props
																	.products[11]
																	.d_price
															}
														</b>
													</p>
													<div className="star-rating">
														<ul className="list-inline">
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[i].id %>"
														className="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<a
								className="carousel-control-prev"
								href="#myCarousel"
								data-slide="prev">
								<i className="fa fa-angle-left"></i>
							</a>
							<a
								className="carousel-control-next"
								href="#myCarousel"
								data-slide="next">
								<i className="fa fa-angle-right"></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* ----------------------- MAIN PRODCUTS ---------------------------- */}

			<section className="section-products">
				<div className="container item">
					<div className="row justify-content-center text-center">
						<div className="col-md-8 col-lg-6">
							<div className="header">
								<h2>Our Products</h2>
							</div>
						</div>
					</div>
					<div className="row">
						{/* {getRemainingProducts().map((i) => {
							return i;
						})} */}
						{getMainProduct(11)}
						{getMainProduct(12)}
						{getMainProduct(13)}
						{getMainProduct(14)}
						{getMainProduct(15)}
						{getMainProduct(16)}
						{getMainProduct(17)}
						{getMainProduct(18)}
						{getMainProduct(19)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ElectricProductsPage;
