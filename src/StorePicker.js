import React, { Component } from 'react';
import { render } from 'react-dom';

class StorePicker extends Component {
	render(){
		return(
			<form className="store-selector">
				<h2>Please enter s store</h2>
				<input type="text" required />
				<button>Visit -></button>
			</form>
		)
	}
}

export default StorePicker;