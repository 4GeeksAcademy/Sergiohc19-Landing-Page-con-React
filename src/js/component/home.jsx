import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron"
import Card from "./Card";
import Footer from "./Footer";
//include images into your bundle
//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0" >
			<div className="row">
				<Navbar />
			</div>
			<div className="container mt-5 pt-5">
				<div className="row  d-flex justify-content-center">
					<Jumbotron />
				</div>
				<div className="row d-flex justify-content-center">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div className="row">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
