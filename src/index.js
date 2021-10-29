import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Navbar from './components/navbar';
import App from './components/app';
import reducers from './reducers';

import '../src/sass/default.scss';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Navbar />
        <App />
    </Provider>
    , document.getElementById('root')
);