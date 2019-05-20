import React from 'react';

import { Button, TextInput, Box } from 'grommet';

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
	    <Box align="center" pad="medium" gap="small" direction="row-responsive">
	      <Box>
	        <TextInput
	          type="text"
	          align="center"
	          placeholder="Warung Name"
	          onChange={this.handleTextChange}
	          data-test="newRestaurantName"
	        />
	      </Box>
	      <Box>
	        <Button label="Save" data-test="saveNewRestaurantButton" onClick={this.handleSave} />
	      </Box>
	    </Box>
	  );
	}
}
