import React from "react";
import NavbarLoggedIn from "../../components/Navbar/NavbarLoggedIn";
import "./PageList.css";

const ElectricProductsPage = (props) => {
	return (
		<div className="">
			<NavbarLoggedIn user = {props.user}/>

			<div class="container-xl">
				<div class="row">
					<div class="col-md-12 ">
						<div className="title-container">
						<h2>
							Featured <b>Products</b>
						</h2>

						</div>
						<div
							id="myCarousel"
							class="carousel slide"
							data-ride="carousel"
							data-interval="0">
							<ol class="carousel-indicators">
								<li
									data-target="#myCarousel"
									data-slide-to="0"
									class="active"></li>
								<li
									data-target="#myCarousel"
									data-slide-to="1"></li>
								<li
									data-target="#myCarousel"
									data-slide-to="2"></li>
							</ol>

							<div class="carousel-inner">
								<div class="item carousel-item active">
									<div class="row">
										<div class="col-sm-3">
											<div class="thumb-wrapper">
												<span class="wish-icon">
													<i class="fa fa-heart-o"></i>
												</span>
												<div class="img-box">
													<img
														src="https://radiotvcentre.pk/wp-content/uploads/2020/07/HD9303.jpg"
														class="img-fluid"
														alt=""
													/>
												</div>
												<div class="thumb-content">
													<h4> list[0].name </h4>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<p class="item-price">
														<strike>
															₹list[0].a_price{" "}
														</strike>{" "}
														<b>₹ list[0].d_price</b>
													</p>
													<a
														href="/electric-products/<%= list[0].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="thumb-wrapper">
												<span class="wish-icon">
													<i class="fa fa-heart-o"></i>
												</span>
												<div class="img-box">
													<img
														src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQrl1LiUpJeH3ge0qlwwNs3m9KdC1_LsUzNZ-aW8NeSD-BMLWKW4N_Q5Htk3nanOfsAD6hWLa4Ccsc&usqp=CAc"
														class="img-fluid"
														alt="Headphone"
													/>
												</div>
												<div class="thumb-content">
													<h4> list[1].name</h4>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<p class="item-price">
														<strike>
															₹list[1].a_price{" "}
														</strike>{" "}
														<b>₹ list[1].d_price</b>
													</p>
													<a
														href="/electric-products/<%= list[1].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="thumb-wrapper">
												<span class="wish-icon">
													<i class="fa fa-heart-o"></i>
												</span>
												<div class="img-box">
													<img
														src="https://m.media-amazon.com/images/I/71oq8MxkjRL.AC_UL480_FMwebp_QL65.jpg"
														class="img-fluid"
														alt="Macbook"
													/>
												</div>
												<div class="thumb-content">
													<h4>list[2].name</h4>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-half-o"></i>
															</li>
														</ul>
													</div>
													<p class="item-price">
														<strike>
															₹ list[2].a_price{" "}
														</strike>{" "}
														<b>₹ list[2].d_price</b>
													</p>
													<a
														href="/electric-products/<%= list[2].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="thumb-wrapper">
												<span class="wish-icon">
													<i class="fa fa-heart-o"></i>
												</span>
												<div class="img-box">
													<img
														src="https://m.media-amazon.com/images/I/81aC4h5kVAL.AC_UL480_FMwebp_QL65.jpg"
														class="img-fluid"
														alt="Nikon"
													/>
												</div>
												<div class="thumb-content">
													<h4>list[3].name</h4>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-o"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<p class="item-price">
														<strike>
															₹list[3].a_price{" "}
														</strike>{" "}
														<b>₹list[3].d_price</b>
													</p>
													<a
														href="/electric-products/<%= list[3].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="item carousel-item">
									<div class="row">
										<div class="col-sm-3">
											<div class="thumb-wrapper">
												<span class="wish-icon">
													<i class="fa fa-heart-o"></i>
												</span>
												<div class="img-box">
													<img
														src="https://m.media-amazon.com/images/I/618r1GoN84L.AC_UL480_FMwebp_QL65.jpg"
														class="img-fluid"
														alt="Play Station"
													/>
												</div>
												<div class="thumb-content">
													<h4>list[4].name</h4>
													<p class="item-price">
														<strike>
															₹list[4].a_price
														</strike>{" "}
														<b>₹ list[4].d_price</b>
													</p>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[4].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="thumb-wrapper">
												<span class="wish-icon">
													<i class="fa fa-heart-o"></i>
												</span>
												<div class="img-box">
													<img
														src="https://m.media-amazon.com/images/I/4161ghQNJYS.AC_UL480_FMwebp_QL65.jpg  "
														class="img-fluid"
														alt="Macbook"
													/>
												</div>
												<div class="thumb-content">
													<h4>list[5].name</h4>
													<p class="item-price">
														<strike>
															₹list[5].a_price
														</strike>{" "}
														<b>₹list[5].d_price</b>
													</p>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-half-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[5].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="thumb-wrapper">
												<span class="wish-icon">
													<i class="fa fa-heart-o"></i>
												</span>
												<div class="img-box">
													<img
														src="https://m.media-amazon.com/images/I/61u1uk7WZPL.AC_UL480_FMwebp_QL65.jpg"
														class="img-fluid"
														alt="Speaker"
													/>
												</div>
												<div class="thumb-content">
													<h4>list[6].name</h4>
													<p class="item-price">
														<strike>
															₹list[6].a_price{" "}
														</strike>{" "}
														<b>₹list[6].d_price</b>
													</p>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[6].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="thumb-wrapper">
												<span class="wish-icon">
													<i class="fa fa-heart-o"></i>
												</span>
												<div class="img-box">
													<img
														src="https://m.media-amazon.com/images/I/51Wziq-yXQL.AC_UL480_QL65.jpg"
														class="img-fluid"
														alt="Galaxy"
													/>
												</div>
												<div class="thumb-content">
													<h4>list[7].name</h4>
													<p class="item-price">
														<strike>
															₹list[7].a_price{" "}
														</strike>{" "}
														<b>₹list[7].d_price</b>
													</p>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[7].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="item carousel-item">
									<div class="row">
										<div class="col-sm-3">
											<div class="thumb-wrapper">
												<span class="wish-icon">
													<i class="fa fa-heart-o"></i>
												</span>
												<div class="img-box">
													<img
														src="https://images-eu.ssl-images-amazon.com/images/I/61JM7nC4OKL.AC_UL320_SR320,320.jpg"
														class="img-fluid"
														alt="iPhone"
													/>
												</div>
												<div class="thumb-content">
													<h4> list[8].name </h4>
													<p class="item-price">
														<strike>
															₹list[8].a_price{" "}
														</strike>{" "}
														<b>₹ list[8].d_price</b>
													</p>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[8].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="thumb-wrapper">
												<span class="wish-icon">
													<i class="fa fa-heart-o"></i>
												</span>
												<div class="img-box">
													<img
														src="https://images-eu.ssl-images-amazon.com/images/I/71LIfhSpAYS.AC_UL320_SR320,320.jpg"
														class="img-fluid"
														alt="Canon"
													/>
												</div>
												<div class="thumb-content">
													<h4>list[9].name </h4>
													<p class="item-price">
														<strike>
															₹ list[9].a_price{" "}
														</strike>{" "}
														<b>₹ list[9].d_price</b>
													</p>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[9].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="thumb-wrapper">
												<span class="wish-icon">
													<ul>
														<li>
															<a href="#">
																<i class="fas fa-heart"></i>
															</a>
														</li>
													</ul>
												</span>
												<div class="img-box">
													<img
														src="https://m.media-amazon.com/images/I/515DeRX2oqL.AC_UL480_QL65.jpg"
														class="img-fluid"
														alt="Pixel"
													/>
												</div>
												<div class="thumb-content">
													<h4> list[10].name </h4>
													<p class="item-price">
														<strike>
															₹ list[10].a_price{" "}
														</strike>{" "}
														<b>
															₹ list[10].d_price
														</b>
													</p>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-half-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[10].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="thumb-wrapper part-1">
												<span class="wish-icon">
													<i class="fa fa-heart-o"></i>
												</span>
												<div class="img-box">
													<img
														src="https://m.media-amazon.com/images/I/61gZ-WIJhML.AC_UL480_QL65.jpg"
														class="img-fluid"
														alt="Watch"
													/>
												</div>
												<div class="thumb-content">
													<h4>list[11].name</h4>
													<p class="item-price">
														<strike>
															₹ list[11].a_price
														</strike>{" "}
														<b>
															₹ list[11].d_price
														</b>
													</p>
													<div class="star-rating">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star-o"></i>
															</li>
														</ul>
													</div>
													<a
														href="/electric-products/<%= list[11].id %>"
														class="btn btn-primary">
														Add to Cart
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<a
								class="carousel-control-prev"
								href="#myCarousel"
								data-slide="prev">
								<i class="fa fa-angle-left"></i>
							</a>
							<a
								class="carousel-control-next"
								href="#myCarousel"
								data-slide="next">
								<i class="fa fa-angle-right"></i>
							</a>
						</div>
					</div>
				</div>
			</div>














			<section class="section-products">
				<div class="container item">
					<div class="row justify-content-center text-center">
						<div class="col-md-8 col-lg-6">
							<div class="header">
								<h2>Our Products</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-1" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4>list[12].name </h4>
										<p class="item-price">
											<strike> list[12].a_price </strike>{" "}
											<span> list[12].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[12].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-2" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4>list[13].name</h4>
										<p class="item-price">
											<strike> list[13].a_price</strike>{" "}
											<span>list[13].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[13].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-3" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4>list[14].name </h4>
										<p class="item-price">
											<strike> list[14].a_price</strike>{" "}
											<span>list[14].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[14].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-4" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4>list[15].name </h4>
										<p class="item-price">
											<strike> list[15].a_price</strike>{" "}
											<span> list[15].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[15].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-5" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4> list[16].name</h4>
										<p class="item-price">
											<strike> list[16].a_price</strike>{" "}
											<span> list[16].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[16].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-6" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4>list[17].name</h4>
										<p class="item-price">
											<strike>list[17].a_price</strike>{" "}
											<span> list[17].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[17].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-7" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4>list[18].name</h4>
										<p class="item-price">
											<strike> list[18].a_price</strike>{" "}
											<span> list[18].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[18].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-8" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4>list[19].name</h4>
										<p class="item-price">
											<strike>list[19].a_price</strike>{" "}
											<span> list[19].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[19].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-9" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4> list[20].name</h4>
										<p class="item-price">
											<strike> list[20].a_price</strike>{" "}
											<span> list[20].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[20].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-10" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4>list[21].name</h4>
										<p class="item-price">
											<strike> list[21].a_price</strike>{" "}
											<span>list[21].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[21].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-11" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4> list[22].name</h4>
										<p class="item-price">
											<strike> list[22].a_price </strike>{" "}
											<span> list[22].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[22].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 col-xl-3">
							<div id="product-12" class="single-product">
								<div class="part-1">
									<ul>
										<li>
											<a href="#">
												<i class="fas fa-heart"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="part-2">
									<div class="thumb-content">
										<h4> list[23].name</h4>
										<p class="item-price">
											<strike> list[23].a_price</strike>{" "}
											<span> list[23].d_price</span>
										</p>
										<div class="star-rating">
											<ul class="list-inline">
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star"></i>
												</li>
												<li class="list-inline-item">
													<i class="fa fa-star-half-o"></i>
												</li>
											</ul>
										</div>
										<a
											href="/electric-products/<%= list[23].id %>"
											class="btn btn-primary">
											Add to Cart
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ElectricProductsPage;
