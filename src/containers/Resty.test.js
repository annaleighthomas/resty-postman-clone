/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Resty from './Resty';
import { MemoryRouter } from 'react-router-dom';


describe('Resty Container', () => {
  it('renders Resty', async () => {
    render(<MemoryRouter><Resty /></MemoryRouter>);

    const urlPlaceholder = screen.getByPlaceholderText('URL');
    userEvent.type(urlPlaceholder);
    fireEvent.change(urlPlaceholder, { target: { value: 'futuramaapi.herokuapp.com/api/quotes' } });
    expect(urlPlaceholder).toHaveDisplayValue('futuramaapi.herokuapp.com/api/quotes');

    const radioValue = screen.getByLabelText('GET');
    userEvent.click(radioValue);
    fireEvent.change(radioValue, { target: { value: 'GET' } });
    expect(radioValue).toBeChecked('GET');

    const submitButton = screen.getByRole('button');
    const display = screen.getByTestId('display');
    userEvent.click(submitButton);
    expect(display).not.toBeEmptyDOMElement();

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement(); 

  });
});
