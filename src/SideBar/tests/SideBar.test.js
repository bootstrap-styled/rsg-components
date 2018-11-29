/* eslint-disable */
/**
 * Testing our SideBar component
 */
import { shallow } from 'enzyme';
import React from 'react';
import SideBar from '../SideBar';

const renderComponent = (props = {}) => shallow(
  <SideBar {...props} />
);

describe('<SideBar />', () => {
  it('should render an SideBar', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.length).toBe(1);
  });
});
