"use strict";

var React = require('react');

var About = React.createClass({
	render: function () {
		return (
			<section id="about" className="container content-section text-center">
				<div className="row">
					<div className="col-lg-8 col-lg-offset-2">
						<h2>We are changing how SpaceShips are bought & sold</h2>
						<p>We are a used spaceship emporium. We are here to help you with your need for economic spaceships.</p>
						<p>We have large variety of spaceships from Space and Lunar shuttles to Interplanetary, Interstellar and Intergalactic shuttles to fit everyones budget.</p>
						<p>We shelf space fighters too but would need InterGalaxian Authority Clearance for ride and purchase.</p>
					</div>
				</div>
			</section>
		); 
	}
});

module.exports = About;