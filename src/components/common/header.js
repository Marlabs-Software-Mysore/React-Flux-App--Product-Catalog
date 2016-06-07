"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
        var headerstyle = {
            "margin-bottom": "0px"
        };
		return (
        <nav className="navbar navbar-inverse" style={headerstyle}>
          <div className="container">
               <a className="navbar-brand" href="#">React Application Framework</a>
              <ul className="nav navbar-nav">
                <li><Link to="app">Home</Link></li>
              </ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;
