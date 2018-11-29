/* eslint-disable */
/**
 * Testing our UsageTabButton component
 */
import { shallow } from 'enzyme';
import React from 'react';
import UsageTabButton from '../UsageTabButton';

const renderComponent = (props = {}) => shallow(
  <UsageTabButton {...props} />
);

describe('<UsageTabButton />', () => {
  let name;
  let onClick;
  let props;
  beforeAll(() => {
    name = 'Test name';
    onClick = jest.fn();
    props = {
      props: [],
      methods: [],
    };
  });
  it('should render an UsageTabButton', () => {
    const renderedComponent = renderComponent({
      name,
      onClick: () => {},
      props,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
