import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

// import { Provider } from 'react-redux'
// import store from './store'

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <HashRouter basename='/polex/'>
        <App />
      </HashRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

