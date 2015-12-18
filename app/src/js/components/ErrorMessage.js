var React = require('react');

var ErrorMessage = React.createClass({

	render: function() {
		return (
			<div>
				<p className="color-red">{this.props.message}</p>
			</div>
		);
	}

});

module.exports = ErrorMessage;