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
    it('adds a new gift to `state`', () => {
      wrapper.find('.btn-add').simulate('click');
      expect(wrapper.state().gifts).toEqual([{ id: 1 }]);
    });

    it('add a new gift to the rendered list', () => {
      wrapper.find('.btn-add').simulate('click');
      expect(wrapper.find('.gift-list').children().length).toEqual(1);
    });
  });
});
