"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Navigation = Router.Navigation;
var ProductActions = require('../../actions/ProductActions');
var Input = require('../common/textInput');

var toastr = require('toastr');

var ProductList = React.createClass({
     getInitialState: function(){
		return {
            hovered: false,            
            TProducts: this.props.Products
        };
	},

	deleteProduct: function(id, event) {
		event.preventDefault();
		ProductActions.deleteProduct(id);
		toastr.success('Product Deleted');
	},
   
    handleChange: function(e){
        var searchString = e.target.value.toLowerCase();                      
        if(searchString.length > 0){
            var tempProducts = this.state.TProducts;
            tempProducts = tempProducts.filter(function(l){
                return l.Name.toLowerCase().match(searchString);
            });
            this.setState({TProducts: tempProducts});
        }
        else if(searchString.length === 0){
            this.setState({TProducts: this.props.Products});
        }                          
    },
	render: function() {        
         var requiredDivStyle = {
          "border": "1px solid #9badb4",
          "border-top": "5px solid #9badb4",
          "border-radius": "30"
        };
      var imgStyle = {
          "width": "150px",
          "height": "150px"
      };
        var imgStyle1 = {
          "width": "100%"
      };
        var divStyle = {
          "height": "400px"
      };
       var imgStyle2 = {
         "height": "400px",
         "width": "100%"
      };
      var paragraphStyle = {
          "font-size": "20px"
      };
      var thumnailStyle = {
         "border": "1px solid #9badb4",
      "border-radius": "30px",  
      "background": "#f3f3f3"
      };
		var createProductRow = function(Product) {
			return (
                <div className="col-md-3 col-md-offset-1">
                       <div className="thumbnail">
                            <Link to="manageProduct" params={{id: Product.id}}><img style={imgStyle} className="img-responsive" src={Product.Image} /></Link>
                            <h3>{Product.Name}</h3>
                            <h3>{Product.Price}</h3>
                            <p>{Product.Description}</p>
                     </div>
                </div>
			);
		};
		return (
			<div className="container-fluid">
                <div className="row">
                    
                     <div id="myCarousel" className="carousel slide" data-ride="carousel">
                         <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                         </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                         <img style={imgStyle2} src="images/reactjsimage.jpg" />
                                              <div className="carousel-caption">
                                                <p style={paragraphStyle}> React is an open-source JavaScript library. 
                                                </p>
                                      <br/>
                                             <a className="btn btn-default" target="_blank" href="https://facebook.github.io/react/docs/tutorial.html">Learn more</a>
                                            </div>
                                    </div>
                                    <div className="item">
                                        <img style={imgStyle2} src="images/fluxArchitecture.png"/>
                                        <div className="carousel-caption">
                                    <h3>Flux Architercture</h3>
                                    <br/>
                                        <p style={paragraphStyle}>Flux architecture  uses for building client-side web applications. </p>
                                        <br/>
                                        <a className="btn btn-default" target="_blank" href="https://facebook.github.io/flux/docs/overview.html">Learn more</a>
                                        </div>
                                    </div>
                                    
                                    <div className="item">
                                        <img style={imgStyle2} src="images/nodejs-frameworks.png"/>
                                        <div className="carousel-caption">
                                        <p style={paragraphStyle}>
                                        Node.js is a very powerful JavaScript-based framework/platform.
                                        </p>
                                        <br/>
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
                            <div className="row">
                                 <div className="col-md-3">
                                     <h2>Application uses</h2>
                                         <ul className="app-uses">
                                                <li><a href="https://facebook.github.io/react/docs/tutorial.html">React Js</a> is a JavaScript library for creating user interfaces by Facebook</li>
                                                <li><a href="https://facebook.github.io/flux/docs/overview.html"> Flux architecture </a> uses for building client-side web applications</li>
                                                <li><a href="http://go.microsoft.com/fwlink/?LinkId=518007">Gulp</a> and <a href="http://go.microsoft.com/fwlink/?LinkId=518004">Node</a> for managing client-side libraries</li>
                                                <li>Theming using <a href="http://go.microsoft.com/fwlink/?LinkID=398939">Bootstrap</a></li>
                                        </ul>
                                </div>
                                <br/>
                          <div className="col-md-9">
                          <div className="row">
                          <div className="col-md-3">
                                <h2>Product List</h2>
                          </div>
                          <div className="col-md-3 col-md-offset-6">
                            <span id="lnkAddProduct">
                                    <Link to="addProduct" className="btn btn-primary">Add Product</Link>
                            </span>
                          </div>
                          </div>
                             <div className="row">
                                 <div className="col-md-4">
                                     <div className="input-group">
                                        <input type="text" className="form-control" onChange={this.handleChange} ref="bookTitleInput" placeholder="Search product name" />
                                             <span className="input-group-addon">
                                            <i className="glyphicon glyphicon-search"></i>
                                             </span>    
                            </div>
                        </div>
                    </div>
                <br/>
                <div className="row">                
                     {this.state.TProducts.map(createProductRow, this)}                   
                </div>
              </div>
         </div>
    </div>
		);
	}
});

module.exports = ProductList;