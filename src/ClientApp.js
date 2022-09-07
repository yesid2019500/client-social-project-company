import logo from './logo.svg';
import React from 'react';
import {Provider} from 'react-redux'

import { store } from './store/store';
import { AppRouter } from './routes/AppRoutes';

function ClientApp() {
  return (
    <div className="App">

      <Provider store={store}>
         <AppRouter/>
    </Provider>   

    </div>
  );
}

export default ClientApp;
