/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { mount } from 'enzyme';

import OuterWrapper from '../index';

const renderComponent = (props = {}) => mount(
  <OuterWrapper {...props}>Test</OuterWrapper>,
);

describe('<OuterWrapper />', () => {
  it('should render .outer-wrapper class', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.outer-wrapper').length).toEqual(1);
  });
});
