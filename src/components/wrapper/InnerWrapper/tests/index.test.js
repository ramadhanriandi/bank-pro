/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { mount } from 'enzyme';

import InnerWrapper from '../index';

const renderComponent = (props = {}) => mount(
  <InnerWrapper {...props}>Test</InnerWrapper>,
);

describe('<InnerWrapper />', () => {
  it('should render .wrapper class', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.wrapper').length).toEqual(1);
  });
});
