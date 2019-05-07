import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of gifts', () => {
    expect(wrapper.state().gifts).toEqual([]);
  });

  describe('when clicking the `add-gift` button', () => {
    const id = 1;

    beforeEach(() => {
      wrapper.find('.btn-add').simulate('click');
    });

    it('adds a new gift to `state`', () => {
      expect(wrapper.state().gifts).toEqual([{ id }]);
    });

    it('add a new gift to the rendered list', () => {
      expect(wrapper.find('.gift-list').children().length).toEqual(1);
    });

    it('creates a Gift component', () => {
      expect(wrapper.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        wrapper.instance().removeGift(id);
      });

      it('remves the gift from `state`', () => {
        expect(wrapper.state().gifts).toEqual([]);
      });
    });
  });
});
