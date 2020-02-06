/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { mount } from 'enzyme';

import NonNavbarWrapper from '../index';

const renderComponent = (props = {}) => mount(
  <NonNavbarWrapper {...props}>Test</NonNavbarWrapper>,
);

describe('<NonNavbarWrapper />', () => {
  it('should render .login-wrapper class', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.login-wrapper').length).toEqual(1);
  });
});
