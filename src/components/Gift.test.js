import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Gift from './Gift';

configure({ adapter: new Adapter() });

describe('Gift', () => {
  const wrapper = shallow(<Gift />);

  it('renders properly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('initializes a person and present in `state`', () => {
    expect(wrapper.state()).toEqual({ person: '', present: '' });
  });
});