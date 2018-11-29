/* eslint-disable */
/**
 * Testing our CodeTabButton component
 */
import { shallow } from 'enzyme';
import React from 'react';
import CodeTabButton from '../CodeTabButton';

const renderComponent = (props = {}) => shallow(
  <CodeTabButton {...props} />
);

describe('<CodeTabButton />', () => {
  let name;
  let active;
  let onClick;
  beforeAll(() => {
    name = 'Test name';
    active = true;
    onClick = jest.fn();
  });
  it('should render an CodeTabButton', () => {
    const renderedComponent = renderComponent({
      name,
      active,
      onClick: () => {},
    });
    expect(renderedComponent.length).toBe(1);
  });
});
