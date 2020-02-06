/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { mount } from 'enzyme';

import Title from '../index';

const renderComponent = (props = {}) => mount(
  <Title title="" {...props} />,
);

describe('<Title />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
