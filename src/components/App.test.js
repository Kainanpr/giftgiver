import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

const app = shallow(<App />);

it('renders correctly', () => {
  expect(toJson(app)).toMatchSnapshot();
});