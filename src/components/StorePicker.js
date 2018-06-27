import React, { Component } from 'react';
import { render } from 'react-dom';
import { getFunName } from "../helpers";

class StorePicker extends Component {
	myInput = React.createRef();

	goToStore = event => {
		//stop the form submit
		event.preventDefault();
		//get the text from input
		const storeName = this.myInput.current.value;
		this.props.history.push(`/store/${storeName}`);
		//

	};

	render(){
		return(
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please enter s store</h2>
				<input type="text" ref={this.myInput} required defaultValue={getFunName()}/>
				<button>Visit -></button>
			</form>
		)
	}
}

export default StorePicker;