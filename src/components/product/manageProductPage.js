"use strict";

var React = require('react');
var Router = require('react-router');
var ProductForm = require('./ProductForm');
var ProductActions = require('../../actions/ProductActions');
var ProductStore = require('../../stores/ProductStore');
var toastr = require('toastr');

var ManageProductPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	statics: {
		willTransitionFrom: function(transition, component) {
			if (component.state.dirty && !confirm('Leave without saving?')) {
				transition.abort();
			}
		}
	},

	getInitialState: function() {
		return {
			Product: { id: '', Name: '', Description: '', Price: ''},
			errors: {},
			dirty: false
		};
	},

	componentWillMount: function() {
		var ProductId = this.props.params.id; //from the path '/Product:id'
		if (ProductId) {
			this.setState({Product: ProductStore.getProductById(ProductId) });
		}
	},

	setProductState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.Product[field] = value;
		return this.setState({Product: this.state.Product});
	},

	productFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.

  if(!this.state.Product.Name || !this.state.Product.Price) {
      this.state.errors.Name = 'Please fill out the required fields.';
	formIsValid = false;
       }

		// if (this.state.Product.Name == null || this.state.Product.Price == null) {
        //     debugger;
		// 	this.state.errors.Name = 'Product name must be at least 3 characters.';
		// 	formIsValid = false;
		// }

		// if (this.state.Product.Price == null) {
		// 	this.state.errors.Price = 'Last name must be at least 3 characters.';
		// 	formIsValid = false;
		// }
		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	saveProduct: function(event) {
		event.preventDefault();

		if (!this.productFormIsValid()) {
			return;
		}

		if (this.state.Product.id) {
			ProductActions.updateProduct(this.state.Product);
		} else {
			ProductActions.createProduct(this.state.Product);
		}
		
		this.setState({dirty: false});
		toastr.success('Product saved successfully.');
		this.transitionTo('Products');
	},

	render: function() {
		return (
			<ProductForm
				Product={this.state.Product}
				onChange={this.setProductState}
				onSave={this.saveProduct}
				errors={this.state.errors} />
		);
	}
});

module.exports = ManageProductPage;