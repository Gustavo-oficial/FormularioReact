import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Categorias from './pages/categorias';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Categorias />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
