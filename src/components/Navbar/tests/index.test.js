/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../index';

const renderComponent = (props = {}) => shallow(
  <Navbar {...props} />,
);

describe('<Navbar />', () => {
  it('should render a <Link> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Link').length).toEqual(3);
  });
});
