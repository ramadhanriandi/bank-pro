/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';

const renderComponent = (props = {}) => shallow(
  <HomePage {...props} />,
);

describe('<HomePage />', () => {
  it('should render <Navbar /> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Navbar').length).toEqual(1);
  });
});
