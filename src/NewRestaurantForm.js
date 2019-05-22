import React from 'react';

import { Button, TextInput, Box } from 'grommet';

export default class NewRestaurantForm extends React.Component {
	state = {
	  name: '',
	  phone: '',
	};

	handleNameChange = event => {
	  this.setState({ name: event.target.value });
	};

	handlePhoneChange = event => {
	  this.setState({ phone: event.target.value });
	};

	handleSave = event => {
	  const { name, phone } = this.state;
	  const { onSave } = this.props;

	  onSave({ name, phone });
	};

	render() {
	  return (
	    <Box align="center" pad="medium" gap="small" direction="row-responsive">
	      <Box>
	        <TextInput
	          type="text"
	          align="center"
	          placeholder="Warung Name"
	          onChange={this.handleNameChange}
	          data-test="newRestaurantName"
	        />
	        <TextInput
	          type="text"
	          align="center"
	          placeholder="Warung Phone"
	          onChange={this.handlePhoneChange}
	          data-test="newRestaurantPhone"
	        />
	      </Box>
	      <Box>
	        <Button label="Save" data-test="saveNewRestaurantButton" onClick={this.handleSave} />
	      </Box>
	    </Box>
	  );
	}
}
