import React from 'react';

import { Button, TextInput, Box, FormField, Form } from 'grommet';
import { Formik } from 'formik';

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
	    <Box align="center" pad="medium" gap="large" direction="column">
	      <Formik>
	        {() => (
	          <Form>
	            <Box align="center" pad="medium" gap="medium">
	              <FormField
	                label="Name"
	                name="name"
	                placeholder="Warung Name"
	                onChange={this.handleNameChange}
	                data-test="newRestaurantName"
	              />
	              <FormField
	                label="Phone"
	                name="phone"
	                placeholder="Warung Phone"
	                onChange={this.handlePhoneChange}
	                data-test="newRestaurantPhone"
	              />
	            </Box>
	            <Box>
	              <Button label="Save" data-test="saveNewRestaurantButton" onClick={this.handleSave} />
	            </Box>
	          </Form>
	        )}
	      </Formik>
	    </Box>
	  );
	}
}
