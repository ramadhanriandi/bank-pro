/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import TransferPage from '../index';

const renderComponent = (props = {}) => shallow(
  <TransferPage {...props} />,
);

describe('<TransferPage />', () => {
  it('should render <OuterWrapper /> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('OuterWrapper').length).toEqual(1);
  });
});
