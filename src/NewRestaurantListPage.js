import React from 'react';
import NewsRestaurantForm from './NewRestaurantForm';

export default class NewRestaurantListPage extends React.Component {
  render() {
    return (
      <div>
        <button data-test="addRestaurantButton">Add Restaurant</button>
        <NewsRestaurantForm />
      </div>
    );
  }
}
