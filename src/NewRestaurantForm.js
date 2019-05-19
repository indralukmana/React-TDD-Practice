import React from 'react';

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
	      <input type="text" onChange={this.handleTextChange} data-test="newRestaurantName" />
	      <button data-test="saveNewRestaurantButton" onClick={this.handleSave}>
					Save
	      </button>
	    </div>
	  );
	}
}
