var React = require('react');
var ErrorMessage = require('./ErrorMessage');

var TextInput = React.createClass({

	/**
	 * Handle on change for input
	 */
	_handleChange: function () {
		this.props.handleChange(
			this.refs.inputText.value,
			this.props.keyName
		);
	},

	render: function() {
		return (
			<div>
				<input 
					className={this.props.className}
					type={this.props.type}
					placeholder={this.props.placeholder}
					value={this.props.value.value}
					ref="inputText"
					onChange={this._handleChange} />

				<ErrorMessage 
					message={this.props.value.errorMessage}/>
			</div>
		);
	}

});

module.exports = TextInput;