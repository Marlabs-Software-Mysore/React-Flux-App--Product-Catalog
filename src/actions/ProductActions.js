"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ProductApi = require('../api/ProductApi');
var ActionTypes = require('../constants/actionTypes');

var ProductActions = {
	createProduct: function(Product) {
		var newProduct = ProductApi.saveProduct(Product);

		//Hey dispatcher, go tell all the stores that an Product was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_PRODUCT,
			Product: newProduct
		});
	},

	updateProduct: function(Product) {
		var updatedProduct = ProductApi.saveProduct(Product);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_PRODUCT,
			Product: updatedProduct
		});
	},

	deleteProduct: function(id) {
		ProductApi.deleteProduct(id);

		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_PRODUCT,
			id: id
		});
	}
};

module.exports = ProductActions;