"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _Products = [];

var ProductStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllProducts: function() {
		return _Products;
	},

	getProductById: function(id) {
		return _.find(_Products, {id: id});
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_Products = action.initialData.Products;
			ProductStore.emitChange();
			break;
		case ActionTypes.CREATE_PRODUCT:
			_Products.push(action.Product);
			ProductStore.emitChange();
			break;
		case ActionTypes.UPDATE_PRODUCT:
			var existingProduct = _.find(_Products, {id: action.Product.id});
			var existingProductIndex = _.indexOf(_Products, existingProduct); 
			_Products.splice(existingProductIndex, 1, action.Product);
			ProductStore.emitChange();
			break;	
		case ActionTypes.DELETE_PRODUCT:
			_.remove(_Products, function(Product) {
				return action.id === Product.id;
			});
			ProductStore.emitChange();
			break;
		default:
			// no op
	}
});

module.exports = ProductStore;