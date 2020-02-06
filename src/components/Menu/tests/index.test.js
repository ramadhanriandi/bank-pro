/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import Menu from '../index';

const renderComponent = (props = {}) => shallow(
  <Menu image="" title="" link="" {...props} />,
);

describe('<Menu />', () => {
  it('should render a <Link> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Link').length).toEqual(1);
  });
});
