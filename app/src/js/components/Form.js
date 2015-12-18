var React = require('react');
var TextInput = require('./TextInput');

var Form = React.createClass({

	getInitialState: function() {
		return {
			inputFields: {
				"name": {
					"type": "text",
					"label": "Name",
					"keyName": "name",
					"placeholder": "Enter your name (required, text, <20)",
					"className": "form-control",
					"errorMessage": "",
					"required": true,
					"max": 20,
					"min": 0,
					"value": "",
					"valid": false
				} ,
				"last_name": {
					"type": "text",
					"label": "Last name",
					"keyName": "last_name",
					"placeholder": "Enter your last name (not required, text, <50)",
					"className": "form-control",
					"errorMessage": "",
					"required": false,
					"max": 50,
					"min": 0,
					"value": "",
					"valid": true
				} ,
				"age": {
					"type": "number",
					"label": "Age",
					"keyName": "age",
					"placeholder": "Enter your age (required, number, >=0, <130)",
					"className": "form-control",
					"errorMessage": "",
					"required": true,
					"max": 130,
					"min": 0,
					"value": "",
					"valid": false
				} ,
				"weight": {
					"type": "number",
					"label": "Weight",
					"keyName": "weight",
					"placeholder": "Enter your weight (not required, number, >=0, no max)",
					"className": "form-control",
					"errorMessage": "",
					"required": false,
					"max": false,
					"min": 0,
					"value": "",
					"valid": true
				} 
			}
		};
	},

	/**
	 * Function that handles input change.
	 *
	 * @param {[type]} value   [input value]
	 * @param {[type]} keyName [keyName for function
	 *                         reuse of all inputs]
	 *
	 * @return {[type]} [description]
	 */
	_handleChange: function (value, keyName) {
		var result = this._validateInput(value, this.state.inputFields[keyName]);
		var newState = this.state.inputFields;

		if (result === true) {
			// Valid input
			newState[keyName].errorMessage = "";
			newState[keyName].value = value;
			newState[keyName].valid = true;
		} else {
			// Not valid
			newState[keyName].errorMessage = result;
			newState[keyName].value = value;
			newState[keyName].valid = false;
		}

		// Update state
		this.setState({
			inputFields: newState 
		});
	},

	/**
	 * Function that validates input.
	 *
	 * @param {[type]} value      [input value]
	 * @param {[type]} validation [validation rules]
	 *
	 * @return {[type]} [error message or true]
	 */
	_validateInput: function (value, validation) {
		if (validation.type === 'number') {
			// Number input
			if (validation.min !== false) {
				if (value < validation.min) {
					// Too low
					return 'You must enter a value over ' + validation.min;
				}
			}
			if (validation.max !== false) {
				if (value > validation.max) {
					// Too high
					return 'You must enter a value under ' + validation.max;
				}
			}
			if (validation.required) {
				// Required field
				if (!value.length) {
					// No value
					return 'You must enter a value';
				}
				if (value !== '0' && !Number(value)) {
					// Not a number
					return 'You must enter a valid value';
				}
			} else {
				// Not required
				if (value !== '0' && !Number(value) && value.length > 0) {
					// Input but not a number
					return 'You must enter a valid value';
				}
			}
		}

		if (validation.type === 'text') {
			// Text input
			if (validation.required) {
				// Required field
				if (!value.length) {
					return 'You must enter a value';
				}
			}
			if (value.length < validation.min) {
				// Too les characters
				return 'You must enter a value over ' + validation.min;
			}
			if (value.length > validation.max) {
				// To much characters
				return 'You must enter a value under ' + validation.max;
			}
		}
		
		// Valid
		return true;
	},

	render: function() {

		// TODO -> Render input content
		
		var debug = this.state.inputFields;

		return (
			<div className="container">
				<h1>Form with reusable code and validation</h1>
				<div className="row">
					<div className="col-sm-8">
						<div className="row">
							<div className="col-sm-2">
								<label>{this.state.inputFields.name.label}</label>
							</div>
							<div className="col-sm-8">
							<TextInput
								type={this.state.inputFields.name.type}
								placeholder={this.state.inputFields.name.placeholder}
								handleChange={this._handleChange}
								className={this.state.inputFields.name.className}
								keyName={this.state.inputFields.name.keyName}
								required={this.state.inputFields.name.required}
								value={this.state.inputFields.name} />
							</div>
						</div>
						<div className="row">
							<div className="col-sm-2">
								<label>{this.state.inputFields.last_name.label}</label>
							</div>
							<div className="col-sm-8">
							<TextInput
								type={this.state.inputFields.last_name.type}
								placeholder={this.state.inputFields.last_name.placeholder}
								handleChange={this._handleChange}
								className={this.state.inputFields.last_name.className}
								keyName={this.state.inputFields.last_name.keyName}
								required={this.state.inputFields.last_name.required}
								value={this.state.inputFields.last_name} />
							</div>
						</div>
						<div className="row">
							<div className="col-sm-2">
								<label>{this.state.inputFields.age.label}</label>
							</div>
							<div className="col-sm-8">
							<TextInput
								type={this.state.inputFields.age.type}
								placeholder={this.state.inputFields.age.placeholder}
								handleChange={this._handleChange}
								className={this.state.inputFields.age.className}
								keyName={this.state.inputFields.age.keyName}
								required={this.state.inputFields.age.required}
								value={this.state.inputFields.age} />
							</div>
						</div>
						<div className="row">
							<div className="col-sm-2">
								<label>{this.state.inputFields.weight.label}</label>
							</div>
							<div className="col-sm-8">
							<TextInput
								type={this.state.inputFields.weight.type}
								placeholder={this.state.inputFields.weight.placeholder}
								handleChange={this._handleChange}
								className={this.state.inputFields.weight.className}
								keyName={this.state.inputFields.weight.keyName}
								required={this.state.inputFields.weight.required}
								value={this.state.inputFields.weight} />
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="row">
							<h3>Debugging:</h3>
							<pre>{JSON.stringify(debug, null, 2)}</pre>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Form;