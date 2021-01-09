import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(ReduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)