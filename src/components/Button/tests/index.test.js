/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';

const renderComponent = (props = {}) => mount(
  <Button text="" {...props} />,
);

describe('<Button />', () => {
  it('should render a <button> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button').length).toEqual(1);
  });
});
