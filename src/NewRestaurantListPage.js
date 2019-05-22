import React from 'react';
import NewsRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

import { Grommet, Button, Box, Layer } from 'grommet';

export default class NewRestaurantListPage extends React.Component {
	state = {
	  restaurants: [],
	  showRestaurantForm: false,
	};

	handleAddRestaurant = restaurantName => {
	  this.setState({
	    open: undefined,
	    restaurants: [...this.state.restaurants, restaurantName],
	  });
	};

	handleShowRestaurantForm = () => {
	  this.setState({
	    showRestaurantForm: true,
	  });
	};

	onOpen = () => this.setState({ open: true });

	onClose = () => this.setState({ open: undefined });

	render() {
	  return (
	    <Box
	      align="center"
	      background={{ color: 'light-2', opacity: 'strong' }}
	      pad="large"
	      gap="xlarge"
	      round
	      justify="center">
	      <Button primary label="Add Warung" data-test="addRestaurantButton" onClick={this.onOpen} />

	      {/* {this.state.showRestaurantForm ?  : null} */}

	      {this.state.open && (
	        <Layer position="center" modal onClickOutside={this.onClose} onClose={this.onClose}>
	          <NewsRestaurantForm onSave={this.handleAddRestaurant} />
	        </Layer>
	      )}

	      <Box align="center" justify="center" gap="small" width="medium">
	        <RestaurantList restaurants={this.state.restaurants} />
	      </Box>
	    </Box>
	  );
	}
}
