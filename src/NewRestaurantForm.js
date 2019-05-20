import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

export default class NewRestaurantForm extends React.Component {
	state = { inputText: '' };

	handleTextChange = event => {
	  this.setState({ inputText: event.target.value });
	};

	handleSave = event => {
	  const { inputText } = this.state;
	  const { onSave } = this.props;

	  onSave(inputText);
	};

	render() {
	  return (
	    <div>
	      <TextField
	        type="text"
	        placeholder="Enter the restaurant name"
	        onChange={this.handleTextChange}
	        data-test="newRestaurantName"
	      />
	      <PrimaryButton data-test="saveNewRestaurantButton" onClick={this.handleSave}>
					Save
	      </PrimaryButton>
	    </div>
	  );
	}
}
