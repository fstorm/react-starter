import React from 'react';
import { render } from 'react-dom';

import Button from './components/button/button';

render(
  <div>
    <Button title={'default title'} />
  </div>,
  document.getElementById('app'),
);
