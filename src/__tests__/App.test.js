import { shallow } from '../enzyme';
import React from 'react';
import { create } from "react-test-renderer";
import App from '../../src/App';
import _Router from '../components/_Router';


test('should match the snapshot', () => {
    const c = create(<App />)
    expect(c.toJSON()).toMatchSnapshot();
});

test('should contain the Router component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<_Router />)).toBeTruthy();
});