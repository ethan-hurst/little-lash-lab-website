import { shallow } from '../enzyme';
import React from 'react';
import { create } from "react-test-renderer";
import _Footer from '../components/layout/_Footer';

test('should match the snapshot', () => {
    const c = create(<_Footer />)
    expect(c.toJSON()).toMatchSnapshot();
});