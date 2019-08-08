import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', ()=> {
  const label = document.createElement("label");
  ReactDOM.render(<App/>,label)
  ReactDOM.unmountComponentAtNode(label);
})