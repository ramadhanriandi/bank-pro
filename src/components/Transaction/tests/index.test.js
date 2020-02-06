/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { mount } from 'enzyme';

import Transaction from '../index';

const renderComponent = (props = {}) => mount(
  <Transaction date="" type="" amount={'0'} {...props} />,
);

describe('<Transaction />', () => {
  it('should render .transaction-wrapper class', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.transaction-wrapper').length).toEqual(1);
  });
});
