"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var ProductApi = require('../api/ProductApi');

var InitializeActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				Products: ProductApi.getAllProducts()
			}
		});
	}
};

module.exports = InitializeActions;