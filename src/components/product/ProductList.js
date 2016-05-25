"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Navigation = Router.Navigation;
var ProductActions = require('../../actions/ProductActions');
var Input = require('../common/textInput');

var toastr = require('toastr');

var ProductList = React.createClass({
	propTypes: {
		Products: React.PropTypes.array.isRequired
	},

	deleteProduct: function(id, event) {
		event.preventDefault();
		ProductActions.deleteProduct(id);
		toastr.success('Product Deleted');
	},

	render: function() {
         var requiredDivStyle = {
          "border": "1px solid #9badb4",
          "border-top": "5px solid #9badb4",
          "border-radius": "0"
        };
      var imgStyle = {
          "width": "150px",
          "height": "150px"
      };
       var carouselImageStyle = {
         "height": "350px",
         "width": "100%"
      };
      
		var createProductRow = function(Product) {
			return (
                <div className="col-md-3" style={requiredDivStyle}>
                <Link to="manageProduct" params={{id: Product.id}}><img style={imgStyle} className="img-responsive" src={Product.Image}/></Link>
                    <h3>{Product.Name}</h3>
                    <h3>{Product.Price}</h3>
                    <p>{Product.Description}</p>
                </div>
			);
		};
		return (
			<div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                     <div id="myCarousel" className="carousel slide " data-ride="carousel">
                         <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                         </ol>
                            <div className="carousel-inner" role="listbox">
                            <div className="item active">
                            <img style={carouselImageStyle} src="images/reactjsimage.jpg" />
                             <div className="carousel-caption">
                            <p>React (sometimes styled React.js or ReactJS) is an open-source JavaScript library providing a view for data, rendered as HTML. 
                             React views are typically rendered using components that contain additional components specified as custom HTML tags.
                            </p>
                            <a className="btn btn-default" target="_blank" href="https://facebook.github.io/react/docs/tutorial.html">Learn more</a>
                            </div>
                            </div>
                        <div className="item">
                            <img style={carouselImageStyle} src="images/flux-logo1.png"/>
                            <div className="carousel-caption">
                          <h3>Flux Architercture</h3>
                            <p>Flux is the application architecture that Facebook uses for building client-side web applications.
                            </p>
                            <a className="btn btn-default" target="_blank" href="https://facebook.github.io/flux/docs/overview.html">Learn more</a>
                            </div>
                        </div>
                        
                        <div className="item">
                             <img style={carouselImageStyle} src="images/nodejs-frameworks.png"/>
                               <div className="carousel-caption">
                            <p>
                             In software development, Node.js is an open-source, cross-platform runtime environment for developing server-side Web applications.
                            </p>
                            <a className="btn btn-default" target="_blank" href="http://www.tutorialspoint.com/nodejs/">Learn more</a>
                            </div>
                        </div>
                        </div>

                        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
                  </div>
                 </div>
                 
             <div className="row">
                <div className="col-md-3">
                    <h2>Application uses</h2>
                    <ul>
                         <li><a href="https://facebook.github.io/react/docs/tutorial.html">React Js</a> is a JavaScript library for creating user interfaces by Facebook</li>
                        <li><a href="https://facebook.github.io/flux/docs/overview.html"> Flux architecture </a> uses for building client-side web applications</li>
                        <li><a href="http://go.microsoft.com/fwlink/?LinkId=518007">Gulp</a> and <a href="http://go.microsoft.com/fwlink/?LinkId=518004">Node</a> for managing client-side libraries</li>
                       <li>Theming using <a href="http://go.microsoft.com/fwlink/?LinkID=398939">Bootstrap</a></li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <h1>Product List</h1>
                    {this.props.Products.map(createProductRow, this)}
                </div>
            </div>
            </div>
		);
	}
});

module.exports = ProductList;