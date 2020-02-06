/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from '../index';

const renderComponent = (props = {}) => shallow(
  <LoginPage {...props} />,
);

describe('<LoginPage />', () => {
  it('should render <NonNavbarWrapper /> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('NonNavbarWrapper').length).toEqual(1);
  });
});
