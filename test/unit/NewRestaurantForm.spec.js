import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking save button', () => {
    it('calls onSave handler', () => {
      const saveHandler = jest.fn();
      const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      wrapper.find('input[data-test="newRestaurantName"]')
        .simulate('change', {
          target: { value: 'Warung Sate' },
        });

      wrapper.find('input[data-test="newRestaurantPhone"]')
        .simulate('change', {
          target: { value: '081299999999' },
        });

      wrapper.find('button[data-test="saveNewRestaurantButton"]')
        .simulate('click');

      expect(saveHandler)
        .toHaveBeenCalledWith({ name: 'Warung Sate', phone: '081299999999' });
    });
  });
});
