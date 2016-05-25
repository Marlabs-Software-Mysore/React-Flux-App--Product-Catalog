"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var ProductStore = require('../../stores/ProductStore');
var ProductActions = require('../../actions/ProductActions');
var ProductList = require('./ProductList');
var _ = require('lodash');
var ProductPage = React.createClass({
	getInitialState: function() {
		return {
			Products: ProductStore.getAllProducts()
		};
	},

	componentWillMount: function() {
		ProductStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		ProductStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ Products: ProductStore.getAllProducts() });
	},
    
    // doSearch:function(){
    //     debugger;
    //     var query=this.refs.searchInput.getDOMNode().value; // this is the search text
    //    if(this.state.Products.Name.toLowerCase().indexOf(query))
    //    return(
	// 			<ProductList Products={this.state.Products} />
           
    //    )
    // },
    
	render: function() {
		return (
			<div className="col-md-12">
				<ProductList Products={this.state.Products} />
			</div>
		);
	}
});

module.exports = ProductPage;