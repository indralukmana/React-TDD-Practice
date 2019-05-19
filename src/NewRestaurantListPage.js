import React from 'react';
import NewsRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

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
	    <div>
	      <button data-test="addRestaurantButton" onClick={this.handleShowRestaurantForm}>
					Add Restaurant
	      </button>
	      {this.state.showRestaurantForm ? <NewsRestaurantForm onSave={this.handleAddRestaurant} /> : null}
	      <RestaurantList restaurants={this.state.restaurants} />
	    </div>
	  );
	}
}
