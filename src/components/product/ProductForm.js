"use strict";

var React = require('react');
var Input = require('../common/textInput');

var ProductForm = React.createClass({
	propTypes: {
		Product:	React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {
		return (
			<form>
				<h1>Add Product</h1>
				<Input
					name="Name"
					label="Product Name"
					value={this.props.Product.Name}
					onChange={this.props.onChange}
					error={this.props.errors.Name} />
                    

				<Input
					name="Description"
					label="Description"
					value={this.props.Product.Description}
					onChange={this.props.onChange}
					/>
                   
				<Input
					name="Price"
					label="Price"
					value={this.props.Product.Price}
					onChange={this.props.onChange}
					/>
				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = ProductForm;