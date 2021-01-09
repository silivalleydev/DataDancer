import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(ReduxThunk))

ReactDOM.render(
    <Provider store={store}>
            <Router>
                <HashRouter basename={process.env.PUBLIC_URL}>
                        <App />
                </HashRouter>
            </Router>
    </Provider>,
    document.getElementById('root')
)