import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Gift from './Gift';

configure({ adapter: new Adapter() });

describe('Gift', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = {
    gift: { id },
    removeGift: mockRemove,
  };
  const wrapper = shallow(<Gift {...props} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('initializes a person and present in `state`', () => {
    expect(wrapper.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing into the person input', () => {
    const person = 'Uncle';

    beforeEach(() => {
      wrapper.find('.input-person').simulate('change', { target: { value: person } });
    });

    it('updates the person in `state`', () => {
      expect(wrapper.state().person).toEqual(person);
    });
  });

  describe('when typing into the present input', () => {
    const present = 'Golf Clubs';

    beforeEach(() => {
      wrapper.find('.input-present').simulate('change', { target: { value: present } });
    });

    it('updates the present in `state`', () => {
      expect(wrapper.state().present).toEqual(present);
    });
  });

  describe('when clicking the `remove Gift` button', () => {
    beforeEach(() => {
      wrapper.find('.btn-remove').simulate('click');
    });

    it('call removeGift callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
