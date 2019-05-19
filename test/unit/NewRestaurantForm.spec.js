import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking save button', () => {
    it('calls onSave handler', () => {
      const saveHandler = jest.fn();
      const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      wrapper.find('[data-test="newRestaurantName"]')
        .simulate('change', {
          target: { value: 'Warung Sate' },
        });

      wrapper.find('[data-test="saveNewRestaurantButton"]')
        .simulate('click');

      expect(saveHandler)
        .toHaveBeenCalledWith('Warung Sate');
    });
  });
});