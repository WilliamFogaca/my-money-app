import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Promise from 'redux-promise'

import App from './main/app';
import reducers from './main/reducers'

const reduxdevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reactDevTools = window.__REACT_DEVTOOLS_EXTENSION__ && window.__REACT_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(Promise)(createStore)(reducers, reduxdevTools, reactDevTools)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
, document.getElementById('app'))