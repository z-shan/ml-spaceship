"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
            <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link className="page-scroll" to="about">About</Link>
                            </li>
                            <li>
                                <Link className="page-scroll" to="app">Home</Link>
                            </li>
                            <li>
                                <Link className="page-scroll" to="shop">Shop</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
		);
	}
});

module.exports = Header;
