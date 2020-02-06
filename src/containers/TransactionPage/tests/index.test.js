/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import TransactionPage from '../index';

const renderComponent = (props = {}) => shallow(
  <TransactionPage {...props} />,
);

describe('<TransactionPage />', () => {
  it('should render <OuterWrapper /> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('OuterWrapper').length).toEqual(1);
  });
});
