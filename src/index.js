import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/button/button';

const App = () => {
  return (
    <div>
      <Button title={'Button Title'} />
    </div>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);
