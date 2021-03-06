"use strict";

var React = require('react');

var Input = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string
  },
  onBlur: function(e) {
     this.props.error = "";
  },

  render: function () {
       var requiredSpanStyle = {
      "color": "red"
        };
    var wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }
    
    return (
     <div className={wrapperClass}>
        <div className="input" style={requiredSpanStyle}>{this.props.error}</div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <span style={requiredSpanStyle}>*</span>
         <div className="field">
             <input type="text" 
                 id={this.props.id}
                 name={this.props.name}
                 className="form-control"
                 placeholder={this.props.placeholder}
                 ref={this.props.name}
                 value={this.props.value}
                 onChange={this.props.onChange}
                onBlur={this.onBlur} />
        </div>
      </div>
    );
  }
});

module.exports = Input;