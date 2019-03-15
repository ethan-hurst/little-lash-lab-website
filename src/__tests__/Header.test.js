import { shallow } from '../enzyme';
import React from 'react';
import { create } from "react-test-renderer";
import _Header from '../components/layout/_Header';

test('should match the snapshot', () => {
    const c = create(<_Header />)
    expect(c.toJSON()).toMatchSnapshot();
});