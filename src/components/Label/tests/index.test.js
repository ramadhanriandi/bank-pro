/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { mount } from 'enzyme';

import Label from '../index';

const renderComponent = (props = {}) => mount(
  <Label htmlFor="" {...props}>Test</Label>,
);

describe('<Label />', () => {
  it('should render a <label> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('label').length).toEqual(1);
  });
});
