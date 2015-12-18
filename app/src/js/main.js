var React 		= require('react');
var ReactDOM 	= require('react-dom');
var Form 		= require('./components/Form');

var reactComponent = ReactDOM.render(
	<Form />,
	document.getElementById('app'),
	function() {
		console.log('After render');
	}
);
