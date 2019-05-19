import React from 'react';
import NewsRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default class NewRestaurantListPage extends React.Component {
	state = {
	  restaurants: [],
	};

	handleAddRestaurant = restaurantName => {
	  this.setState({
	    restaurants: [...this.state.restaurants, restaurantName],
	  });
	};
	render() {
	  return (
	    <div>
	      <button data-test="addRestaurantButton">Add Restaurant</button>
	      <NewsRestaurantForm onSave={this.handleAddRestaurant} />
	      <RestaurantList restaurants={this.state.restaurants} />
	    </div>
	  );
	}
}
