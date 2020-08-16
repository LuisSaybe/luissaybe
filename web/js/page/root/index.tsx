import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import { Application } from 'web/js/component/application';
import { reducers } from "web/js/redux/reducer";

export function Root() {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Application />
      </BrowserRouter>
    </Provider>
  );
}
