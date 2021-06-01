import * as React from 'react';
import {act} from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import Hello from './Hello';


let container: Element;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});

it('renders with or without a name', () => {
  act(() => {
    render(<Hello name="Jenny" />, container);
  });
  expect(container.textContent).toBe('Hello, Jenny!');

  act(() => {
    render(<Hello name="Margaret" />, container);
  });
  expect(container.textContent).toBe('Hello, Margaret!');
});


