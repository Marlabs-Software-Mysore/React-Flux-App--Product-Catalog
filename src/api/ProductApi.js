"use strict";

//This file is mocking a web API by hitting hard coded data.
var Products = require('./ProductData').Products;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(Product) {
	return Product.Name.toLowerCase() + '-' + Product.Description.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var ProductApi = {
	getAllProducts: function() {
		return _clone(Products); 
	},

	getProductById: function(id) {
		var Product = _.find(Products, {id: id});
		return _clone(Product);
	},
	
	saveProduct: function(Product) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the Product to the DB via AJAX call...');
		
		if (Product.id) {
			var existingProductIndex = _.indexOf(Products, _.find(Products, {id: Product.id})); 
			Products.splice(existingProductIndex, 1, Product);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new Products in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			Product.id = _generateId(Product);
            Product.Image = "images/product-icon.png";
			Products.push(Product);
		}

		return _clone(Product);
	},

	deleteProduct: function(id) {
		console.log('Pretend this just deleted the Product from the DB via an AJAX call...');
		_.remove(Products, { id: id});
	}
};

module.exports = ProductApi;