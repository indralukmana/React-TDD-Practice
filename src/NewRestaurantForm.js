import React from 'react';

import { Button, TextInput, Box, FormField, Form } from 'grommet';
import { Formik } from 'formik';

export default class NewRestaurantForm extends React.Component {
	state = {
	  name: '',
	  phone: '',
	  submitted: false,
	};

	handleNameChange = event => {
	  this.setState({ name: event.target.value });
	};

	handlePhoneChange = event => {
	  this.setState({ phone: event.target.value });
	};

	handleSave = values => {
	  const { name, phone } = values;
	  const { onSave } = this.props;

	  onSave({ name, phone });
	};

	render() {
	  const { submitted } = this.state;
	  return (
	    <Box align="center" pad="medium" gap="large" direction="column">
	      <Formik
	        validate={values => {
	          const errors = {};
	          if (!values.name) {
	            errors.name = 'required';
	          }
	          if (!values.phone) {
	            errors.phone = 'required';
	          } else if (!values.phone.match(/^[0-9]+$/)) {
	            errors.phone = 'numeric only';
	          }
	          return errors;
	        }}
	        validateOnBlur={submitted}
	        validateOnChange={submitted}
	        onSubmit={this.handleSave} //This will set the onSave from parent component
	      >
	        {({ values, errors, handleChange, handleSubmit }) => (
	          <Form
	            onSubmit={event => {
	              event.preventDefault();
	              this.setState({ submitted: true });
	              handleSubmit();
	            }}>
	            <Box align="center" pad="medium" gap="medium">
	              <FormField label="Name" error={errors.name}>
	                <TextInput
	                  id="name"
	                  name="name"
	                  value={values.name || ''}
	                  onChange={handleChange}
	                  data-test="newRestaurantName"
	                />
	              </FormField>

	              <FormField label="Phone" error={errors.phone}>
	                <TextInput
	                  name="phone"
	                  placeholder="Warung Phone"
	                  onChange={handleChange}
	                  value={values.phone || ''}
	                  data-test="newRestaurantPhone"
	                />
	              </FormField>
	            </Box>
	            <Box>
	              <Button label="Save" type="submit" data-test="saveNewRestaurantButton" />
	            </Box>
	          </Form>
	        )}
	      </Formik>
	    </Box>
	  );
	}
}
