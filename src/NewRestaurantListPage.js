import React from 'react';
import NewsRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

import { Grommet, Button, Box } from 'grommet';

export default class NewRestaurantListPage extends React.Component {
	state = {
	  restaurants: [],
	  showRestaurantForm: false,
	};

	handleAddRestaurant = restaurantName => {
	  this.setState({
	    showRestaurantForm: false,
	    restaurants: [...this.state.restaurants, restaurantName],
	  });
	};

	handleShowRestaurantForm = () => {
	  this.setState({
	    showRestaurantForm: true,
	  });
	};

	render() {
	  return (
	    <Box align="center" pad="medium" gap="medium">
	      <Button primary label="Add Warung" data-test="addRestaurantButton" onClick={this.handleShowRestaurantForm} />

	      {this.state.showRestaurantForm ? <NewsRestaurantForm onSave={this.handleAddRestaurant} /> : null}

	      <Box align="center" alignContent="center" gap="small" width="medium">
	        <RestaurantList restaurants={this.state.restaurants} />
	      </Box>
	    </Box>
	  );
	}
}
