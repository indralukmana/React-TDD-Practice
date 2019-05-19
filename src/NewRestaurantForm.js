import React from 'react';

export default class NewRestaurantForm extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-test="newRestaurant" />
        <button data-test="saveNewRestaurant">Save</button>
      </div>
    );
  }
}
