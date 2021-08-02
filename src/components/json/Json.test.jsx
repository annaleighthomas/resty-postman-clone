import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Json from './Json';

describe('Json component', () => {
  afterEach(() => cleanup());
  it('renders Json', () => {
    const { asFragment } = render(<Json />);
    expect(asFragment()).toMatchSnapshot();
  });
});
