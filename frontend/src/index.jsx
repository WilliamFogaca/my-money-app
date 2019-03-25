import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Routes from './main/routes';
import reducers from './main/reducers'

const reduxdevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reactDevTools = window.__REACT_DEVTOOLS_EXTENSION__ && window.__REACT_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, reduxdevTools, reactDevTools)
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  
, document.getElementById('app'))