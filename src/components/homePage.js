"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function() {
		return (
			<header className="homepage intro">
				<div className="intro-body">
					<div className="container">
						<div className="row">
							<div className="col-md-8 col-md-offset-2">
								<h1>Welcome to Watto's Spaceship Emporium</h1>
								<p className="intro-text">Let's Shop</p>
								<Link to="shop" className="btn btn-circle page-scroll">
									<i className="fa fa-angle-double-down animated"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
});

module.exports = Home;
