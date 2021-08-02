import React from 'react';
/* eslint-disable max-len */
import { render, cleanup } from '@testing-library/react';
import MethodButtons from './MethodButtons';

describe('MethodButtons component', () => {
  afterEach(() => cleanup());
  it('renders MethodButtons', () => {
    const method = 'get';
    const onChange = jest.fn();
    const { asFragment } = render(<MethodButtons method={method} onChange={onChange} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
